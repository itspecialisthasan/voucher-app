const express = require( 'express' );
const cors = require( 'cors' );

const app = express();

const corsOptions = {
    origin: "https://localhost:8081"
}

//middleware

app.use( cors( corsOptions ) )
app.use( express.json() )
app.use( express.urlencoded( { extended: true } ) )

//routing

const voucherRouter = require( './routes/voucherRoute.js' );
const loginRouter = require( './routes/loginRoute.js' );

app.use( '/api/voucher', voucherRouter )
app.use( '/api/login', loginRouter )

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