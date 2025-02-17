"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const clientSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true, lowercase: true },
    email: { type: String, required: true },
    identity: { type: String, required: true, unique: true },
    age: { type: Number, required: true },
    phone: { type: String, required: true },
    gender: { type: String, required: true },
    access_point: { type: String, default: '' },
    location: { type: [Number], default: [0, 0] },
}, { timestamps: true });
const Client = mongoose_1.default.model('Client', clientSchema);
exports.default = Client;
