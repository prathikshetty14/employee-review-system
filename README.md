# Employee Review System

## Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Author](#author)

## About the Project

The Employee Review System is a web application designed to streamline and simplify the employee review process within an organization. It provides a platform for administrators to assign reviews to employees, enables employees to submit their reviews, and allows administrators to view and manage all reviews.

## Features

- **User Authentication**: Secure user sign-up and sign-in functionality with authentication.
- **Role-based Access Control**: Differentiates between administrators and employees, granting access to specific features accordingly.
- **Review Assignment**: Administrators can assign reviews to employees.
- **Review Submission**: Employees can submit their reviews.
- **Review Management**: Administrators can view, update, and delete reviews.
- **Employee Listing**: Provides a list of all employees for administrative purposes.

## Tech Stack

- **Node.js**: Backend server runtime.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: Database for storing user and review data.
- **Passport.js**: Authentication middleware for Node.js.
- **EJS**: Templating engine for rendering views.
- **HTML/CSS**: Frontend design and layout.
- **JavaScript**: Programming language for frontend and backend logic.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed.
- MongoDB installed and running.

### Installation

1. Clone the repository:

`git clone https://github.com/yourusername/employee-review-system.git`
   
2. Navigate to the project directory:

`cd employee-review-system`

3. Create a `.env` file in the project root and configure your environment variables (e.g., database connection URL, session secrets).
   
4. Start the server:
   
`npm start`

5. Access the application in your browser at `http://localhost:8000`

## Usage

- Sign in as an admin to access the admin dashboard.
- Assign reviews to employees.
- Employees can log in and submit their assigned reviews.
- View review progress and performance.

## Author
*Prathik Shetty* - **Full Stack Developer**
