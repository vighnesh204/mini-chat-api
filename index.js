const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const Chat = require('./models/chat');
const methodOverride = require('method-override');

require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

 const main = async () => {
    await mongoose.connect(process.env.MONGO_URL);
}


main().then(()=>{
    console.log("DB connected Successfully")
})
.catch((err)=>
console.log(err)
);

// Chat.findByIdAndDelete("699e8ae6fe63b620b0d1c659").then((res)=>{
//     console.log(res)
// }).catch((err)=> console.log(err))

// Index route to display all chats
app.get('/chats', async (req, res)=>{

        const chats = await Chat.find({});
        // console.log(chats);
        res.render("index.ejs", { chats }); 
})

// New Route to display form for creating new chat
app.get('/chats/new', (req, res)=>{
    res.render("new.ejs");
})

// Create route to handle form submission and save new chat to DB
app.post('/chats', async (req, res)=>{
    const { from, to, message } = req.body;
    let newChat = new Chat({
        from,
        to, 
        message,
        created_at : new Date()
    })
    newChat.save().then((res) => {
        console.log("Chat saved successfully");
    }).catch((err)=> console.log(err))
    console.log(newChat);
    res.redirect('/chats');
})

// Edit route to display form for editing existing chat
app.get('/chats/:id/edit', async (req, res)=>{
    const { id } = req.params;
    const chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
})

// Update route to handle form submission and update existing chat in DB
app.put('/chats/:id', async (req, res)=>{
    const { id } = req.params;
    const { message: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { message: newMsg }, { runValidators: true, new: true });
    console.log(updatedChat);
    res.redirect('/chats');
})

// Delete route to handle deletion of chat from DB
app.delete('/chats/:id', async (req, res)=>{
    const { id } = req.params;
    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(deletedChat);
    res.redirect('/chats');
})
// create and add new chat in DB
// let chat1 = new Chat({
//     from: "gojo",
//     to: "yuji",
//     message: "Kaise ho sbhi 🚀",
//     created_at: new Date(),
// })
// chat1.save().then(res => {
//     console.log(res)
// })

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res)=>{
    res.send(`<h1>Welcome to the Home Page</h1>`);
})