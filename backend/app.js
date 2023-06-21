const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const bookRoute = require("./routes/booksRoutes");

app.use(express.json());
app.use(cors());
app.use("/api/v1", bookRoute);

const baseUrl = process.env.BASE_URL || "http://localhost";
const port = process.env.PORT || 1000;

app.listen(port, () => {
    console.log(`Server started successfully at ${baseUrl}:${port}`);
});
