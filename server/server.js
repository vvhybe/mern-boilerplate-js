const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bcrypt = require("bcrypt");
//routes
const loginRoute = require("./routes/auth/login");
const registerRoute = require("./routes/auth/register");
const { mongoConnect } = require("./database/connect");

const server = express();
//Middelwares:
server.use(cors());
server.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 9000;
//init the server:
server.listen(PORT, ()=> console.info(`=> Server is live in: http://localhost:${PORT}`));
// MONGODB CONNECTION SETUP
mongoConnect(process.env.MONGODB_URL, "TEST")

//Routes handellers:
server.post("/login", loginRoute);
server.post("/register", registerRoute);