const express = require("express");
const collection = require("./mongo");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await collection.findOne({ email: email });
        if (user) {
            // Optionally, you can add password validation here
            res.json("exist");
        } else {
            res.json("notexist");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json("error");
    }
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
    const newUser = { email: email, password: password };

    try {
        const user = await collection.findOne({ email: email });
        if (user) {
            res.json("exist");
        } else {
            await collection.insertMany([newUser]);
            res.json("notexist");
        }
    } catch (error) {
        console.error("Error during signup:", error);
        res.status(500).json("error");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
