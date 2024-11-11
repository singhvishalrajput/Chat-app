# Chat-App

A simple frontend-only chat application built with React, featuring a user-friendly interface with login/signup, messaging, and profile management. Backend integration is yet to be implemented.

## Project Structure

```
CHAT-APP
├── node_modules
├── public
├── assets
├── components
│   ├── ChatBox
│   ├── LeftSideBar
│   ├── RightSideBar
│   ├── config
│   ├── context
│   └── lib
├── pages
│   ├── Chat
│   ├── Login
│   └── ProfileUpdate
├── App.jsx
├── index.css
├── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── README.md
```

## Available Pages

The app consists of three main pages:

1. **Login Page** (`/`) - This is the default page where users can sign up or log in.
2. **Chat Page** (`/chat`) - The main chat interface where users can send and receive messages.
3. **Profile Update Page** (`/profile`) - A page for users to update their profile information.

## How to Navigate Between Pages

In the app, navigation between pages is managed using React Router. Here’s how to access each page:

- **Login Page**: Accessed by default at the root path (`/`). Here, users can log in or create an account.
- **Chat Page**: After login, navigate to `/chat` for the chat interface. You may set up links or buttons in the app to direct users to this path.
- **Profile Update Page**: Accessible at `/profile`, where users can update their profile details.


## How to Run the Project

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the app**:
   ```bash
   npm start
   ```

3. **Navigate between pages**:
   - Open [http://localhost:3000](http://localhost:3000) in your browser for the Login page.
   - Go to [http://localhost:3000/chat](http://localhost:3000/chat) for the Chat page.
   - Go to [http://localhost:3000/profile](http://localhost:3000/profile) for the Profile Update page.

## Future Development

Backend integration will be added to enable real-time messaging, user authentication, and profile updates.

