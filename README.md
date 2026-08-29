<div align="center">

# ⚡ Code0

**AI-Powered Full-Stack App Generator & Live Sandboxed Runtime**

Build, execute, preview, and iterate on Next.js web applications in real-time with an intelligent autonomous coding agent.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-code0.gopalchoudhary.dev-black?style=for-the-badge&logo=vercel)](https://code0.gopalchoudhary.dev)
[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.10-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.2.4-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS 4](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-7.8.0-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Inngest](https://img.shields.io/badge/Inngest-Background%20Workers-orange?style=for-the-badge)](https://www.inngest.com/)
[![E2B](https://img.shields.io/badge/E2B-Sandboxed%20Execution-green?style=for-the-badge)](https://e2b.dev/)

---

[**Explore Live Demo »**](https://code0.gopalchoudhary.dev)

</div>

<br />

## 🌟 Overview

**Code0** is an open-source, full-stack AI development platform inspired by tools like v0 and Bolt. It combines multi-agent LLM orchestration with secure, isolated cloud execution sandboxes to turn natural language prompts into working, production-grade Next.js applications in seconds.

### Highlights

- 💬 **Interactive Prompt Studio**: Describe what you want to build with rich starter templates and one-click prompts.
- 🤖 **Agentic Code Synthesis**: Powered by Gemini LLMs and Inngest Agent Kit for step-by-step reasoning, file generation, and dependency resolution.
- 📦 **Secure Cloud Sandboxes**: Powered by **E2B**, running real Next.js development servers in isolated micro-virtual environments.
- 🖥️ **Live In-Browser Preview**: Embedded interactive iframe with hot reload, sandbox URL sharing, and new-tab preview.
- 📂 **Interactive Code Explorer**: Browse generated project files, inspected code trees, and revision history.
- 🔐 **Authentication & Multi-Tenancy**: Built with Clerk for secure user authentication and personalized project dashboards.
- 🗄️ **Persistent State**: PostgreSQL database managed via Prisma ORM for project metadata, message history, and generated code fragments.

---

## 🏗️ Architecture & How It Works

```mermaid
flowchart TD
    User([User Prompt]) --> Frontend[Code0 Next.js App]
    Frontend --> Clerk[Clerk Auth & Session]
    Frontend --> DB[(PostgreSQL Database via Prisma)]
    Frontend --> InngestAPI[Inngest Event Trigger]
    
    subgraph Background Execution [Inngest Worker Pipeline]
        InngestAPI --> CodeAgent[Inngest Agent Kit]
        CodeAgent --> LLM[Google Gemini Model]
        CodeAgent --> E2B[E2B Cloud Sandbox]
        E2B --> SandboxApp[Live Next.js Dev Server]
    end
    
    SandboxApp --> LivePreview[Interactive HTTPS Iframe Preview]
    CodeAgent --> DB
    LivePreview --> Frontend
```

1. **User Request**: The user enters a natural language prompt or chooses a suggestion category.
2. **Project Creation**: A new project session is initialized and stored in PostgreSQL.
3. **Agent Orchestration**: An Inngest background event (`code-agent/run`) triggers an autonomous coding agent.
4. **Sandbox Instantiation**: An isolated E2B cloud environment spins up with a pre-configured Next.js, Tailwind CSS, and Shadcn UI template.
5. **Code Generation & Verification**: The agent creates files, runs commands, verifies imports, and prepares the live build.
6. **Instant Preview**: The resulting live application URL is embedded into an interactive preview pane with code view and full-screen preview options.

---

## 🛠️ Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Next.js 16 (Turbopack, App Router)](https://nextjs.org/) |
| **Frontend** | [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/), [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Lucide Icons](https://lucide.dev/) |
| **Agent & AI** | [Inngest Agent Kit](https://www.inngest.com/docs/agent-kit), [Google Gemini AI](https://deepmind.google/technologies/gemini/) |
| **Execution Engine** | [E2B Code Interpreter](https://e2b.dev/) (Cloud Micro-VMs) |
| **Background Jobs** | [Inngest](https://www.inngest.com/) |
| **Authentication** | [Clerk](https://clerk.com/) |
| **Database & ORM** | [Neon PostgreSQL](https://neon.tech/), [Prisma ORM 7.8](https://www.prisma.io/) |
| **State & Data Fetching** | [TanStack React Query v5](https://tanstack.com/query/latest) |
| **Hosting** | [Vercel](https://vercel.com/) |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

- **Node.js**: `v20.x` or higher
- **pnpm**: `v9.x` or higher (recommended) or npm/yarn/bun
- **Git**

You will also need API keys from:
- [Clerk](https://clerk.com/) (Authentication)
- [Neon](https://neon.tech/) or any PostgreSQL provider (Database)
- [E2B](https://e2b.dev/) (Code Sandbox execution)
- [Google AI Studio](https://aistudio.google.com/) (Gemini API Key)
- [Inngest](https://www.inngest.com/) (Background job orchestrator)

---

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/gopallchoudhary/code0.git
   cd code0
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

   # Database (PostgreSQL / Neon)
   DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"

   # Inngest
   INNGEST_DEV=1

   # AI & Cloud Sandbox Providers
   E2B_API_KEY=your_e2b_api_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Initialize the Database**:
   Generate Prisma Client and apply migrations:
   ```bash
   pnpm prisma generate
   pnpm prisma migrate deploy
   ```

5. **Start the Inngest Dev Server**:
   In a separate terminal, launch the Inngest local dev server to process background agent runs:
   ```bash
   npx inngest-cli@latest dev
   ```

6. **Start the Next.js Development Server**:
   ```bash
   pnpm dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Starts the Next.js development server with Turbopack |
| `pnpm build` | Generates Prisma client and creates an optimized production build |
| `pnpm start` | Runs the compiled Next.js production server |
| `pnpm lint` | Runs ESLint to check code quality and style |
| `pnpm postinstall` | Automatically generates the Prisma client after dependency installation |

---

## 🚢 Deployment on Vercel

This repository is optimized for one-click deployment on [Vercel](https://vercel.com):

1. **Import the repository** into your Vercel account.
2. Ensure the framework preset is set to **Next.js**.
3. Configure the required **Environment Variables** in project settings:
   - `DATABASE_URL`
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
   - `CLERK_SECRET_KEY`
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL`
   - `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`
   - `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL`
   - `E2B_API_KEY`
   - `GEMINI_API_KEY`
   - `INNGEST_SIGNING_KEY` / `INNGEST_EVENT_KEY` (production Inngest credentials)
4. Click **Deploy**. Vercel will automatically run `prisma generate` via `postinstall` and compile the application.

---

## 🔒 Security & Sandboxing

- **E2B Isolation**: Every generated application runs within an isolated E2B micro-virtual machine with strict boundary controls.
- **HTTPS Enforced**: All iframe communication and sandbox endpoints are served securely over HTTPS to avoid mixed-content blocking and ensure secure previewing.
- **Role-Based Auth**: Route handlers and API endpoints enforce Clerk authentication and user identity verification.

---

## 👤 Author

**Gopal Choudhary**
- Website: [code0.gopalchoudhary.dev](https://code0.gopalchoudhary.dev)
- GitHub: [@gopallchoudhary](https://github.com/gopallchoudhary)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
