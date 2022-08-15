const express = require("express");
const cors = require("cors");

const app = express();

const contactsRouter = require("./app/routes/contact.routes")

app.use(cors());
app.use(express.json());
app.use("/api/contacts", contactsRouter);

app.get("/", (req, res) => {
    res.json({ message: "wellcome to contact book application." });
});

module.exports = app;