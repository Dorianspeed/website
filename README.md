# Personal Website

This is a personal website to showcase my resume, my missions and my projects. There is also a contact form to get in touch.

This project is a monorepo, it uses [Turborepo](https://turborepo.com/) to handle it.

## Table of Contents

- [Personal Website](#personal-website)
  - [Table of Contents](#table-of-contents)
  - [Project Overview](#project-overview)
  - [Requirements](#requirements)
  - [Recommended VS Code Extensions](#recommended-vs-code-extensions)
  - [Project Architecture](#project-architecture)
  - [Getting Started](#getting-started)
  - [Tests](#tests)
  - [Tests coverages](#tests-coverages)
  - [Other scripts](#other-scripts)
  - [Contributing](#contributing)

## Project Overview

This website serves as a portfolio to highlight my professional work and achievements. It includes:

- A homepage with some funny quotes.
- A resume section with my professional experiences, courses & certifications.
- A missions section.
- A projects section.
- A contact form to get in touch.

## Requirements

- [Yarn 4.9.1](https://yarnpkg.com/) (Package Manager)
- [Node.js 22.15.0](https://nodejs.org/)

## Recommended VS Code Extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Linting for JavaScript and React.
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Code formatting.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Autocompletion for Tailwind CSS.

## Project Architecture

```
/.github                    # GitHub workflows
/.husky                     # Pre-commit hooks
/.yarn                      # Yarn releases
/apps
├── /web                    # Personal website project
│   ├── /public             # Static images
│   └── /src
│       ├── /app            # Routing
│       ├── /assets         # SVG icons
│       ├── /components     # Reusable components
│       ├── /constants      # Variables
│       ├── /hooks          # Custom hooks
│       ├── /styles         # Globals CSS
│       ├── /types          # Globals types
│       └── /utils          # Utils functions
/packages
├── /eslint-config          # Shared ESLint config
├── /transactional          # Transactional emails
│   ├── /common             # Reusable components
│   ├── /constants          # Variables
│   ├── /emails             # Emails components
│   └── /types              # Globals types
└── /typescript-config      # Shared TSConfig
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Dorianspeed/website.git
cd website
```

2. Install dependencies:

```bash
yarn install
```

3. Create `.env.local` file in `/apps/web` respecting the `.env.example`

4. Start the development server:

```bash
yarn dev
```

5. Open your browser and navigate to `http://localhost:3000` (website) or `http://localhost:3001` (transactional emails).

NB: Use filter to start specific project.

```bash
# Start website project
yarn dev --filter=web

# Start transactional project
yarn dev --filter=@website/transactional
```

## Tests

This project use vitest for unit tests.

To run the tests, use the following command:

```bash
yarn test
```

To run the tests in watch mode, use:

```bash
yarn test:watch
```

To run the tests coverage, use:

```bash
yarn test:coverage
```

To run the tests for a specific package, use:

```bash
# Test website project
yarn test --filter=web

# Test transactional project
yarn test --filter=@website/transactional
```

## Tests coverages

<!-- COVERAGES:START -->

**@website/make-coverage-badges**
| Statements                        | Branches                      | Functions                       | Lines                   |
| ----------------------------------| ----------------------------- | --------------------------------| ------------------------|
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen) |

**@website/transactional**
| Statements                        | Branches                      | Functions                       | Lines                   |
| ----------------------------------| ----------------------------- | --------------------------------| ------------------------|
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen) |

**web**
| Statements                        | Branches                      | Functions                       | Lines                   |
| ----------------------------------| ----------------------------- | --------------------------------| ------------------------|
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen) |

<!-- COVERAGES:END -->

## Other scripts

To build project, use:

```bash
yarn build
```

To check for circular dependencies, use:

```bash
yarn circular-deps
```

To lint project, use:

```bash
yarn lint
```

To start project in production mode (do not forget to `yarn build` and create a `.env.production` file before running this script), use:

```bash
yarn prod
```

To check if dependencies are synchronized, use:

```bash
yarn sync-deps
```

To check for unused dependencies, use:

```bash
yarn unused-deps
```

To check for unused exports and files, use:

```bash
yarn unused-exports-and-files
```

## Contributing

Contributions are welcome! To contribute:

1. Create a new branch for your feature or bug fix:

```bash
git checkout -b FEATURE/branch-name
```

2. Make your changes and commit them (respecting the conventionnal commit)

```bash
git commit -m "feat: add new feature"
```

3. Push your branch:

```bash
git push origin FEATURE/branch-name
```

4. Open a pull request to the main repository

**Please ensure your code follows the project's coding standards and includes appropriate tests where necessary.**
