const loginController = require( '../controllers/loginController.js' );

const router = require( 'express' ).Router();

router.post( '/addUser', loginController.postUser );
router.get( '/getAllUser', loginController.getUser );

router.get( '/:id', loginController.getUserById );


module.exports = router;