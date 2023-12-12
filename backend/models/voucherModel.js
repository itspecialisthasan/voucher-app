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
            type: DataTypes.INTEGER
        },
        narration: {
            type: DataTypes.STRING
        },
        voucherType: {
            type: DataTypes.STRING
        },
        voucherAccount: {
            type: DataTypes.STRING
        },
        voucherPrice: {
            type: DataTypes.INTEGER
        }
    } )

    return voucher;

}