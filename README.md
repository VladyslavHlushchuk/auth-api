# PNU-Auth  

**PNU-Auth** is a NestJS-based API application designed for user management, authentication, and authorization. The project is organized as a monorepo using Turborepo and includes features such as user registration, login, token refreshing, and role-based access control.

## Technologies and Packages  

The project leverages several key tools and libraries to implement its features effectively:  
- **Prisma:** for managing the PostgreSQL database and handling ORM operations.  
- **@nestjs/jwt:** for generating and validating JWT tokens.  
- **@nestjs/passport:** for implementing authentication strategies.  
- **BCrypt:** for securely hashing passwords.  
- **Zod:** for input data validation.  
- **Turborepo:** for organizing and managing the monorepo.  

## Features  

1. **CRUD Operations:**  
   - Manage users with the ability to create, update, and delete records.  
2. **User Authentication:**  
   - Secure endpoints for user registration and login with password hashing and JWT token generation.  
3. **Role-Based Access Control:**  
   - Authorization based on user roles (Admin, User, Editor) to restrict access to specific resources.  
4. **Token Refresh:**  
   - Implemented refresh tokens to enable seamless access token renewal.  

## Available Endpoints  

| **Method** | **Endpoint**             | **Description**                                |  
|------------|--------------------------|------------------------------------------------|  
| POST       | `/auth/signup`           | Register a new user.                           |  
| POST       | `/auth/signin`           | User login.                                    |  
| POST       | `/auth/refresh`          | Refresh the access token using a refresh token.|  
| GET        | `/users`                 | Retrieve a list of all users (Admin).          |  
| GET        | `/users/:id`             | Retrieve details of a specific user by ID.     |  
| DELETE     | `/users/:id`             | Delete a user by ID (Admin).                   |  

## Key Features  

- **Role-Based Model:** Each user is assigned a role that determines their access level to specific resources.  
- **Data Security:** All passwords are securely hashed, and data transmission is protected via JWT authentication.  

