# Expense Tracker Frontend

This repository contains the frontend application for our Full-Stack Expense Tracker project. It's built with React and Vite, styled using Tailwind CSS, and designed for seamless integration with our Python/Flask backend.KINDLY FEEL FREE TO MAKE NEEDED CORRECTIONS AND SUGGESTION COZ ITS GOOD FOR ALL OF US

---

## Project Overview

Our goal is to create a functional and user-friendly expense tracking application with features like user authentication, expense management, budgeting with alerts, and interactive spending visualizations.

This frontend is designed to be fully functional and testable independently before fusing with the backend.

### Key Features (Frontend Focus)

* **Authentication:** User registration and login.
* **Expense Management:** Adding, viewing, editing, and deleting expenses.
* **Categorization:** Basic manual categorization of expenses.
* **Recurring Expenses:** Marking expenses as recurring.
* **Budgeting:** Setting and viewing simple monthly budgets per category.
* **Dashboard:** Summary of spending (total, by category).
* **Modern UI:** Dark theme , clean design, and responsive layouts.

### Integration & Workflow

* **API Communication:** Uses Axios to make asynchronous HTTP requests to the Flask backend API endpoints.
* **Authentication Flow:** Frontend stores JWT token (from backend) in `localStorage` and sends it in `Authorization` headers for protected requests.
* **CORS (Backend Responsibility):** The backend will be configured to handle Cross-Origin Resource Sharing. During development, Vite's proxy is used to mitigate some local CORS issues.
* **Environment Variables:** Uses `.env` files (via Vite) for API URLs.

---

## Getting Started

Follow these steps to set up and run the frontend application locally.

### Prerequisites

* Node.js (LTS version recommended)
* npm (comes with Node.js)
* Git

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <YOUR_REPO_URL>
    cd expense-tracker-frontend
    ```
    (Replace `<YOUR_REPO_URL>` with the actual URL of your Git repository).

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Configuration

1.  **Environment Variables:**
    Create a file named `.env` in the root of the `expense-tracker-frontend` directory.
    Add the following line, ensuring the `VITE_API_BASE_URL` matches the base URL of our Flask backend API.

    ```dotenv
    VITE_API_BASE_URL=http://localhost:5000/api
    ```
    * **Note:** During local development, Vite is configured with a proxy in `vite.config.js` so that requests to `/api` from the frontend will be automatically redirected to `http://localhost:5000`. This environment variable is primarily used when the proxy isn't active or for production builds.

### Running the Development Server

To start the frontend development server:

```bash
npm run dev

********************
Frontend Technologies Used

    React: JavaScript library for building user interfaces.
    Vite: Fast development build tool.
    React Router DOM: Declarative routing for React.
    Tailwind CSS: Utility-first CSS framework for rapid styling.
    Axios: Promise-based HTTP client for the browser and Node.js.
    React Toastify: For elegant notifications.

Folder Structure

expense-tracker-frontend/
├── public/                     # Static assets (e.g., favicon)
├── src/
│   ├── assets/                 # Images, icons, fonts (future)
│   ├── components/             # Reusable UI components (e.g., Spinner, ProtectedRoute)
│   │   ├── ProtectedRoute.jsx
│   │   └── Spinner.jsx
│   ├── context/                # React Context for global state management
│   │   └── AuthContext.jsx     # Manages user authentication state
│   ├── layouts/                # Layout components (future: DashboardLayout, AuthLayout)
│   ├── pages/                  # Top-level components representing distinct views/pages
│   │   ├── Auth/
│   │   │   ├── LoginPage.jsx   # User login form
│   │   │   └── RegisterPage.jsx# User registration form
│   │   ├── Dashboard/
│   │   │   └── DashboardPage.jsx # Main dashboard view
│   │   └── NotFoundPage.jsx    # 404 error page
│   ├── services/               # API interaction logic
│   │   └── api.js              # Configured Axios instance for backend calls
│   ├── App.jsx                 # Main application component with routing
│   ├── main.jsx                # Entry point where React app is rendered
│   └── index.css               # Global styles, Tailwind directives
├── .env                        # Environment variables
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration for Tailwind
├── vite.config.js              # Vite build tool configuration (includes proxy)
├── package.json                # Project dependencies and scripts
└── README.md                   # Notes & instructions

Code Quality & Collaboration

We maintain a clean and commented codebase to facilitate collaborative development.


We follow a Conventional Commits specification for clear and structured commit history (e.g., feat: Add new feature, fix: Resolve bug).
Testing

    Unit Tests: (To be implemented using Vitest/React Testing Library)
    Integration Tests: (To be implemented)
    End-to-End Tests: (To be implemented using Cypress/Playwright)

### Future Development
## Frontend Remaining Tasks

Here's what's left to build out on the frontend side:[we'll eliminate each as we proceed]

    Dashboard UI Enhancements:
        Develop a comprehensive DashboardLayout for consistent navigation (header, sidebar) and a ThemeSwitcher component.
        Flesh out the DashboardPage with sections for total spending, spending by category, and quick action links.
    Expense Management (CRUD - Create, Read, Update, Delete):
        Create detailed ExpenseListPage with tables or cards to display expenses, including search and filter capabilities.
        Develop forms for AddExpensePage and EditExpensePage to capture expense details (description, amount, category, date, recurring status, recurrence frequency).
        Implement logic to interact with the backend API endpoints for all CRUD operations on expenses.
    Budgeting Implementation:
        Build the BudgetPage interface for users to set monthly budgets for specific categories.
        Implement visual indicators (e.g., progress bars, color-coded alerts) to show budget utilization.
        Integrate with backend budget alerts (displaying in-app notifications).
    Interactive Spending Visualizations:
        Integrate a suitable charting library (e.g., Recharts, React-Chartjs-2) to display spending data.
        Develop various chart types: spending over time, by category (pie/bar charts), and potentially more advanced visualizations like heatmaps or bubble charts.
    Receipt/Image Integration:
        Design the UI for uploading receipt photos.
        Implement file upload logic to send images to the backend.
        Display extracted expense details from processed receipts (if the backend supports OCR).
    User Experience Refinements:
        Implement robust form validations and clearer error messages for all user inputs.
        Add confirmation modals for destructive actions (e.g., deleting an expense).
        Ensure full responsiveness across different device sizes.

Backend Remaining Tasks (for the Backend-side members)

This section outlines the primary tasks for the Python/Flask backend:

    Core API Endpoints:
        User Authentication: Implement POST /auth/register (user registration), POST /auth/login (user login, returning JWT token).
        Expense Management:
            GET /api/expenses (get all expenses for the authenticated user, with optional filtering/search).
            POST /api/expenses (add a new expense).
            GET /api/expenses/<id> (get a single expense).
            PUT /api/expenses/<id> (update an existing expense).
            DELETE /api/expenses/<id> (delete an expense).
        Category Management: Endpoints to add, view, and manage expense categories.
        Budget Management:
            POST /api/budgets (set a new budget for a category/month).
            GET /api/budgets (get current budgets and their utilization).
    Authentication & Authorization:
        Implement JWT (JSON Web Token) based authentication.
        Secure all sensitive endpoints, ensuring only authenticated users can access their own data.
    Database Integration:
        Set up SQLAlchemy for database interactions (e.g., SQLite for development, PostgreSQL for production).
        Define models for User, Expense, Category, Budget, etc.
        Implement database migrations (e.g., Flask-Migrate).
    Recurring Expense Logic:
        Develop logic to automatically generate future expense entries based on recurrence rules (daily, weekly, monthly, yearly).
        Consider a scheduled task or background job for this.
    Budgeting with Alerts:
        Implement server-side logic to track budget utilization in real-time or periodically.
        Develop a mechanism for generating in-app notifications/alerts when a user approaches or exceeds a budget limit.
    Data Processing:
        Search/Filtering: Implement efficient search and filtering capabilities for expenses.
        Aggregations: Provide endpoints for aggregated spending data (e.g., total spending by month, spending by category for visualizations).
    CORS Configuration:
        Crucially, implement Flask-CORS to allow requests from the frontend's origin (http://localhost:5173 during development) to prevent Cross-Origin Request Blocked errors.
    Receipt/Image Integration (Advanced):
        Implement file upload endpoint (POST /api/receipts/upload) to receive images.
        Potentially integrate OCR (Optical Character Recognition) libraries (e.g., Tesseract via pytesseract) to extract text from receipts.
        Store images securely (e.g., local filesystem, cloud storage).
    Error Handling:
        Implement robust error handling and send meaningful error messages to the frontend.