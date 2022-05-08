import { Router } from 'express'
import clientController from '../../controllers/client.controller'
import authController from '../../controllers/auth.controller'
import mailerController from '../../controllers/mailer.controller'
import validatorHandler from '../../middlewares/validationHandler';
import { client, auth } from '../../database/schemas'
const router = Router()



// login as client
router.post('/login',
  validatorHandler(auth.login, 'body'),
  async (req, res, next) => {
    try {
      req.body = await authController.login(req.body, 1)
      next()
    } catch (error) { next(error) }
  }
)

// create a new client
router.post('/register',
  validatorHandler(client.new, 'body'),
  async (req, res, next) => {
    try {
      req.body = await authController.register(req.body)
      req.body = await clientController.store(req.body)
      console.log(req.body)
      // await mailerController.verifyEmail(req.body)
      // req.message = 'New user created. Check your email and verify your.'
      next()
    } catch (error) { next(error) }
  }
)

router.post('/forgotpassword',
  validatorHandler(auth.forgotpassword, 'body'),
  async (req, res, next) => {
    try {
      req.body = await authController.forgotpassword(req.body)
      next()
    } catch (error) { next(error) }
  })

router.put('/newpassword',
  // validatorHandler(auth.forgotpassword, 'body'),
  async (req, res, next) => {
    try {
      req.body = await authController.newpassword(req.body)
      next()
    } catch (error) { next(error) }
  })
// router.get('/token', authController.token)
// router.get('/validatetoken/:mtoken', authController.validationToken)
// router.post('/signin', authController.signin)
// router.post('/signup', authController.signup)
// router.post('/verify', authController.verify)
// 
module.exports = router