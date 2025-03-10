# URL Shortener Frontend

A modern URL shortening application built with Next.js and React that allows users to create, manage, and track shortened URLs.

## Features

- **URL Shortening**: Create shortened URLs for any valid long URL
- **Custom Codes**: Option to specify custom codes for your shortened URLs
- **User Dashboard**: Manage all your shortened URLs in one place
- **Authentication**: Secure login/register system
- **Analytics**: Track clicks and performance of your shortened URLs
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Containerized**: Docker support for easy deployment
- **CI/CD Pipeline**: Automated testing and deployment

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (v13)
- **Frontend**: [React](https://reactjs.org/) with TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v3)
- **State Management**: [React Query](https://tanstack.com/query/latest)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Testing**: [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **Containerization**: [Docker](https://www.docker.com/)
- **CI/CD**: GitHub Actions

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Docker (optional, for containerized development)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd QT-global-test-frontend
```

2. Install dependencies
```bash
npm install
# or
yarn
```

3. Set up environment variables
Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_API_URL=http://localhost:8000 # Your API URL
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

The application should now be running at [http://localhost:3000](http://localhost:3000).

## Docker Setup

### Using Docker Compose

You can run the application using Docker Compose:

```bash
# Build and start the application
docker-compose up -d

# Stop the application
docker-compose down
```

### Building and Running the Docker Image

To build and run the Docker image manually:

```bash
# Build the Docker image
docker build -t url-shortener-frontend .

# Run the container
docker run -p 3000:3000 -e NEXT_PUBLIC_API_URL=http://your-api-url url-shortener-frontend
```

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration and delivery. The pipeline:

1. Builds the application
2. Runs linting and tests
3. Creates a Docker image
4. Pushes the image to Docker Hub (on main/master branch)
5. Optionally deploys the application (when configured)

To use the CI/CD pipeline, you need to set the following GitHub repository secrets:

- `DOCKERHUB_USERNAME`: Your Docker Hub username
- `DOCKERHUB_TOKEN`: Your Docker Hub access token

For deployment, you'll additionally need:
- `SSH_HOST`: Your server's IP address
- `SSH_USERNAME`: SSH username
- `SSH_PRIVATE_KEY`: SSH private key for access

## Project Structure

```
├── app/                   # Next.js app directory
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   ├── analytics/         # Analytics pages
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout component
├── components/            # React components
│   ├── ui/                # UI components
│   └── urls/              # URL-related components
├── lib/                   # Utility functions
│   ├── api.ts             # API client setup
│   └── auth.tsx           # Authentication context
├── __tests__/             # Test files
│   └── components/        # Component tests
├── public/                # Static assets
├── .env.local             # Environment variables (create this file)
├── .github/               # GitHub configurations
│   └── workflows/         # CI/CD workflow files
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── next.config.js         # Next.js configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies and scripts
```

## Usage

### Creating a Shortened URL

1. Navigate to the dashboard
2. Enter a long URL in the input field
3. (Optional) Enter a custom code for your shortened URL
4. Click "Shorten URL" button
5. Copy and share your shortened URL

### Viewing Analytics

1. Navigate to the dashboard
2. Find the URL you want to analyze
3. Click "View Analytics" button
4. View detailed statistics about your URL

## Testing

The application includes comprehensive Jest tests for components. To run the tests:

```bash
# Run tests once
npm test
# or
yarn test

# Run tests in watch mode
npm run test:watch
# or
yarn test:watch
```

## API Endpoints

The frontend interacts with the following API endpoints:

- `POST /auth/login` - User login
- `POST /auth/register` - User registration
- `POST /auth/logout` - User logout
- `GET /users/me` - Get current user data
- `GET /urls` - List user's URLs
- `POST /shorten` - Create shortened URL
- `DELETE /urls/:id` - Delete a URL
- `GET /analytics/:shortCode` - Get URL analytics

## License

[MIT License](LICENSE)

## Contributors

- [John Chishugi](https://github.com/johnkeychishugi)
