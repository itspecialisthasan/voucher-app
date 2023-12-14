const db = require( '../models' );
const bcrypt = require( 'bcrypt' );
const salt = bcrypt.genSaltSync( 10 );

//create model
const Login = db.login;
const register = db.register;


//login authenticate

const loginHandler = async ( req, res ) =>
{
    try
    {
        const sendUsername = req.body.username;
        const sendPassword = req.body.password;

        // const { username, password } = req.body;

        let checkUser = await register.findOne( { where: { username: sendUsername } } );
        console.log( checkUser );

        if ( !checkUser )
        {
            // return res.status( 400 ).send( { message: "user is not exist" } )
            return res.json( "user not exists" )
        }

        let pwdMatch = bcrypt.compare( sendPassword, checkUser.password )

        if ( !pwdMatch )
        {
            return res.status( 400 ).send( { message: "password is not match" } )
        }

        return res.json( "success" )

    } catch ( err )
    {
        res.status( 404 ).send( { error: err } )
    }

}

const registerHandler = async ( req, res ) =>
{
    try
    {
        const { email, username, password, cpassword } = req.body;

        if ( password == !cpassword )
        {
            return res.status( 400 ).send( { message: "password does not match" } )
        }

        let passHash = bcrypt.hashSync( password, salt );

        let checkUser = await register.findOne( {
            where: {
                username: username
            }
        } )

        if ( checkUser )
        {
            res.status( 400 ).send( { message: "User is already exists...." } )
        }

        await register.create( {
            email: email,
            username: username,
            password: passHash
        } )

        return res.status( 200 ).send( { message: "User is registered successfully.." } )

    } catch ( err )
    {
        res.status( 404 ).send( { error: err } )
    }
}

module.exports = {
    loginHandler,
    registerHandler
}