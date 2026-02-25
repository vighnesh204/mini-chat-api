const mongoose = require('mongoose');
const Chat = require('./models/chat');

 const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

main().then(()=>{
    console.log("DB connected Successfully")
})
.catch((err)=>
console.log(err)
);

const chats = [
  {
    from: "Sung Jin-Woo",
    to: "Cha Hae-In",
    message: "Shadow army ready. Gate clear karein?",
    created_at: new Date(),
  },
  {
    from: "Gojo Satoru",
    to: "Yuji Itadori",
    message: "Domain Expansion practice karein?",
    created_at: new Date(),
  },
  {
    from: "Tanjiro Kamado",
    to: "Nezuko",
    message: "Nezuko, suraj aa gaya. Box me jao.",
    created_at: new Date(),
  },
  {
    from: "Zenitsu",
    to: "Inosuke",
    message: "Demon strong hai, mujhe darr lag raha!",
    created_at: new Date(),
  },
  {
    from: "Megumi Fushiguro",
    to: "Gojo Satoru",
    message: "Sensei, ek aur cursed spirit mila.",
    created_at: new Date(),
  },
  {
    from: "Rengoku",
    to: "Tanjiro Kamado",
    message: "Apna dil jalao aur ladte raho!",
    created_at: new Date(),
  },
  {
    from: "Sung Jin-Woo",
    to: "Beru",
    message: "Beru, right side cover karo.",
    created_at: new Date(),
  },
  {
    from: "Yuji Itadori",
    to: "Megumi Fushiguro",
    message: "Sukuna control lene ki koshish me hai.",
    created_at: new Date(),
  },
  {
    from: "Inosuke",
    to: "Tanjiro Kamado",
    message: "Main mountain king hoon! Demon kahan?",
    created_at: new Date(),
  },
  {
    from: "Cha Hae-In",
    to: "Sung Jin-Woo",
    message: "Tumhari power next level hai.",
    created_at: new Date(),
  },
];


Chat.insertMany(chats)
  .then((res) => {
    console.log("Chats inserted successfully:", res);
    })