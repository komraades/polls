// Loads the configuration from config.env to process.env
import "dotenv";
import express from "express";
import cors from "cors";
//import * as functions from 'firebase-functions';
// get MongoDB driver connection
import driver from "./db/connection.js";
import recordRoutes from "./routes/record.js";
import "./models/polls.js";

const PORT = process.env.PORT || 9000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(recordRoutes);

// Global error handling
app.use(function (_, res) {
  //	console.error("Global Error: ");
  res.status(400).send("Something broke!");
});

// perform a database connection when the server starts
driver.connectToServer(function (err) {
  if (err) {
    console.error("502 Error:", err);
    // process.exit();
  }

  // start the Express server
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

//export const api = functions.https.onRequest(app);
