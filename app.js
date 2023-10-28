const express = require("express")
const app = express();
const PORT = 5501;
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");

app.use(express.urlencoded({ extended: true }));
//This parses the json from the html
app.use(express.json());
//Gets the assests from the public folder
app.use(express.static('public'));
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.connect("mongodb+srv://andrew:Kimani@cluster0.hbs3wtk.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Server opened!!");
    })
    .catch((err) => {
        console.log(err);
    })

app.get("/", (req, res) => {
    res.render("user/login");
});

app.post("/", (req, res) => {
    console.log(req.body);
})

app.listen(PORT, () => {
    console.log("Opened");
});