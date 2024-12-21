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

app.post("/rag", async (req, res) => {
    const { userQuery } = req.body;

    if (!userQuery) {
        return res.status(400).json({ error: "userQuery is required." });
    }

    try {
        const aiSearchResponse = await fetchAIsearchResponse(userQuery);
        const openAIResponse = await fetchOpenAIResponse(aiSearchResponse, userQuery);

        return res.status(200).json({ openAIResponse, aiSearchResponse });
    } catch (error) {
        console.error("Error during function execution:", error.message);
        return res.status(500).json({ error: "An error occurred while processing your request." });
    }
});

async function fetchAIsearchResponse(query) {
    console.log("Fetching AIsearch response for query:", query);
    try {
        const response = await axios.post(
            `${process.env.SEARCH_ENDPOINT}/indexes/${process.env.SEARCH_INDEX_NAME}/docs/search?api-version=2024-05-01-preview`,
            {
                search: query,
                queryType: "semantic",
                semanticConfiguration: "phoneix-semantic-configuration",
                top: 5,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "api-key": process.env.SEARCH_KEY,
                },
            }
        );
        console.log("AIsearch response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error during AIsearch request:", error.response ? error.response.data : error.message);
        throw new Error("Failed to fetch AI search response");
    }
}

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

    try {
        const response = await axios.post(
            `${process.env.ENDPOINT_URL}openai/deployments/${process.env.DEPLOYMENT_NAME}/chat/completions?api-version=2024-05-01-preview`,
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
                    "api-key": process.env.AZURE_OPENAI_API_KEY,
                },
            }
        );
        console.log("OpenAI response:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error during OpenAI request:", error.response ? error.response.data : error.message);
        throw new Error("Failed to fetch OpenAI response");
    }
}

// Export the serverless function
module.exports = app;
