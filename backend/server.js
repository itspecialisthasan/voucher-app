const express = require( 'express' );
const cors = require( 'cors' );

const app = express();

// const corsOptions = {
//     origin: "http://localhost:5173/"
// }

//middleware

app.use( cors() )
app.use( express.json() )
app.use( express.urlencoded( { extended: true } ) )

//routing

const voucherRouter = require( './routes/voucherRoute.js' );
const loginRouter = require( './routes/authRoute.js' );
const registerRouter = require( './routes/authRegisterRoute.js' )

app.use( '/api/voucher', voucherRouter )
app.use( '/api/login', loginRouter )
app.use( '/api/register', registerRouter )

//testing

app.get( "/", ( req, res ) =>
{
    res.json( { message: "welcome to our world.." } )
} )

//port

const PORT = process.env.PORT || 4000;

app.listen( PORT, () =>
{
    console.log( `Server is started and Listening port on ${ PORT }` );
} )