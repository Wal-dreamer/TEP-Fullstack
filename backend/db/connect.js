import mongoose from "mongoose";
import "dotenv/config.js";
import { connectToDatabase } from "./db/connect.js";

const app = express();

/* app.use(express.json());

app.post("/api/v1/books", async (req, res) => {
    const { title, subtitle, author, genre, cover } = req.body;

    try {
        const book = new Book({ title, subtitle, author, genre, cover });
        await book.save();
        res.status(201).json({ success: true, data: book });
    } catch (error) {
        console.error("Error saving book...", error);
        res.status(500).json({ sucess: false, error: "Internal Server Error" });
        
    }
}); */

app.listen (3000, () => {
    console.log("Server is running on port 3000.");
    connectToDatabase();
})

async function connectToDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to database...", error);
        process.exit(1);
    }
}

