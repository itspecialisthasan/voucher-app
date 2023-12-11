const db = require( '../models' );

//create model
const Voucher = db.voucher;
const Login = db.login;


//add voucher

const postUser = async ( req, res ) =>
{
    let info = {
        username: req.body.username,
        password: req.body.password,

    }

    let createUser = await Login.create( info );
    res.status( 200 ).send( createUser )
    console.log( "create voucher" + createUser );
}

//get all voucher data

const getUser = async ( req, res ) =>
{
    let id = req.params.id;
    let getUser = await Login.findOne( { where: { id: id } } );
    res.status( 200 ).send( getUser );
    console.log( "get all voucher data " + getUser );
}

module.exports = {
    postUser,
    getUser
}