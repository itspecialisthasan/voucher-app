const db = require( '../models' );

//create model
const Voucher = db.voucher;
const Login = db.login;


//add voucher

const postVoucher = async ( req, res ) =>
{
    let info = [
        {
            voucherDate: req.body.voucherDate,
            voucherCurrency: [ req.body.voucherCurrency ],
            exchangeRate: req.body.exchangeRate,
            narration: req.body.narration,
            voucherType: [ req.body.voucherType ],
            voucherPrice: req.body.voucherPrice
        }
    ]

    let createvoucher = await Voucher.create( info );
    res.status( 200 ).send( createvoucher )
    console.log( "create voucher" + createvoucher );
}

//get all voucher data

const getVoucher = async ( req, res ) =>
{
    let getAllvoucher = await Voucher.findAll( {} );
    res.status( 200 ).send( getAllvoucher );
    console.log( "get all voucher data " + getAllvoucher );

}

//get voucher by id

const getVoucherById = async ( req, res ) =>
{
    let id = req.params.id;
    let getVoucherOne = await Voucher.findOne( { where: { id: id } } )
    res.status( 200 ).send( getVoucherOne );
    console.log( "get voucher by id " + getVoucherOne );
}

//get voucher by id

const putVoucherById = async ( req, res ) =>
{
    let id = req.params.id;
    let putVoucherOne = await Voucher.update( req.body, { where: { id: id } } )
    res.status( 200 ).send( putVoucherOne );
    console.log( "update voucher by id " + putVoucherOne );
}


module.exports = {
    postVoucher,
    getVoucher,
    getVoucherById,
    putVoucherById
}