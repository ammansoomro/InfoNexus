# InfoNexus - A Virtual One-Stop Platform for University Students

## 📌 Overview
InfoNexus is a centralized platform designed to help university students access essential academic resources, course materials, faculty details, and university-related announcements. The platform serves as a virtual repository where students can explore past and current courses, review and rate teachers, browse student societies, and gain insights into previous final-year projects. The goal of InfoNexus is to enhance student experience by providing a structured and collaborative space for academic growth.

## ✨ Features
### 1️⃣ **Courses Module**
- Lists all past and current courses offered by the university.
- Categorized by departments and semesters.
- Students can review and rate courses.
- Provides course outlines and learning objectives.
- Offers course material segregated by individual teachers who have taught the course.

### 2️⃣ **Teachers Module**
- Displays a list of all university faculty members.
- Shows department affiliation and courses they have taught.
- Provides contact information (email).
- Includes course materials uploaded by teachers.
- Students can rate and review teachers anonymously.

### 3️⃣ **Departments Module**
- Comprehensive information on all departments offered by the university.
- Details about departmental specialization and courses offered.

### 4️⃣ **Societies Module**
- Lists all student-run societies within the university.
- Provides details about society events, missions, and membership.
- Allows students to explore extracurricular activities and events.

### 5️⃣ **Projects Module**
- Repository of previous final-year projects from different departments.
- Enables students to understand the scope and complexity of past projects.
- Helps students generate new ideas for their own academic projects.

### 6️⃣ **Announcements Module**
- Stores university-wide announcements.
- Ensures students never miss an important update or event.
- Works as a backup for email-based announcements.

### 7️⃣ **Admin Dashboard**
- Allows administrators to manage and update course information, faculty details, societies, and projects.
- Enables moderation of student reviews and ratings.
- Ensures platform security and content management.

## 🏗️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** Vercel / Netlify (Frontend), Heroku / AWS (Backend)
- **Version Control:** Git, GitHub

## 🚀 Installation & Setup
To set up InfoNexus locally, follow these steps:

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or cloud instance)
- Git

### Clone the Repository
```sh
git clone https://github.com/your-username/InfoNexus.git
cd InfoNexus
```

### Backend Setup
```sh
cd server
npm install
npm start
```

### Frontend Setup
```sh
cd client
npm install
npm run dev
```

### Environment Variables
Create a `.env` file in the `server` directory and add the following:
```env
MONGO_URI=your-mongodb-connection-string
JWT_SECRET=your-secret-key
PORT=5000
```

## 📚 Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit (`git commit -m 'Added new feature'`).
4. Push the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## 📜 License
This project is licensed under the MIT License. See the `LICENSE` file for details.

## ✉️ Contact
For inquiries or contributions, reach out via:
- Email: your.email@example.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [Your GitHub](https://github.com/your-username)

---

_InfoNexus - Empowering students with the right academic resources!_ 🎓
