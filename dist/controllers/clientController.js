"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClients = exports.createClient = void 0;
const connection_1 = require("../config/connection");
const Client_1 = __importDefault(require("../models/Client"));
// create client
const createClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, identity, email, phone, age, gender, location, access_point, operating_system } = req.body;
    yield (0, connection_1.dbConnection)();
    const existingClient = yield Client_1.default.findOne({ identity });
    if (!existingClient) {
        try {
            const newClient = new Client_1.default({ name, identity, email, phone, age, gender, location, access_point, operating_system });
            yield newClient.save();
            res.status(201).json({ message: 'Cliente creado correctamente' });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ message: 'Error interno del servidor' });
        }
    }
    else {
        res.status(200).json({ message: 'El cliente ya esta creado' });
    }
    yield (0, connection_1.dbDisconnect)();
});
exports.createClient = createClient;
// get clients
const getClients = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, connection_1.dbConnection)();
        const clients = yield Client_1.default.find();
        res.status(200).json(clients);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
exports.getClients = getClients;
