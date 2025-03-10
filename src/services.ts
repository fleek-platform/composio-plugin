import { OpenAI } from "openai";
import { OpenAIToolSet } from "composio-core";

export const createComposioService = (apiKey: string, openAIAPIKey: string) => {
    const starGithubRepository = async (messageText: string): Promise<any> => {
        if (!apiKey || !openAIAPIKey) {
            throw new Error(
                "Invalid parameters: API keys for Composio and OpenAI are required"
            );
        }

        const openai_client = new OpenAI({ apiKey: openAIAPIKey });

        const composio_toolset = new OpenAIToolSet({
            apiKey,
        });

        const tools = await composio_toolset.getTools({
            actions: ["github_star_a_repository_for_the_authenticated_user"],
        });

        const response = await openai_client.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: messageText }],
            tools: tools,
            tool_choice: "auto",
        });

        console.log(response);

        const resp = await composio_toolset.handleToolCall(response);
        console.log(resp);
        return resp;
    };

    return { starGithubRepository };
};
