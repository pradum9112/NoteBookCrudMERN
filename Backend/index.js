require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

app.use(
  cors({
    origin: ["http://localhost:3000"],
    // origin: ["https://notebox-one.vercel.app"],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

// Available routes
app.use(express.json());

// Connect to MongoDB
require("./db")(); // Assuming db.js exports a function for connecting to MongoDB

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

// Start the server
const server = app.listen(port, () => {
  console.log(`Notebox-backend listening on port ${port}`);
});

//shutdown
process.on("SIGTERM", () => {
  console.log("Received SIGTERM. Shutting down gracefully");
  server.close(() => {
    process.exit(0);
  });
});
