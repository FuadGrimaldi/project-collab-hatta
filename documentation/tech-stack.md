# Tech Stack Architecture

## Overview
This architecture outlines the integration of a Laravel backend with a Next.js frontend. The system uses a custom middleware for Bearer token authentication, ensuring secure and seamless communication between the backend and frontend.

## Components

### 1. Frontend
- **Framework**: Next.js
  - **Description**: Next.js is a React-based framework that enables server-side rendering and static site generation, providing fast performance and SEO benefits.
  - **Features**:
    - Server-side rendering (SSR) for improved performance.
    - Static site generation (SSG) for pre-rendering pages.
    - API routes for serverless functions.
    - Dynamic routing and rich data fetching.

### 2. Backend
- **Framework**: Laravel - 11
  - **Description**: Laravel is a PHP framework known for its elegant syntax and robust features, including routing, middleware, and database management.
  - **Features**:
    - RESTful API development for handling client requests.
    - Eloquent ORM for database interactions.
    - Middleware for request filtering and validation.
    - Queue system for background jobs and tasks.

### 3. Authentication
- **Method**: Bearer Token Authentication
  - **Custom Middleware**: The system uses custom middleware to handle Bearer token authentication, ensuring that requests are authenticated securely without relying on Laravel Passport or Sanctum.
  - **Process**:
    - Tokens are generated and stored securely.
    - Incoming requests include the Bearer token in the Authorization header.
    - Custom middleware validates the token, granting or denying access based on the result.

### 4. Database
- **Type**: MySQL / MariaDB
  - **Description**: A relational database used for storing and managing user data, orders, transactions, and other critical information.
  - **Features**:
    - Relational data modeling with foreign key constraints.
    - ACID compliance for reliable transactions.
    - Indexing for optimized query performance.

### 5. API Communication
- **Protocol**: RESTful API
  - **Description**: The Laravel backend exposes RESTful APIs, which the Next.js frontend consumes to fetch and manipulate data.
  - **Security**: Bearer tokens are used to authenticate API requests, ensuring secure data transmission.

## Data Flow

1. **User Interaction**:
   - Users interact with the frontend (Next.js), which may trigger actions like logging in, placing an order, or updating a profile.

2. **API Requests**:
   - The frontend sends HTTP requests to the Laravel backend's RESTful APIs, including the Bearer token in the Authorization header.

3. **Authentication**:
   - The Laravel backend uses custom middleware to validate the Bearer token. If valid, the request is processed; otherwise, it is rejected.

4. **Database Operations**:
   - Laravel interacts with the database (MySQL/MariaDB) via Eloquent ORM to perform CRUD operations as required by the API requests.

5. **Response Handling**:
   - The backend returns the appropriate responses to the frontend, which updates the UI based on the data received.

6. **Token Management**:
   - Token generation and validation are handled by the backend, ensuring secure and consistent authentication.

## Deployment

- **Docker**: Containers for easy deployment and scaling of both frontend and backend services.
- **CI/CD Pipeline**: Automated testing, building, and deployment of code changes.

