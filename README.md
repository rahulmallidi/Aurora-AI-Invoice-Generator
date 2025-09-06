# Aurora - AI Invoice Generator

A modern, AI-powered invoice management system built with the MERN stack (MongoDB, Express.js, React.js, Node.js). Aurora streamlines the invoice creation process by leveraging artificial intelligence to automate data extraction and generate professional invoices.

## Key Features
- 🤖 AI-powered invoice generation
- 🔐 Secure user authentication
- 📊 Interactive dashboard
- 💼 Invoice management & tracking
- 📱 Responsive design
- 📬 Invoice reminders
- 🎨 Modern UI with Tailwind CSS

## Tech Stack
- Frontend: React.js, Tailwind CSS, Vite
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT
- AI Integration: OpenAI

## Project Structure
```
├── frontend/               # React frontend application
│   ├── src/
│   ├── components/        # Reusable UI components
│   ├── pages/            # Application pages
│   ├── context/          # React context providers
│   └── utils/            # Utility functions
└── backend/              # Node.js backend server
    ├── config/           # Configuration files
    ├── controllers/      # Route controllers
    ├── models/          # Database models
    ├── routes/          # API routes
    └── middlewares/     # Custom middlewares
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install backend dependencies
```bash
cd backend
npm install
```

3. Install frontend dependencies
```bash
cd frontend/invoice-generator
npm install
```

4. Set up environment variables
Create `.env` files in both backend and frontend directories with necessary configurations.

5. Start the development servers

Backend:
```bash
cd backend
npm run dev
```

Frontend:
```bash
cd frontend/invoice-generator
npm run dev
```

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
[Add your license here]