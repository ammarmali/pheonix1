/* eslint-disable no-undef */

const express = require("express");
const cors = require("cors"); // Import cors
const axios = require("axios");

const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json());

// Configuration
const endpoint = process.env.ENDPOINT_URL || "https://asksue.openai.azure.com/";
const deployment = process.env.DEPLOYMENT_NAME || "gpt-4o-mini";
const searchEndpoint = process.env.SEARCH_ENDPOINT || "https://asksuesearch.search.windows.net";
const searchKey = process.env.SEARCH_KEY 
const searchIndex = process.env.SEARCH_INDEX_NAME || "phoneix";
const subscriptionKey = process.env.AZURE_OPENAI_API_KEY 

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
        // Fetch response from AIsearch
        const aiSearchResponse = await fetchAIsearchResponse(userQuery);
        // Fetch response from OpenAI, passing the userQuery
        const openAIResponse = await fetchOpenAIResponse(aiSearchResponse, userQuery);

        // Return the combined response
        res.status(200).send({ openAIResponse, aiSearchResponse });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send({ error: "An error occurred while processing your request." });
    }
});

// Function to fetch response from AIsearch
async function fetchAIsearchResponse(query) {
    console.log("Fetching AIsearch response for query:", query); // Log the query
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

    console.log("AIsearch response:", response.data); // Log the response
    return response.data; // Return the search results
}

// Function to fetch response from OpenAI
async function fetchOpenAIResponse(aiSearchResponse, userQuery) {
    // Extract relevant text from the AIsearch response
    const relevantText = aiSearchResponse.value.map(item => item.chunk).join("\n\n"); // Join all chunks with double newlines

    // Construct a clear prompt for OpenAI
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

    return response.data; // Return the OpenAI response
}

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
