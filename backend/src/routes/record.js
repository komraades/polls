import express from "express";
import { indexController } from "../controllers/index.js";
// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This is a test route
recordRoutes.get("/", indexController);

export default recordRoutes;
