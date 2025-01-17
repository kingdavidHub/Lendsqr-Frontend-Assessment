# Lendsqr Frontend Assessment

This project is a frontend assessment for Lendsqr, built using React, TypeScript, and Vite. It includes features such as user management, filtering, and pagination.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [API Integration](#api-integration)
- [Testing](#testing)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/kingdavidHub/Lendsqr_Frontend_Assessment.git
   ```

2. Navigate to the project directory:
   ```bash
   cd lendsqr-frontend-assessment
   ```

3. Install the dependencies:
   ```bash
   pnpm install
   ```

4. Start the development server:
   ```bash
   pnpm run dev
   ```

## Usage

After starting the development server, you can access the application at `http://localhost:3000`. The application includes the following main features:

- **Dashboard**: Displays user metrics and a table of users with filtering and pagination.
- **User Details**: Shows detailed information about a specific user.

## Project Structure

The project structure is organized as follows:

```
src/
├── assets/                 # Static assets (images, icons, etc.)
├── components/             # Reusable components
│   ├── FilterForm/         # Filter form component
│   ├── PaginationComp/     # Pagination component
│   ├── PaginatedData/      # Paginated data component
│   └── TableActions/       # Table actions component
├── hooks/                  # Custom hooks
├── pages/                  # Page components
│   ├── Dashboard/          # Dashboard page
│   └── UserDetails/        # User details page
├── styles/                 # Global styles
├── types/                  # TypeScript types
├── utils/                  # Utility functions
├── App.tsx                 # Main application component
├── main.tsx                # Entry point for the application
└── vite-env.d.ts           # Vite environment types
```

## Components

### FilterForm

The `FilterForm` component allows users to filter the user table based on various criteria.

### PaginationComp

The `PaginationComp` component handles pagination for the user table.

### PaginatedData

The `PaginatedData` component displays paginated user data in the table.

### TableActions

The `TableActions` component provides actions such as viewing details, blacklisting, and activating users.

## Styling

The project uses SCSS for styling. Global styles are located in the `styles` directory, and component-specific styles are located in their respective directories.

## API Integration

The project integrates with an API to fetch user data. The API URL is configured using environment variables.

## Testing

To run tests, use the following command:

```bash
pnpm run test
```

