const axios = require("axios");
require("dotenv").config(); // Make sure .env is loaded

// Extract the necessary environment variables
const endpoint = process.env.ENDPOINT_URL;
const deployment = process.env.DEPLOYMENT_NAME;
const searchEndpoint = process.env.SEARCH_ENDPOINT;
const searchKey = process.env.SEARCH_KEY;
const searchIndex = process.env.SEARCH_INDEX_NAME;
const subscriptionKey = process.env.AZURE_OPENAI_API_KEY;

module.exports = async (req, res) => {
  // Check if the method is POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  // Extract the query from the request body
  const { userQuery } = req.body;

  // Validate that userQuery is provided
  if (!userQuery) {
    return res.status(400).json({ error: "userQuery is required." });
  }

  try {
    // Fetch response from AI search
    const aiSearchResponse = await fetchAIsearchResponse(userQuery);
    // Fetch response from OpenAI with the AI search results
    const openAIResponse = await fetchOpenAIResponse(aiSearchResponse, userQuery);

    // Return the combined response
    return res.status(200).json({ openAIResponse, aiSearchResponse });
  } catch (error) {
    console.error("Error during function execution:", error.message);
    return res.status(500).json({ error: "An error occurred while processing your request." });
  }
};

// Function to fetch response from AIsearch
async function fetchAIsearchResponse(query) {
  try {
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
    console.log("AI search response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during AI search request:", error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch AI search response");
  }
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

  try {
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
    console.log("OpenAI response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error during OpenAI request:", error.response ? error.response.data : error.message);
    throw new Error("Failed to fetch OpenAI response");
  }
}
