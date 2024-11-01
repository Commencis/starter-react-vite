<picture>
  <source media="(max-width: 400px)" srcset="./assets/starter-react-vite-logo-mobile.png">
  <img src="./assets/starter-react-vite-logo.png" alt="Commencis JS Toolkit Logo">
</picture>

<h1 align="center">
  Commencis Starter - React Vite

[![License: Apache](https://img.shields.io/badge/License-Apache2.0-300E77.svg)](LICENSE)

</h1>

Commencis Starter - React Vite provides a streamlined foundation for building modern React applications with Vite. Designed to maximize development speed and efficiency, this template allows for quick setup and seamless scaling. Its flexible structure supports diverse project requirements right out of the box.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#getting-started)

## Tech Stack

- ⚡️ Vite
- 🌀 React18
- 🎨 SCSS Modules / Abstractions
- ⚙️ Environment / Config Management
- 🌐 i18next
- 🌍 httpClient
- 🛠️ Providers / Services / API
- 📁 Module / Page Structure
- 🔄 Redux Toolkit
- 🛠️ RTK Query
- 🛣️ React Router 6
- 🔍 Vitest
- 🚦 Mock Service Worker
- 📚 Storybook
- 🖥️ Node20
- 📦 PNPM
- ✨ Commencis JS Toolkit Integrations

## Getting Started

### Prerequisites

#### Node.js

Before you begin, ensure you have `node: >= 20.18` installed on your system.

#### pnpm

This project uses `pnpm@9.12.3` as the package manager. You can install it either by activating with `corepack` which is the recommended way:

```bash
corepack prepare pnpm@latest --activate
corepack enable pnpm
```

or install globally on your system with npm.

```bash
npm install -g pnpm
```

### Installation

Run the following command to install project dependencies:

```bash
pnpm install
```

## Development

To start the development server, run the following command:

```bash
pnpm dev
```

This will launch the development server and you can access your application at `http://localhost:3000`.
