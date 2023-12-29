const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const usersRouter = require("./routes/users.route");

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Home Route
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

// User Route
app.use("/users", usersRouter);

// Route Not Found: Error
app.use((req, res, next) => {
    res.status(400).json({message: "Route Not Found"})
});

// Server Error
app.use((error, req, res, next) => {
    res.status(500).json({message: "Something Broken!"})
});

module.exports = app;