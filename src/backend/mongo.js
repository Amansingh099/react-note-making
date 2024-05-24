const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/react-login-tut")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("Failed to connect to MongoDB:", error);
    });

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
