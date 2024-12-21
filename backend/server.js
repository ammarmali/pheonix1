/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config(); // Import and configure dotenv

const app = express();
app.use(cors());
app.use(express.json());

// Configuration
const endpoint = process.env.ENDPOINT_URL;
const deployment = process.env.DEPLOYMENT_NAME;
const searchEndpoint = process.env.SEARCH_ENDPOINT;
const searchKey = process.env.SEARCH_KEY;
const searchIndex = process.env.SEARCH_INDEX_NAME;
const subscriptionKey = process.env.AZURE_OPENAI_API_KEY;


require("dotenv").config();
console.log("Loaded Environment Variables:");
console.log("ENDPOINT_URL:", process.env.ENDPOINT_URL);
console.log("DEPLOYMENT_NAME:", process.env.DEPLOYMENT_NAME);
console.log("SEARCH_ENDPOINT:", process.env.SEARCH_ENDPOINT);
console.log("SEARCH_KEY:", process.env.SEARCH_KEY);
console.log("SEARCH_INDEX_NAME:", process.env.SEARCH_INDEX_NAME);
console.log("AZURE_OPENAI_API_KEY:", process.env.AZURE_OPENAI_API_KEY);
console.log("PORT:", process.env.PORT);


console.log("Endpoint URL:", endpoint);
console.log("Search Endpoint:", searchEndpoint);
console.log("Search Key:", searchKey);
console.log("Search Index:", searchIndex);
console.log("Subscription Key:", subscriptionKey);

// Handle POST request for RAG functionality
app.post("/rag", async (req, res) => {
    const { userQuery } = req.body;

    if (!userQuery) {
        return res.status(400).send({ error: "userQuery is required." });
    }

    try {
        const aiSearchResponse = await fetchAIsearchResponse(userQuery);
        const openAIResponse = await fetchOpenAIResponse(aiSearchResponse, userQuery);

        res.status(200).send({ openAIResponse, aiSearchResponse });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "An error occurred while processing your request." });
    }
});

// Function to fetch response from AIsearch
async function fetchAIsearchResponse(query) {
    console.log("Fetching AIsearch response for query:", query);
    const response = await axios.post(
        `${searchEndpoint}/indexes/${searchIndex}/docs/search?api-version=2024-05-01-preview`,
        {
            search: query,
            queryType: "semantic",
            semanticConfiguration: "phoneix-semantic-configuration",
            top: 5,
        },
        {
            headers: {
                "Content-Type": "application/json",
                "api-key": searchKey,
            },
        }
    );

    console.log("AIsearch response:", response.data);
    return response.data;
}

// Function to fetch response from OpenAI
async function fetchOpenAIResponse(aiSearchResponse, userQuery) {
    const relevantText = aiSearchResponse.value.map(item => item.chunk).join("\n\n");

    const chatPrompt = [
        {
            role: "system",
            content: "You are an AI assistant that helps people get information based on the provided context.",
        },
        {
            role: "user",
            content: `Based on the following information, please answer the user's query:\n\n${relevantText}\n\nUser's query: ${userQuery}`,
        },
    ];

    const response = await axios.post(
        `${endpoint}openai/deployments/${deployment}/chat/completions?api-version=2024-05-01-preview`,
        {
            messages: chatPrompt,
            max_tokens: 200,
            temperature: 0.7,
            top_p: 0.95,
            frequency_penalty: 0,
            presence_penalty: 0,
        },
        {
            headers: {
                "Content-Type": "application/json",
                "api-key": subscriptionKey,
            },
        }
    );

    return response.data;
}

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
