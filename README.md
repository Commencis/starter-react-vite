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

### Folder Structure

> **Note:** Some libraries and folders, such as MSW, Storybook, Redux, and RTK, can be removed if they are not required for your project. For example, if you are using this template for an onboarding project and do not plan to showcase components or mock API calls, you can safely remove Storybook or MSW.

Refer to the sections below for more details on their locations and use cases.

- `src`: Main source folder for the project, used for development.
  - `assets`: Contains static assets like fonts, icons, and localization files.
    - `images`: Directory for storing image assets like PNG and JPEG. It is advised to compress assets using tools like https://tinypng.com without sacrificing quality.
    - `fonts`: Font files used in the application. Please us this location if new font files needed.
    - `icons`: SVG icons used in the application.
    - `locales`: Localization files for different languages. The template already has i18n integrated. Please use the locale files as samples and create new ones if needed for each module/screen.
  - `components`: Main reusable component directory.
    - `common`: Common module components, such as UserCard, PromoBanner, ListItem etc.
    - `error`: Error components like Error404 and Error500.
    - `layout`: Layout components.
    - `ui`: Basic UI components like Button, Text, and Input.
  - `config`: Configuration files and utilities.
  - `constants`: Constant values used throughout the application.
  - `hooks`: Custom React hooks.
  - `layouts`: Layout components for different pages.
  - `lib`: Library files and utilities.
    - `http`: HTTP client configuration. Please review the `makeRequest` function, which is already integrated with environment variables like the base URL. If you are going to use plain Axios requests, it's a shortcut that already implements common use cases.
    - `i18n`: Internationalization setup.
    - `mocks`: Mock data for testing. Feel free to alter endpoints or remove them completely if not needed.
      > The msw (Mock Service Worker) library is used for API mocking by intercepting network requests at the network level. It allows developers to create mock responses for API calls, which is useful for testing and development without relying on actual backend services. This helps in creating a more controlled and predictable testing environment.
  - `modules`: Feature-specific modules, using PascalCase.
    - `home`: Home module components, provided as a sample. Please alter for your needs or remove.
  - `pages`: Page components. using kebab-case
    - `homepage`: Homepage component, provided as a sample. Please alter for your needs or remove.
    - `not-found`: Not Found page component. The router already has a fallback route, so altering is advised.
  - `providers`: Context providers for the application.
    - `ErrorBoundary`: Error boundary component.
    - `PreferencesContext`: Preferences context provider. Integrated into the project for theme and language selection. Please review inside.
  - `router`: Routing components and configuration. react-router-dom is already integrated. Please review the content and use it in accordance with the existing example.
    - `PrivateRoute`: Private route component.
  - `scripts`: Scripts for various tasks.
  - `services`: Service layer for API calls. Please review inside, there are also some samples.
    - `auth`: Authentication service.
    - `user`: User service.
  - `store`: Redux store configuration and slices. Redux Toolkit is already implemented. Please refer to https://redux-toolkit.js.org for more information. Please review the sample or remove depending on project needs.
    - `hooks`: Hooks for accessing the store.
    - `slices`: Redux slices for state management.
  - `stories`: Storybook stories for components. https://storybook.js.org
  - `styles`: SCSS styles and mixins. https://sass-lang.com
    - `abstracts`: Abstract styles like breakpoints and colors.
    - `base`: Base styles like fonts and variables.
    - `functions`: SCSS functions.
    - `mixins`: SCSS mixins.
  - `types`: TypeScript type definitions.
  - `utils`: Utility functions.
