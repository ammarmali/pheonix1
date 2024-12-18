/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


const response = await axios.post("/rag", { userQuery: userInput });


export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/rag": "http://localhost:3001", // Proxy `/rag` to your backend
    },
  },
});
