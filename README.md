<a name="readme-top"></a>

<h2 align="center">
    Climate KIC
</h2>

<p align="center">Internal AI Platform</p>

<p align="center">
    <a href="https://github.com/onyx-dot-app/onyx/blob/main/LICENSE" target="_blank">
        <img src="https://img.shields.io/static/v1?label=license&message=MIT&color=blue" alt="License">
    </a>
</p>



**Climate KIC** is a feature-rich, self-hostable Chat UI that works with any LLM. It is easy to deploy and can run in a completely airgapped environment.

Climate KIC comes loaded with advanced features like Agents, Web Search, RAG, MCP, Deep Research, Connectors to 40+ knowledge sources, and more.

> [!TIP]
> Run Climate KIC with one command (or see deployment section below):
> ```
> curl -fsSL https://raw.githubusercontent.com/onyx-dot-app/onyx/main/deployment/docker_compose/install.sh > install.sh && chmod +x install.sh && ./install.sh
> ```

****



## ⭐ Features
- **🤖 Custom Agents:** Build AI Agents with unique instructions, knowledge and actions.
- **🌍 Web Search:** Browse the web with Google PSE, Exa, and Serper as well as an in-house scraper or Firecrawl.
- **🔍 RAG:** Best in class hybrid-search + knowledge graph for uploaded files and ingested documents from connectors. 
- **🔄 Connectors:** Pull knowledge, metadata, and access information from over 40 applications.
- **🔬 Deep Research:** Get in depth answers with an agentic multi-step search.
- **▶️ Actions & MCP:** Give AI Agents the ability to interact with external systems.
- **💻 Code Interpreter:** Execute code to analyze data, render graphs and create files.
- **🎨 Image Generation:** Generate images based on user prompts.
- **👥 Collaboration:** Chat sharing, feedback gathering, user management, usage analytics, and more.

Climate KIC works with all LLMs (like OpenAI, Anthropic, Gemini, etc.) and self-hosted LLMs (like Ollama, vLLM, etc.)



## 🚀 Deployment
Climate KIC supports deployments in Docker, Kubernetes, Terraform, along with guides for major cloud providers.

Deployment options:
- Docker (best for most users)
- Kubernetes (best for large teams)
- Terraform (best for teams already using Terraform)
- Cloud specific guides (AWS EKS, Azure VMs, etc.)



## 🔍 Other Notable Benefits
Climate KIC is built for teams of all sizes, from individual users to the largest global enterprises.

- **Enterprise Search**: far more than simple RAG, Climate KIC has custom indexing and retrieval that remains performant and accurate for scales of up to tens of millions of documents.
- **Security**: SSO (OIDC/SAML/OAuth2), RBAC, encryption of credentials, etc.
- **Management UI**: different user roles such as basic, curator, and admin.
- **Document Permissioning**: mirrors user access from external apps for RAG use cases.



## � Licensing
Climate KIC is based on Onyx, which is available under the MIT license.

This is an internal rebranded version for organizational use.



## 💡 Contributing
Looking to contribute? Please check out the [Contribution Guide](CONTRIBUTING.md) for more details.
