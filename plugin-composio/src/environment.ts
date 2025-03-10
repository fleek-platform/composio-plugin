// fc-1c97436691454d6c802bd82c2507e55c

import { IAgentRuntime } from "@elizaos/core";
import { z } from "zod";

export const composioEnvSchema = z.object({
    OPENAI_API_KEY: z.string().min(1, "OpenAI API key is required"),
    COMPOSIO_API_KEY: z.string().min(1, "Composio API key is required"),
});

export type composioConfig = z.infer<typeof composioEnvSchema>;

export async function validateComposioConfig(
    runtime: IAgentRuntime
): Promise<composioConfig> {
    try {
        const config = {
            OPENAI_API_KEY: runtime.getSetting("OPENAI_API_KEY"),
            COMPOSIO_API_KEY: runtime.getSetting("COMPOSIO_API_KEY"),
        };
        console.log("config: ", config);
        return composioEnvSchema.parse(config);
    } catch (error) {
        console.log("error::::", error);
        if (error instanceof z.ZodError) {
            const errorMessages = error.errors
                .map((err) => `${err.path.join(".")}: ${err.message}`)
                .join("\n");
            throw new Error(
                `Composio configuration validation failed:\n${errorMessages}`
            );
        }
        throw error;
    }
}
