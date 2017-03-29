/*
 * LandaEcomm v2.0 - Ajax functionality. Centralize ajax actions (like a layer)
 * Copyright (c) 2015 Juarez Gustavo
 *
 * Description:
 * 	- Centralize ajax requests
 *	- Get ajax response
 *	- Triguer alert on callback ajax error
 */

//Get result from ajax response
function getRows_callback(ajaxResponse, textStatus)  
{
	try  
	{
		if( this.processCallback )
		{
			var result = processResponse(ajaxResponse);  
		}
		else
		{
			var result = ajaxResponse;
		}

		if( result!= null && typeof(result)!= "undefined" && 
			typeof(result.sExpirada) != "undefined" 
		)
		{
			login_callback(true);
		}
		else
		{
			if( this.fn )
			{
				//var fnC = eval(fn);
				
				this.fn(result, this.params);
			}
		}
		return true;
	}
	catch(ex)
	{
		alert(ex.description);
		return false;
	}
}

//Called on ajax error
function callback_error(XMLHttpRequest, textStatus, errorThrown)  
{
	alert(errorThrown);
}

//?
function processResponse(ajaxResponse)  
{   
	var response;  
	try 
	{ 
		eval( 'response=' + ajaxResponse ); 
	} 
	catch(ex) 
	{ 
		response = null; 
	}

	return response;
}

//Send ajax request
function sendRequest(params,url,fnCallBackParams)
{  
	try  
	{
		var dataSend = "";
		var fn = "";
		var paramsCallback = "";

		//Prepare request params
		if(	typeof(params) != "undefined" && 
			typeof(params) == "object"
		)
		{
			var paramCount = params.length;
			
			if( paramCount > 0 )
			{
				dataSend = [];
				
				for(var i=0;i<paramCount;i++)
				{
					var pName = params[i][0];
					var pValue = params[i][1];
					var newParam = { paramName:pName, paramValue:pValue };
					dataSend.push(newParam);
				}
			}
		}
		
		var fnBeforeDummy = function(){};
		var fnBeforeSend = fnBeforeDummy;
		
		//Prepare callback params
		if(	typeof(fnCallBackParams) != "undefined")
		{
			fn = fnCallBackParams[0];
			
			if(	typeof(fnCallBackParams[1]) != "undefined" &&
				typeof(fnCallBackParams[1]) != "boolean"
			)
			{
				paramCount = fnCallBackParams[1].length;

				if( paramCount > 0 )
				{
					paramsCallback = "";
				
					for(var i=0;i<paramCount;i++)
					{
						if(paramsCallback=="")
						{
							paramsCallback = fnCallBackParams[i][0] + "," + fnCallBackParams[i][1];
						}
						else
						{
							paramsCallback = paramsCallback + ";" + fnCallBackParams[i][0] + "," + fnCallBackParams[i][1];
						}
					}
				}
			}
			
			if(	typeof(fnCallBackParams[2]) != "undefined" &&
				typeof(fnCallBackParams[3]) != "boolean"
			)
			{
				fnBeforeSend = fnCallBackParams[2];
			}
		}

		jQuery.support.cors = true;
		$.support.cors = true;
		//Access-Control-Allow-Origin: http://mozilla.com

		$.ajax(
			{  
				 crossDomain: true
				, type		: "post"
				, dataType  : 'html'
				//, dataType  : 'jsonp'
				, url		: url
				, data		: dataSend
				, context	: { "processCallback" : true, "fn": fn, "params": paramsCallback}
				, error		: callback_error
				, success	: getRows_callback
				, beforeSend: fnBeforeSend
				
			});
	}
	catch(ex)
	{
		alert(ex.description);
	}
}



