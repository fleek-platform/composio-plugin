# Composio Plugin

We've created a service wrapper for the **Composio API**, which provides a range of tools that can be integrated with an **Eliza AI agent**. This plugin allows the agent to leverage different functionalities seamlessly.


## Configuration

The plugin requires minimal configuration. In your character file, simply add:

```json
{
    "COMPOSIO_API_KEY": "your-api-key-here"
}
```

## Usage Examples

### Single Tool Execution

The plugin recognizes various ways users might request tool execution:

```typescript
// Direct execution request
"Can you summarize this article using Composio?"
"Run a sentiment analysis on this text: 'The product is amazing but the service was slow.'"

// Two-step interaction
User: "I need to extract data from a document."
Agent: "I can help with that. Which tool should I use—OCR, text extraction, or something else?"
User: "Use OCR."
```

### Multi-Tool Workflows

The plugin handles requests for complex workflows:

```typescript
// Sequential tool execution
"Summarize this document and then generate a keyword list."
"Extract data from this webpage and analyze its sentiment."
```

## Response Handling

The plugin automatically:
- Validates tool requests before processing
- Handles both direct and conversational requests
- Provides real-time feedback during execution
- Returns structured data relevant to the tool’s function

## Error Handling

The plugin includes built-in error handling for common scenarios:
- Invalid or unsupported tool requests
- API authentication issues
- Network failures
- Malformed responses

## Actions

The plugin providesa lot of actions, but, most are a WIP:
- `STAR_GITHUB_REPO`

## Security

- API keys should be kept secure and never shared
- All requests are made over HTTPS
- Input validation is performed on all tool parameters before processing