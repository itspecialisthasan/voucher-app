const voucherController = require( '../controllers/voucherController.js' );

const router = require( 'express' ).Router();

router.post( '/addVoucher', voucherController.postVoucher );
router.get( '/getAllVoucher', voucherController.getVoucher );

router.get( '/:id', voucherController.getVoucherById );
router.put( '/:id', voucherController.putVoucherById );

module.exports = router;