# 🚀 Agile Project Manager
A modern, frontend-focused Agile project management application built with **React + TypeScript + MUI**, designed to simulate real-world team collaboration, project tracking, and story management workflows.

## access the project by clicking the link :
https://harikrishna-gupta-agile-management.onrender.com/
---

## 🧠 Overview

FastHyre is a scalable and modular project management system that allows users to:

* Manage projects and team members
* Track stories across different stages (Backlog → In Progress → Testing → Done)
* Analyze project performance with real-time insights
* Apply advanced filters and sorting for better visibility

The application focuses on **clean UI/UX, structured state management, and scalability**, making it suitable for real-world frontend architecture demonstrations.

---

## ⚙️ Tech Stack

* **React (Vite)** – Fast and modern frontend setup
* **TypeScript** – Strong typing and maintainability
* **Material UI (MUI)** – Consistent and professional UI design
* **Context API** – State management (projects, users, stories)
* **LocalStorage** – Persistent data simulation

---

## 🧱 Project Structure

```text
src/
 ├── Components/
 │    ├── Projects/
 │    ├── Users/
 │    ├── Stories/
 │    ├── Dashboard/
 │
 ├── Context/
 │    ├── ProjectsContext
 │    ├── UsersContext
 │    ├── StoriesContext
 │
 ├── Hooks/
 │    ├── useProjects
 │    ├── useUsers
 │    ├── useStories
 │
 ├── Types/
 ├── Mock/
 ├── Storage/
 ├── Pages/
```

### 🔑 Key Idea:

Each domain (**Projects, Users, Stories**) is **isolated into its own context**, enabling modular state updates and better scalability.

---

## ✨ Key Features

### 📌 Project Management

* Create and manage projects with team members
* Dynamic filtering (team size, members, activity, etc.)
* Sorting (Newest / Oldest)

### 👥 User Management

* Add/edit users with roles and avatars
* Role-based UI behavior

### 🧾 Story Tracking

* Track stories across multiple statuses
* Filter by priority, status, and project
* Story distribution insights

### 📊 Analytics Dashboard

* Project completion tracking
* Workload distribution per user
* Priority and status breakdown

### 🔍 Advanced Filtering

* Real-time filtering (no reload required)
* Combined filters (member + team size + activity)

---

## 🧠 State Management Approach

The app uses a **hybrid centralized + modular state architecture**:

* A unified `AppState` is persisted in localStorage
* Individual contexts (**Projects, Users, Stories**) consume and manage slices
* Updates are scoped → preventing unnecessary re-renders

👉 This ensures:

* Better performance
* Clean separation of concerns
* Easy extensibility

---

## 💾 Persistence Strategy

* Data is stored in **localStorage**
* Auto-sync across tabs using `storage` event
* Mock data used for initial seeding

---

## 📈 Scalability

The architecture is designed to scale easily:

* Add new modules (e.g., Notifications, Comments) without affecting existing logic
* Replace Context API with Redux/Zustand if needed
* Plug backend APIs without changing UI structure
* Extend analytics using reusable utility functions

---

## 🎯 Design Philosophy

* Minimal yet functional UI
* Consistent spacing and layout using MUI
* Focus on usability over complexity
* Component-driven design for reusability

---

## 🚀 Future Enhancements

* Authentication & user sessions
* Role-based access control (Admin / Member)
* File attachments for stories
* Real-time collaboration
* Backend integration

---

## 📌 Conclusion

FastHyre demonstrates strong frontend engineering principles including:

* Scalable architecture
* Clean state management
* Modular component design
* Real-world feature simulation

It reflects the ability to build **maintainable and production-ready frontend systems**.

---
