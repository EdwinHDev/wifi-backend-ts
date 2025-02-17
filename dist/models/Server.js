"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const client_route_1 = __importDefault(require("../routes/client-route"));
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
class Server {
    constructor() {
        this.port = process.env.PORT || 3000;
        this.app = (0, express_1.default)();
        this.middlewares();
        this.paths = [
            { path: '/api/clients', router: client_route_1.default },
        ];
        this.routes();
        this.listen();
    }
    middlewares() {
        this.app.use(express_1.default.json());
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, cors_1.default)());
    }
    routes() {
        this.paths.forEach(({ path, router }) => {
            this.app.use(path, router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`server in: http://localhost:${this.port}`);
            console.log(`Server running on port ${this.port}`);
        });
    }
}
exports.default = Server;
