# 💬 Mini Chat API

A simple backend chat application built using **Node.js, Express, MongoDB, and EJS**.

This project demonstrates RESTful routing, CRUD operations, and MongoDB integration using Mongoose.

---

## 🚀 Features

- 📄 View all chats  
- ➕ Create a new chat  
- ✏️ Edit existing chat  
- 🗑 Delete chat  
- 🗃 MongoDB database integration  
- 🧩 RESTful routes  
- 🎨 EJS templating for UI  

---

## 🛠 Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Mongoose  
- EJS  
- Method-Override  
- Dotenv  

---

## 📂 Routes

| Method | Route | Description |
|--------|-------|------------|
| GET | `/chats` | Show all chats |
| GET | `/chats/new` | Form to create chat |
| POST | `/chats` | Create new chat |
| GET | `/chats/:id/edit` | Edit chat form |
| PUT | `/chats/:id` | Update chat |
| DELETE | `/chats/:id` | Delete chat |

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone git remote add origin https://github.com/vighnesh204/mini-chat-api.git
cd mini-chat-api
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create a `.env` file in the root directory

```
MONGO_URL=your_mongodb_connection_string
PORT=8080
```

### 4️⃣ Start the server

```bash
node index.js
```

Server will run at:

```
http://localhost:8080
```

---

## 📚 What I Learned

- RESTful routing in Express  
- Connecting MongoDB with Mongoose  
- Handling form data  
- Implementing CRUD operations  
- Using EJS for rendering views  

---

## 👨‍💻 Author

Built for learning and practicing backend development using MongoDB + Express.