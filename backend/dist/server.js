"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const connection_1 = __importDefault(require("./db/connection"));
const PORT = process.env.PORT || 9000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(require('./routes/record'));
app.use(function (_, res) {
    res.status(400).send('Something broke!');
});
connection_1.default.connectToServer(function (err) {
    if (err) {
        console.error("Error:", err);
        process.exit();
    }
    app.listen(PORT, () => {
        console.log(`Running on port: ${PORT}`);
    });
});
//# sourceMappingURL=server.js.map