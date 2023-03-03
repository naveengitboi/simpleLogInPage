const express = require("express");
const path = require("path");
const session = require("express-session");
const {v4: uuidv4} = require('uuid')
const router = require('./router')

const port = process.env.PORT || 3000;  //server port

const app = express();  //converts request body json to data

//middle ware
const bodyparser = require('body-parser');
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({
    extended: true
}))



// html content
app.set("view engine", "ejs");

// static asserts
const pathName = path.join(__dirname, "public");
app.use("/static", express.static(pathName));

app.use(session(
    {
        secret: uuidv4(),
        resave:false,
        saveUninitialized: true
    }
))

app.use('/route', router)

//home route
app.get("/", (req, res) => {
    res.render("base", { title: "Log in system" });
  })


app.listen(port);
