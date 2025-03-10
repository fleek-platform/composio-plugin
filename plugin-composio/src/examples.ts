import { ActionExample } from "@elizaos/core";

export const getStarRepoExamples: ActionExample[][] = [
    [
        {
            user: "{{user1}}",
            content: {
                text: "Can you star the TensorFlow repository on GitHub for me?",
            },
        },
        {
            user: "{{agentName}}",
            content: {
                text: "I've starred the TensorFlow repository on GitHub for you.",
                action: "STAR_GITHUB_REPO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Please star facebook/react on GitHub.",
            },
        },
        {
            user: "{{agentName}}",
            content: {
                text: "I've successfully starred the React repository for you.",
                action: "STAR_GITHUB_REPO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Star microsoft/vscode repository please.",
            },
        },
        {
            user: "{{agentName}}",
            content: {
                text: "I've starred the Visual Studio Code repository on GitHub.",
                action: "STAR_GITHUB_REPO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: { text: "Add a star to the openai/gpt-4 repo." },
        },
        {
            user: "{{agentName}}",
            content: {
                text: "I've added a star to the GPT-4 repository for you.",
                action: "STAR_GITHUB_REPO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Could you star the repository at https://github.com/flutter/flutter?",
            },
        },
        {
            user: "{{agentName}}",
            content: {
                text: "I've starred the Flutter repository on GitHub.",
                action: "STAR_GITHUB_REPO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: {
                text: "Star the airbnb/javascript style guide repo for me.",
            },
        },
        {
            user: "{{agentName}}",
            content: {
                text: "I've starred the Airbnb JavaScript style guide repository for you.",
                action: "STAR_GITHUB_REPO",
            },
        },
    ],
    [
        {
            user: "{{user1}}",
            content: { text: "Please star kubernetes/kubernetes on GitHub." },
        },
        {
            user: "{{agentName}}",
            content: {
                text: "I've starred the Kubernetes repository on GitHub for you.",
                action: "STAR_GITHUB_REPO",
            },
        },
    ],
];
