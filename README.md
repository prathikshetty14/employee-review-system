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
  
  Sign-in Page
  <img width="1439" alt="Screenshot 2023-09-06 at 12 32 23 PM" src="https://github.com/prathikshetty14/employee-review-system/assets/63280396/dc14d09b-712e-4239-a73e-749827cf4255">

  Sign-up Page
  <img width="1440" alt="Screenshot 2023-09-06 at 12 36 04 PM" src="https://github.com/prathikshetty14/employee-review-system/assets/63280396/1c68e9da-0228-4a11-9570-d93e2e648b1c">


- **Role-based Access Control**: Differentiates between administrators and employees, granting access to specific features accordingly.
  
  <img width="1440" alt="Screenshot 2023-09-06 at 12 32 38 PM" src="https://github.com/prathikshetty14/employee-review-system/assets/63280396/62eaf439-d0c7-4c4a-8e84-63726c652b03">

- **Review Assignment**: Administrators can assign reviews to employees.
  
  <img width="1426" alt="Screenshot 2023-09-06 at 12 33 47 PM" src="https://github.com/prathikshetty14/employee-review-system/assets/63280396/50e5b2b0-19ed-4000-97ef-b7f5748eb279">
  
- **Review Submission**: Employees can submit their reviews.

  <img width="1426" alt="Screenshot 2023-09-06 at 12 34 15 PM" src="https://github.com/prathikshetty14/employee-review-system/assets/63280396/6fa82455-6cc2-4f97-b97e-d187c9c74ebe">
  
- **Review Management**: Administrators can view, update, and delete reviews.

  <img width="1425" alt="Screenshot 2023-09-06 at 12 33 27 PM" src="https://github.com/prathikshetty14/employee-review-system/assets/63280396/7e17a9a3-8a5b-4759-8b71-b9a08c8c8316">

- **Employee Listing**: Provides a list of all employees for administrative purposes.

  <img width="1428" alt="Screenshot 2023-09-06 at 12 33 39 PM" src="https://github.com/prathikshetty14/employee-review-system/assets/63280396/a1e9712c-3a05-463a-9023-ecc8f4ef0521">


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
