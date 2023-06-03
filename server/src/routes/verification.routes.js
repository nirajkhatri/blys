const { Router } = require('express');

const VerificationController = require('../controllers/VerificationController');

const verificationRouter = Router();

verificationRouter.post('/', VerificationController.verifyCode);

module.exports = verificationRouter;
