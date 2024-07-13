import express from "express";
import mongoose, { Mongoose } from "mongoose";
import Cards from "./dbCards.js"
import Cors from  "cors"
// app config
const app = express();
const  port =  process.env.PORT || 8000;
const connection_url = "mongodb+srv://sagarpatel2524:sagar12345@cluster55555.6y65pww.mongodb.net/tinderdb?retryWrites=true&w=majority&appName=Cluster55555"

// Middlewares
app.use(express.json());
app.use(Cors());

//DB Config

mongoose.connect(connection_url, {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedTopology: true,
})

// API endpoints

app.get("/", (req,res) => res.status(200).send("Hello Programmer"));

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard)
        .then((newCard) => {
            console.log("*******", newCard);
            res.status(201).send(newCard);
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send(err);
        });
});

app.get("/tinder/cards", async (req, res) => {
    try {
        const dbCards = await Cards.find().exec();
        res.status(200).send(dbCards);
    } catch (err) {
        res.status(500).send(err);
    }
});

//Listener

app.listen(port, () => console.log (`Listening on localhost: ${port}`) );