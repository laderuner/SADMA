/*
 * LandaEcomm v2.0 - Helper functions
 * Copyright (c) 2015 Juarez Gustavo
 *
 */

 //Validate email addres
function validateEmail( email )
{
    expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if ( !expr.test(email) )
	{
        return false;
	}
	
	return true;
}