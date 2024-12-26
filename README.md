# Library Management System - TDD Kata Solution

Welcome to the **Library Management System**, a project demonstrating the use of **Test-Driven Development (TDD)** principles to create a feature-rich system with incremental development and testing.

## Problem Statement

The goal is to build a simple Library Management System that allows users to:

1. **Add Books**:
   - Users should be able to add new books to the library.
   - Each book should have a unique identifier (e.g., ISBN), title, author, and
publication year.

2. **Borrow Books**:
   - Users should be able to borrow a book from the library.
   - The system should ensure that the book is available before allowing it to be
borrowed.
  -If the book is not available, the system should raise an appropriate error.

3. **Return Books**:
   - Users should be able to return a borrowed book.
   - The system should update the availability of the book accordingly.

4. **View Available Books**:
   - Users should be able to view a list of all available books in the library.
Instructions

### Development Approach

This project follows TDD principles:

1. Add failing tests.
2. Write minimal code to pass the tests.
3. Refactor and optimize code.

---

## Features

### Core Functionalities

- **Add Books**: Adds new books with validation and access control.
- **View Available Books**: Lists all books currently available in the library.
- **Borrow Books**: Allows users to borrow books with availability checks.
- **Return Books**: Ensures proper return of borrowed books.
---

## Setup Instructions

### Prerequisites

- **Node.js**: Ensure Node.js is installed on your machine.
- **npm**: Installed alongside Node.js for dependency management.
- **TypeScript**: Install globally using npm if not already available:

    ```bash
    npm install -g typescript
    ```

- **Jest**: Used for running test cases. Install it locally in the project directory:

    ```bash
    npm install jest ts-jest @types/jest --save-dev
    ```
### Clone the Repository

1. Open a terminal or command prompt.
2. Run the following command to clone the repository:

    ```bash
    git clone https://github.com/yourusername/library-management-system.git
    ```

3. Navigate to the project directory:

    ```bash
    cd library-management-system
    ```

### Run the Project

1. Install the dependencies:

    ```bash
    npm install
    ```

2. Build the project:

    ```bash
    npx tsc
    ```

3. Run the program (if applicable):

    ```bash
    node dist/library.js
    ```

### Run Tests

To execute the tests, use the following command:

```bash
npx jest
```

This will run all test cases and ensure the system's functionalities are working as expected.

---

## Git and Version Control

This project adheres to a strict Git workflow for version control:

1. **Initialize the Git Repository**:

    ```bash
    git init
    ```

2. **Commit Changes Frequently**:

    ```bash
    git add .
    git commit -m "Meaningful commit message"
    ```

3. **Push to a Remote Repository**:

    ```bash
    git remote add origin <remote-repository-url>
    git push -u origin master
    ```

4. **Incremental Commits**:
   - Commits were made for every new feature or test case addition to follow TDD principles.

---

## License

This project is open-source and available under the MIT License.
