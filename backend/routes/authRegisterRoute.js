const authController = require( '../controllers/authController.js' );

const router = require( 'express' ).Router();

router.post( '/register', authController.registerHandler );
// router.get( '/getAllUser', loginController.getUser );

// router.get( '/:id', loginController.getUserById );


module.exports = router;