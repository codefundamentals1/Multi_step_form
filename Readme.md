# 🧾 Full-Stack Form Wizard App  

A sleek multi-step form built using **React (Frontend)**, **Node.js + Express (Backend)**, and **MongoDB (Database)**.  
It includes form validation, progress tracking, and backend data saving — all in one smooth workflow 🚀  

---

## 🖼️ Preview
> 🎨 A modern UI multi-step form with progress bar, data review, and backend submission.


---

## ⚙️ Tech Stack
| Layer | Technology |
|--------|-------------|
| 🖥️ Frontend | React + Vite |
| ⚙️ Backend | Node.js + Express |
| 🗄️ Database | MongoDB + Mongoose |
| 🎨 Styling | CSS Modules |
| 🔐 Validation | Custom logic + error states |

---

## 🚀 Features
✅ Multi-step form with progress bar  
✅ Real-time validation and field tracking  
✅ Data review before final submission  
✅ Node.js + Express REST API integration  
✅ MongoDB data persistence  
✅ Fully responsive and modern UI  

---

## 🧩 Project Structure
```
project/
│
├── backend/
│   ├── server.js
│   ├── models/
│   │   └── FormData.js
│   ├── routes/
│   │   └── formRoutes.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ParentForm.jsx
│   │   │   └── Steps.jsx
│   │   ├── styles/
│   │   │   └── ParentForm.module.css
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

## 🧠 API Overview

**Base URL:** `http://localhost:5000/api/form`

### ➕ POST `/api/form`
Submit form data to backend and save to MongoDB.


**Response:**
```json
{
  "message": "Form submitted successfully",
  "data": { ... }
}
```

---

## 🛠️ Setup Instructions

### 🔹 1. Clone the repository
```bash
git clone https://github.com/yourusername/form-wizard-app.git
cd form-wizard-app
```

### 🔹 2. Setup backend
```bash
cd backend
npm install
```
Create `.env` file:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Run server:
```bash
npm start
```

### 🔹 3. Setup frontend
```bash
cd ../frontend
npm install
npm run dev
```
Visit: 👉 **http://localhost:5173**

---

## 🌱 Environment Variables
| Variable | Description |
|-----------|--------------|
| `MONGO_URI` | MongoDB connection string |
| `PORT` | Server port (default: 5000) |

---



---

## 🧑‍💻 Future Improvements
- 🔍 Add advanced validation (Yup or Zod)
- 📧 Email confirmation
- 📊 Dashboard to view submissions
- 🌐 Deploy on Render + Vercel

---

## 💖 Show Some Love
If you found this project helpful, please ⭐ it on GitHub!  
Made with ❤️ by **Anish Raja**