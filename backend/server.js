import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json()); // parse json bodies in the request
app.use(express.urlencoded({ extended: true })); // parse form data bodies in the request
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);


app.get("/", (req, res) => {
    res.send("Hello World");
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


// POST /api/users - Register a user
// POST /api/users/auth - Authenticate a user and get token
// POST /api/users/logout - Logout user and clear cookie
// GET /api/users/profile - Get user profile
// PUT /api/users/profile - Update profile