# GitHub User Finder

A responsive React + TypeScript application to search GitHub users and view detailed profile information including repositories. This was developed as part of an interview task.

---

## 📁 Tech Stack

- **React** + **TypeScript**
- **Vite**
- **Material UI (MUI)** for UI components
- **Zustand** for global state management
- **React Router DOM** for client-side routing
- **Axios** for API requests
- **GitHub REST API v3**

---

## 🧠 Features

- 🔍 **User Search**: Search GitHub users by username using the GitHub API.
- 🧑‍💻 **User List**: Display a list of matching users with their avatar and username.
- 📄 **User Profile**: View profile details like avatar, bio, followers, and repository count.
- 📦 **Repositories**: Display a list of public repositories with name, description, star count, and GitHub link.
- ⏳ **Loading States**: Skeleton loaders for better UX during data fetch.
- ❗ **Error Handling**: Handles cases like empty input, user not found, and API errors.
- 📱 **Responsive Design**: Fully responsive layout for mobile and desktop views.
- 🔁 **Routing**: Two routes - `/` for search, `/user/:username` for profile view.
- 🧭 **Navigation**: Click on a user to navigate to their profile; "Back to Search" button provided.
- 📜 **Debounced Search**: Search input is debounced to avoid unnecessary API calls.
- 🔄 **Pagination/Infinite Scroll**: Handles users with many repositories efficiently.

---

## 📦 Folder Structure

src/
│
├── assets/ # Static assets (if any)
├── components/ # Reusable UI components (SearchBar, UserCard, RepoCard)
├── pages/ # Route components (SearchPage, UserProfilePage)
├── store/ # Zustand global store
├── services/ # Axios configuration and API calls
├── layout/ # Layout component with responsive grid
├── App.tsx # App routes and wrapper
└── main.tsx # Entry point

---

## 🛠️ Setup Instructions

# Clone the repository

git clone https://github.com/pongangairaman-nks/github-user-explorer.git
cd github-user-explorer

# Install dependencies

npm install --legacy-peer-deps

# or

yarn install --ignore-peer-deps

# Start development server

npm run dev

# or

yarn dev

# Build for production

npm run build

# or

yarn build

# Preview production build

npm run preview

# or

yarn preview
