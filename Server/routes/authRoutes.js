import {Router} from 'express'
import { loginController, signupController } from '../controllers/authController.js'

const router = Router()

router.post('/signup', loginController)
router.post('/login', signupController)
router.post('/logout', signupController)

export default router