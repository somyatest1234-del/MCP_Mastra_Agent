import { HttpServerDefinition } from "@mastra/mcp";

// CData Connect AI MCP Server Definition
export const cdataMcp = new HttpServerDefinition({
  name: "CData Connect AI",
  url: "https://mcp.cloud.cdata.com/mcp",
  headers: {
    // Base64 encode "email:PAT"
    // Example: echo -n "somyas@cdata.com:BHLzWMjqc8..." | base64
    Authorization: "Basic <your-base64-encoded-credentials>"
  }
});
