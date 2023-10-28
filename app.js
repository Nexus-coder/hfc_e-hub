const express = require("express")
const app = express();
const PORT = process.env.PORT || 5501;
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
//My Exports
const User = require('./models/user_models');

app.use(express.urlencoded({ extended: true }));
//This parses the json from the html
app.use(express.json());
//Gets the assests from the public folder
app.use(express.static('public'));

//Set the view engine
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Connect to the mongoose database
mongoose.connect("mongodb+srv://andrew:Kimani@cluster0.hbs3wtk.mongodb.net/?retryWrites=true&w=majority")
    .then(() => {
        console.log("Server opened!!");
    })
    .catch((err) => {
        console.log(err);
    })

//Check errors while it s connected
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Connecton error:"));
db.once("open", () => {
    console.log("Database connected");
})

//The application from here
app.get("/", (req, res) => {
    res.render("user/login");
});

app.post("/", async (req, res) => {
    try {
        //This is the method to post the new user
        console.log(req.body);
        const new_user = await new User(req.body);
        await new_user.save();
    } catch (error) {
        console.log(error)
    }

})

app.listen(PORT, () => {
    console.log("Opened");
});