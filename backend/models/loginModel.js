module.exports = ( sequelizeObj, DataTypes ) =>
{

    const Login = sequelizeObj.define( "login", {
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    } )

    return Login;
}