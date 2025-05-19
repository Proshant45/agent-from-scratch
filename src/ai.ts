import { OpenAI } from 'openai';
const token = process.env["GITHUB_TOKEN"];
const endpoint = "https://models.github.ai/inference";
const modelName = "openai/gpt-4o";

export const openai = new OpenAI(
    {
        apiKey: token,
        baseURL: endpoint
    }
)
