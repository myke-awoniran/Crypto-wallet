"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const app_1 = __importDefault(require("./app"));
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer(app_1.default);
const port = process.env.PORT;
function startServer(server) {
    server.listen(port, () => {
        console.log(`${process.env.NODE_ENV}:: crytpo wallet running on ${port}`);
    });
}
startServer(server);
