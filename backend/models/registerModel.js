module.exports = ( sequelizeObj, DataTypes ) =>
{

    const register = sequelizeObj.define( "register", {
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    } )

    return register;
}