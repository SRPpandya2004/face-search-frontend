# face-search-frontend
It also created as Part of Project

# Face Search Frontend (Next.js)

This is the frontend web interface for the Face Search application.
Built with:
- Next.js 14
- TailwindCSS
- Firebase Auth + Storage

## Run locally
npm install
npm run dev

## Features
- Camera capture
- Upload photo for face-search
- Display matches
- Admin dashboard


# Face Search Frontend (Next.js)

This is the frontend application for the **AI-Based Face Search and Photo Retrieval System**.  
It provides a modern, animated user interface to interact with the Face Search backend.

Users can:
- Upload a photo or capture one using the camera
- Search for matching photos based on face recognition
- View results in a structured, responsive grid
- See clear feedback when no matching photos are found

---

## 🧩 Tech Stack

- **Framework:** Next.js (React)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** CSS + modern UI transitions
- **API Communication:** Fetch API
- **Backend Integration:** FastAPI (Python)

---

## 📁 Project Structure

face-search-frontend/
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx # Search page (User)
│ │ ├── upload/
│ │ │ └── page.tsx # Admin upload page
│ ├── components/
│ │ ├── CameraCapture.tsx
│ │ ├── FaceResultsGrid.tsx
│ │ ├── Navbar.tsx
│ │ └── Loader.tsx
│ ├── lib/
│ │ └── api.ts # Backend API calls
│ └── styles/
│ └── globals.css
├── public/
├── package.json
├── tsconfig.json
└── README.md


---

## ⚙️ Prerequisites

Make sure you have the following installed:

- **Node.js** (v18 or above)
- **npm** (comes with Node.js)
- Backend server running (FastAPI)

---

## 🔧 Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_API_URL=http://127.0.0.1:8000


▶️ Run the Project Locally

Open terminal in the frontend folder

cd face-search-frontend


Install dependencies

npm install


Start the development server

npm run dev


Open browser

http://localhost:3000

🧑‍💻 Application Pages
🔍 Face Search (User)

Upload image or capture via camera

Finds all matching photos from the database

Displays results in a responsive grid

Shows animated “Photo Not Found” message when no match exists

⬆️ Admin Upload

Upload single or multiple images

Used to add photos to the database

Intended for admin use only

🔐 Security Notes

No sensitive credentials are stored in this repository

Backend secrets (Firebase keys, service accounts) are NOT included

API URL is handled via environment variables

🧠 Project Type

This frontend is part of an AI-powered system using:

Deep Learning (Face Recognition)

Vector Search (FAISS)

Real-time image processing

📌 Academic Use

Suitable for B.E / B.Tech Final Year Project

Demonstrates full-stack AI system

Clean UI + real backend integration

📜 License

This project is intended for educational purposes.

