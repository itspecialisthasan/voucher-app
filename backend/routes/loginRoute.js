const loginController = require( '../controllers/loginController.js' );

const router = require( 'express' ).Router();

router.post( '/addVoucher', loginController.postUser );
router.get( '/:id', loginController.getUser );


module.exports = router;