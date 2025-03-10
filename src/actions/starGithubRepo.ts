import {
    elizaLogger,
    Action,
    ActionExample,
    HandlerCallback,
    IAgentRuntime,
    Memory,
    State,
    generateText,
    composeContext,
    parseJSONObjectFromText,
} from "@elizaos/core";
import { validateComposioConfig } from "../environment";
import { ModelClass } from "@elizaos/core";
import { createComposioService } from "../services";
import { starRepoPrompt } from "../templates";
import { getStarRepoExamples } from "../examples";

export const starGithubRepositoryAction: Action = {
    name: "STAR_GITHUB_REPO",
    similes: [
        "STAR_GITHUB_REPO",
        "STAR_GITHUB_REPOSITORY",
        "GITHUB_STAR",
        "GITHUB_STAR_REPO",
        "GITHUB_STAR_REPOSITORY",
        "STAR_REPO",
    ],
    description:
        "Star Github repo mentioned in the conversation with the Github account",
    validate: async (runtime: IAgentRuntime) => {
        await validateComposioConfig(runtime);
        return true;
    },
    handler: async (
        runtime: IAgentRuntime,
        message: Memory,
        state: State,
        _options: { [key: string]: unknown },
        callback: HandlerCallback
    ) => {
        const config = await validateComposioConfig(runtime);
        const composioService = createComposioService(
            config.COMPOSIO_API_KEY,
            config.OPENAI_API_KEY
        );

        console.log(message.content.text);
        try {
            const messageText = message.content.text || "";

            elizaLogger.info(`Found data: ${messageText}`);
            const starData =
                await composioService.starGithubRepository(messageText);

            elizaLogger.success(`Successfully fectched data`);

            const responseText = await generateText({
                runtime,
                context: `This was the user question: ${message.content.text}

                        The Response data from starring the repository is given below

                        ${JSON.stringify(starData)}

                        Now Summarise and use this data and provide a response to question asked in the format.
                        Note: The response should be in the same language as the question asked and should be human readable and make sense to the user
                        Do not add any other text or comments to the response just the answer to the question
                        Remove \n \r, special characters and html tags from the response
                        `,
                modelClass: ModelClass.SMALL,
                customSystemPrompt: starRepoPrompt,
            });

            console.log("responseText", responseText);

            // const parsedResponse = parseJSONObjectFromText(responseText);

            // console.log("parsedResponse", parsedResponse);

            if (callback) {
                callback({
                    text: `${JSON.stringify(responseText)}`,
                });
                return true;
            }
        } catch (error: any) {
            elizaLogger.error("Error in the Composio plugin", error);
            callback({
                text: `Error starring repo ${error.message}`,
                content: { error: error.message },
            });
            return false;
        }
    },
    examples: getStarRepoExamples as ActionExample[][],
} as Action;
