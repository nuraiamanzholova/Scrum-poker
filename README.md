# Scrum-Poker

## Table of Contents
- [Scrum-Poker](#scrum-poker)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Why Scrum-poker?](#why-scrum-poker)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Testing](#testing)

## Overview
Scrum-poker is a containerized, real-time collaborative tool designed to enhance agile project management and effort estimation sessions. Built with a modern stack, it combines a React frontend, Symfony backend, and WebSocket server to deliver a seamless, scalable experience.

### Why Scrum-poker?
This project helps teams conduct efficient, interactive planning meetings with ease. The core features include:

- Fast Deployment: Docker Compose orchestrates interconnected services for quick setup and scaling.
- Real-Time Collaboration: WebSocket server enables instant updates and communication during estimation sessions.
- Modern UI: React with TypeScript and Vite provides a responsive, developer-friendly interface.
- Secure Authentication: OAuth2 integration with Keycloak ensures secure user login and management.
- Modular Architecture: Symfony backend offers a robust foundation for API and business logic.
- Quality Assurance: ESLint and PHPUnit configurations promote maintainable, reliable code.

## Getting Started

### Prerequisites
This project requires the following dependencies:

- Programming Language: PHP
- Package Manager: Npm, Composer
- Container Runtime: Docker

### Installation
Build Scrum-poker from the source and install dependencies:

1. Clone the repository:
   ```bash
   git clone https://github.com/nuraiamanzholova/Scrum-poker
   ```
2. Navigate to the project directory:
   ```bash
   cd Scrum-poker
   ```
3. Install the dependencies:

**Using Npm:**
```bash
npm install
```

**Using Docker:**
```bash
docker-compose build
```

### Usage
Run the project with:
```bash
docker-compose up
```


### Testing
Scrum-poker uses the (test_framework) test framework. Run the test suite with:

**Using Docker:**
```bash
echo 'INSERT -TEST-COMMAND-HERE'
```

**Using Npm:**
```bash
npm test
```

**Using Composer:**
```bash
vendor/bin/phpunit
