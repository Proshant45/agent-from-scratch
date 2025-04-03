import OpenAI from 'openai'

const token = process.env["GITHUB_TOKEN"];

export const client = new OpenAI({
    baseURL: "https://models.inference.ai.azure.com",
    apiKey: token
  });
