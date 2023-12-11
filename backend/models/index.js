const dbConfig = require( '../config/dbconfig.js' )
const { Sequelize, DataTypes } = require( 'sequelize' )

const sequelizeObj = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
}
)

sequelizeObj.authenticate().then( () =>
{
    console.log( "connected" )
} ).catch( ( err ) =>
{
    console.log( err );
} )

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelizeObj

db.login = require( './loginModel.js' )( sequelizeObj, DataTypes )
db.voucher = require( './voucherModel.js' )( sequelizeObj, DataTypes )

db.sequelize.sync( { force: false } )
    .then( () =>
    {
        console.log( "yes re-sync, done..!" );
    } )

module.exports = db;