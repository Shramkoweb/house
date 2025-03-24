# 🏠 TinyHouse

A modern full-stack web application for house listings and rentals, built with cutting-edge technologies.

## 🚀 Tech Stack

### Frontend
- React 19
- React Router 7
- TypeScript
- TailwindCSS
- Vite
- Apollo Client (for GraphQL)

### Backend
- Node.js
- Express
- Apollo Server
- GraphQL
- MongoDB
- TypeScript

## 📁 Project Structure

```
tinyhouse/
├── client/          # Frontend application
│   ├── app/         # React application code
│   ├── public/      # Static assets
│   └── ...
└── server/          # Backend application
    ├── src/         # Source code
    ├── database/    # Database configuration
    └── graphql/     # GraphQL schema and resolvers
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (Latest LTS version)
- MongoDB installed and running
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone git@github.com:Shramkoweb/house.git
cd house
```

2. Install server dependencies:
```bash
cd server
npm install
```

3. Install client dependencies:
```bash
cd ../client
npm install
```

### Development

1. Start the server:
```bash
cd server
npm run dev
```
The server will run on http://localhost:9000

2. Start the client:
```bash
cd client
npm run dev
```
The client application will be available at http://localhost:3000

### Production Build

1. Build the server:
```bash
cd server
npm run build
```

2. Build the client:
```bash
cd client
npm run build
```

## 🌟 Features

- Modern React with TypeScript
- GraphQL API with Apollo Server
- MongoDB database integration
- Responsive design with TailwindCSS
- Hot module replacement in development
- Production-ready build configuration

## 📝 License

ISC License

## 👨‍💻 Author

Serhii Shramko

---

Made with ❤️ using modern web technologies
