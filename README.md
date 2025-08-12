
# CampusBlog

CampusBlog is a modern social platform built with the MERN stack (MongoDB, Express, React Native, Node.js) designed for students of City University of Seattle. The app allows users to interact, create posts, and connect with fellow students in a clean, modern, and mobile-friendly interface.

## Features
- User authentication (Sign Up, Log In)
- Create, edit, and delete posts
- View posts from all users
- Personal profile and your posts
- Responsive and modern UI

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- Yarn (recommended) or npm

### Installation & Running the App

To access the app:

1. **Navigate to the project root**
   ```sh
   cd CampusBlog
   ```

2. **Install frontend dependencies**
   ```sh
   yarn install
   ```

3. **Install backend dependencies**
   ```sh
   cd backend
   npm install
   ```

4. **Start the backend server**
   ```sh
   node server.js
   ```

5. **Open a new terminal and start the frontend**
   ```sh
   cd CampusBlog
   npm start
   ```

6. **You should be good to go!**
   - The backend will run on the port specified in your backend config (default: 5000).
   - The frontend will run on the port specified by Expo (default: 19000 for web, or scan the QR code for mobile).

## Folder Structure
```
CampusBlog/
├── app/            # React Native app source
├── backend/        # Express backend API
├── components/     # Reusable UI components
├── screens/        # App screens (pages)
├── assets/         # Images, fonts, etc.
├── ...             # Other config and utility files
```

## Technologies Used
- React Native (Expo)
- Express.js
- MongoDB
- Node.js

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
This project is for educational purposes.

---

*Developed by students of City University of Seattle.*
