"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_1 = __importDefault(require("./routes/auth"));
const controller_1 = require("./controllers/decorators/controller");
const cors_1 = __importDefault(require("cors"));
require("./controllers/authController");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use([body_parser_1.default.urlencoded({ extended: true })]);
app.use(auth_1.default);
app.use(controller_1.router);
module.exports = app;
