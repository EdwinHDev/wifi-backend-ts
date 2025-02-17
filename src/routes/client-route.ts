import { Router } from 'express'
import { body } from 'express-validator'
import { createClient, getClients } from '../controllers/clientController'

const router = Router()

// create client
router.post('/', [
  body('name', 'El nombre es requerido').not().isEmpty(),
  body('identity', 'La cédula es requerida').not().isEmpty(),
  body('email', 'El email es requerido').not().isEmpty(),
  body('phone', 'El teléfono es requerido').not().isEmpty(),
  body('age', 'La edad es requerida').not().isEmpty(),
  body('gender', 'El genero es requerido').not().isEmpty(),
], createClient)

// getClients
router.get('/', getClients)

export default router