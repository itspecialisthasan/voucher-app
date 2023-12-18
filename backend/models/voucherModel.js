module.exports = ( sequelizeObj, DataTypes ) =>
{

    const voucher = sequelizeObj.define( "voucher", {
        voucherDate: {
            type: DataTypes.DATEONLY,
        },
        voucherCurrency: {
            type: DataTypes.STRING
        },
        exchangeRate: {
            type: DataTypes.STRING
        },
        narration: {
            type: DataTypes.STRING
        },
        voucherType: {
            type: DataTypes.STRING
        },

        voucherPrice: {
            type: DataTypes.STRING
        }
    } )

    return voucher;

}