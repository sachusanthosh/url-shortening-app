import mongoose, { mongo } from "mongoose";
import express from "express";
import cors from "cors";
import { nanoid } from "nanoid";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.DATABASE_URL || "mongodb://localhost:27017/urlShortner", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Mongoose is connected"))
  .catch((err) => {
    console.error("Could not connect to database", err);
    process.exit(1);
  });

const urlSchema = mongoose.Schema({
  longUrl: String,
  shortUrl: String,

})

const Url = mongoose.model('Url', urlSchema);

app.post('/api/shorten', async (req, res) => {
  try {
    const { longUrl } = req.body;

    if (!longUrl) {
      return res.status(400).json({ error: "Long URL is missing" });
    }
    const urlPattern = /^(https?:\/\/[^\s$.?#].[^\s]*)$/;
    if (!urlPattern.test(longUrl)) {
      return res.status(400).json({ error: "Invalid URL format" });
    }

    const shortUrl = nanoid(6);
    const url = new Url({ longUrl, shortUrl });
    await url.save();

    return res.status(201).json({
      message: "URL shortened successfully",
      url: {
        longUrl: url.longUrl,
        shortUrl: url.shortUrl,
      },
    });

  } catch (error) {
    console.error("Error in /api/shorten:", error);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
});

app.get('/:shortUrl', async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await Url.findOne({ shortUrl });

    if (!url) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.redirect(url.longUrl);

  } catch (error) {
    console.error("Error in GET /:shortUrl:", error);
    return res.status(500).json({ error: "Server error. Please try again later." });
  }
});


// Default Route
app.get("/", (req, res) => {
  res.send("Welcome to the URL Shortener API");
});

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
