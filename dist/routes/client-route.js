"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const clientController_1 = require("../controllers/clientController");
const router = (0, express_1.Router)();
// create client
router.post('/', [
    (0, express_validator_1.body)('name', 'El nombre es requerido').not().isEmpty(),
    (0, express_validator_1.body)('identity', 'La cédula es requerida').not().isEmpty(),
    (0, express_validator_1.body)('email', 'El email es requerido').not().isEmpty(),
    (0, express_validator_1.body)('phone', 'El teléfono es requerido').not().isEmpty(),
    (0, express_validator_1.body)('age', 'La edad es requerida').not().isEmpty(),
    (0, express_validator_1.body)('gender', 'El genero es requerido').not().isEmpty(),
], clientController_1.createClient);
// getClients
router.get('/', clientController_1.getClients);
exports.default = router;
