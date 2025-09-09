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
- [Development](#development)
- [Folder Structure](#folder-structure)
- [Contribution](#contribution)
- [License](#license)

## Tech Stack

- ⚡️ Vite 7
- 🌀 React 19
- 🎨 SCSS Modules / Abstractions
- ⚙️ Environment / Config Management
- 🌐 i18next
- 🌍 httpClient
- 🛠️ Providers / Services / API
- 📁 Module / Page Structure
- 🔄 Redux Toolkit
- 🛠️ RTK Query
- 🛣️ React Router 7 (Library Mode)
- 🔍 Vitest
- 🚦 Mock Service Worker
- 📚 Storybook
- 🖥️ Node 22
- 📦 PNPM
- ✨ Commencis JS Toolkit Integrations:
  - ESLint, Prettier, Stylelint, Commitlint, Lint-Staged

## Getting Started

### Prerequisites

#### Node.js

Before you begin, ensure you have `node: >= 22.19` installed on your system.

#### pnpm

This project uses `pnpm` as the package manager. You can install it either by activating with `corepack` which is the recommended way:

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

## Folder Structure

> **Note:** Some libraries and folders, such as MSW, Storybook, Redux, and RTK, can be removed if they are not required for your project. For example, if you are using this template for an onboarding project and do not plan to showcase components or mock API calls, you can safely remove Storybook or MSW.

Refer to the sections below for more details on their locations and use cases.

```
src/                        # Main source folder for the project, used for development
├── assets/                 # Static assets like fonts, icons, and localization files
│   ├── images/             # PNG and JPEG image assets
│   ├── fonts/              # Font files used in the application
│   ├── icons/              # SVG icons used in the application
│   └── locales/            # Localization files for different languages
│
├── components/             # Reusable components
│   ├── common/             # Common components (e.g. UserCard, PromoBanner, ListItem)
│   ├── error/              # Error components (e.g. Error404, Error500)
│   ├── layout/             # Layout components
│   └── ui/                 # Base UI components (e.g. Button, Text, Input)
│
├── config/                 # Configuration files
├── constants/              # Constant values used throughout the application
├── hooks/                  # Custom React hooks
├── layouts/                # Layout components for different pages
│
├── lib/                    # Library files
│   ├── http/               # HTTP client configuration (includes `makeRequest` with env support)
│   ├── i18n/               # Internationalization setup
│   └── mocks/              # Mock data for testing (MSW is used for API mocking)
│
├── modules/                # Feature-specific modules
│   └── home/               # Sample home module (modify or remove as needed)
│
├── pages/                  # Page components
│   ├── home/               # Sample homepage component (modify or remove as needed)
│   └── not-found/          # Not Found page component (router fallback included)
│
├── providers/              # Context providers for the application
│   ├── ErrorBoundary/      # Error boundary component
│   └── PreferencesContext/ # Preferences provider for theme & language selection
│
├── router/                 # Routing components and configuration
│   └── PrivateRoute/       # Private route component
│
├── scripts/                # Scripts for various tasks
│
├── services/               # Service layer for API calls
│   ├── auth/               # Authentication service
│   └── user/               # User service
│
├── store/                  # Redux store configuration (Redux Toolkit implemented)
│   ├── hooks/              # Hooks for accessing the store
│   └── slices/             # Redux slices for state management
│
├── stories/                # Storybook related files (https://storybook.js.org)
│
├── styles/                 # SCSS styles and mixins (https://sass-lang.com)
│   ├── abstracts/          # Abstract styles (e.g. breakpoints, colors)
│   ├── base/               # Base styles (e.g. fonts, variables)
│   ├── functions/          # SCSS functions
│   └── mixins/             # SCSS mixins
│
├── types/                  # Type definitions
└── utils/                  # Utility functions
```

## Contribution

We welcome contributions to improve this project. Feel free to open issues or pull requests to suggest enhancements or report any issues.

> [!IMPORTANT]
> For developers contributing to this project, it's important to familiarize yourself with these tools, as they are integral to the workflow and code quality standards.

## License

This project is licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0) - see the [LICENSE](./LICENSE) file for details.

© [Commencis](https://www.commencis.com/), 2025. All rights reserved.
