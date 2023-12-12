const db = require( '../models' );
const bcrypt = require( 'bcrypt' );

//create model
const Login = db.login;


//add voucher

const postUser = async ( req, res ) =>
{
    // let info = {
    //     username: req.body.LoginUsername,
    //     password: req.body.LoginPassword,
    // }

    try
    {
        const sendUsername = req.body.LoginUsername;
        const sendPassword = req.body.LoginPassword;

        let checkUser = await Login.findAll( { where: { username: sendUsername } } );
        const matchPassword = await bcrypt.compare( sendPassword, Login[ 0 ].password )
        if ( !matchPassword )
        {
            res.status( 400 ).send( { msg: "wrong password" } )
        }
        res.status( 200 ).send( checkUser )

    } catch ( err )
    {
        res.status( 404 ).send( { error: err } )
    }

    // console.log( "create user" + createUser );

    // const sendUsername = req.body.LoginUsername;
    // const sendPassword = req.body.LoginPassword;

    // const SQL = "SELECT * FROM logins WHERE username = ? && password = ?";
    // const values = [ sendUsername, sendPassword ];


    // await Login.query( SQL, values, ( err, results ) =>
    // {
    //     if ( err )
    //     {
    //         res.send( { error: err } )
    //     }
    //     if ( results.length > 0 )
    //     {
    //         res.send( results )
    //     } else
    //     {
    //         res.send( { msg: "Credentials not match" } )
    //     }
    // } )
}


// //get user by id voucher data

// const getUser = async ( req, res ) =>
// {
//     let getUser = await Login.findAll( {} );
//     res.status( 200 ).send( getUser );
//     console.log( "get all voucher data " + getUser );
// }

// //get user by id voucher data

// const getUserById = async ( req, res ) =>
// {
//     let id = req.params.id;
//     let getUser = await Login.findOne( { where: { id: id } } );
//     res.status( 200 ).send( getUser );
//     console.log( "get all voucher data " + getUser );
// }

module.exports = {
    postUser,
}