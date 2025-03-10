// src/index.ts
var composioPlugin = {
  name: "composio",
  description: "Composio plugin for Eliza",
  actions: [],
  // evaluators analyze the situations and actions taken by the agent. they run after each agent action
  // allowing the agent to reflect on what happened and potentially trigger additional actions or modifications
  evaluators: [],
  // providers supply information and state to the agent's context, help agent access necessary data
  providers: []
};
var index_default = composioPlugin;
export {
  composioPlugin,
  index_default as default
};
//# sourceMappingURL=index.js.map