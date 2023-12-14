function Validation ( values )
{
    let error = {};

    if ( values.username == "" )
    {
        error.username = "enter username";
    }

    if ( values.password == "" )
    {
        error.password = "enter password"
    }

    return error;
}

export default Validation;