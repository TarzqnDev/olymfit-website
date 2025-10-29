const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoutes = require('./routes/auth')

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use('/api/auth', authRoutes)

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch((error) => console.error("MongoDB Connection Error:", error));

app.get("/", (req, res) => {
    res.send("API Running");
});

app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));