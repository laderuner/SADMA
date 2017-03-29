/*
 * LandaEcomm v2.0 - Main javascript functionality
 * Copyright (c) 2015 Juarez Gustavo
 *
 * Description:
 * 	- Ready jQuery
 *	- Set main events
 *	- Map actions with controller's url
 *  - User validation: login, security, session
 *	- Set forms definitions
 * 	- Submit form: validate and send to server
 */

// Start
$(document).ready(function(){

	//Set plugins
	loadPlugins();
	
	//Set forms
	setForms();
	
	//Set events
	setMainEvents();
});

//Set plugins on ready
function loadPlugins()
{
	//set pluguins here
}

//Set events on ready
function setMainEvents()
{
	
}

//Set form info
function setForms()
{
	//---------------------------------------------------------------------------------------
	// Add your form definitios here. Push into GLOBAL_FORMS array
	// To add new form definitios, just push new array:
	// 0: form name
	// 1: form action
	// 2: form validation needed flag. Values: true|false
	// 3: form fields
	//		- 0: field type. Type values:	0-Number|1-String|2-boolean|3-List
	//										GLOBAL_FIELD_TYPE_NUMBER = 0;
	//										GLOBAL_FIELD_TYPE_STRING = 1;
	//										GLOBAL_FIELD_TYPE_BOOLEAN = 2;
	//										GLOBAL_FIELD_TYPE_LIST = 3;
	//		- 1: field name
	//		- 2: field validation flag. Values: true|false
	//		- 3: field validation function. Default function: true|false
	//		- 4: field validation special function. Asociated to validation function
	//		- 5: field validation params. Params:
	//												0: Type Validation
	//													- Not null or empty
	//													- Min length
	//													- Max length
	//													- Between
	//													- Email
	//												1-n:Extra params needed
	//													Params of validation associated
	//		- 6: field list values. Used on list fields
	//		- 7: field list values function. To get value list from a function.
	// 4: form fn handler error
	// 5: form callback function
	// 6: form callback params
	// 7: form send params flag
	//---------------------------------------------------------------------------------------
	var GLOBAL_FORM_FN_HANDLE_CALLBACK = 5;
	var GLOBAL_FORM_FN_CALLBACK_PARAMS = 6;
	var GLOBAL_FORM_SEND_PARAMS = 7;
	
	
	
	GLOBAL_FORMS = [];
	
	//Add "Contact" form
	//result = setContactForm();

	//Add "Login" form
	addForm("setLoginForm");
}

//Add form to global array GLOBAL_FORMS
function addForm(fnName)
{
	var fn = eval(fnName);
	result = fn();
	
	var formOptions =[];
	for(i=0;i<GLOBAL_FORM_LAST;i++)
	{
		formOptions.push(result[i]);
	}

	GLOBAL_FORMS.push( formOptions );
	
	/*GLOBAL_FORMS.push([	 result[GLOBAL_FORM_NAME]
						,result[GLOBAL_FORM_ACTION]
						,result[GLOBAL_FORM_VALIDATION_FLAG]
						,result[GLOBAL_FORM_FIELDS]
						,result[GLOBAL_FORM_FN_HANDLE_ERROR]
						,result[GLOBAL_FORM_FN_HANDLE_CALLBACK]
						,result[GLOBAL_FORM_FN_CALLBACK_PARAMS]
						,result[GLOBAL_FORM_SEND_PARAMS]
						,result[GLOBAL_FORM_URL_API]
					]);*/
}


//Submit form
function submitForm(formName,acctionName,extra)
{
	if(typeof(extra)=="undefined")
	{
		extra = null;
	}
	
	var formInfo = getFormInfo(formName);
	
	if( formInfo )
	{
		var continue_=true;
		
		if( formInfo[GLOBAL_FORM_VALIDATION_FLAG] === true )
		{
			GLOBAL_FROM_VAL_ERROR_RESULT = [];
			continue_ = validateForm(formInfo,false,acctionName);
		}
		
		if( continue_ )
		{
			var params 	  = getFormParams(formInfo[GLOBAL_FORM_FIELDS],formInfo[GLOBAL_FORM_ACTION]);
			var paramsObj = getFormParamsAsObject(formInfo[GLOBAL_FORM_FIELDS],formInfo[GLOBAL_FORM_ACTION]);

			if( params!==false )
			{
				var url;
				
				if( typeof(formInfo[GLOBAL_FORM_URL_API])!="undefined" )
				{
					url = formInfo[GLOBAL_FORM_URL_API](paramsObj);
				}
				else
				{
					url = getUrl(formInfo[GLOBAL_FORM_ACTION],params,paramsObj);
				}
				
				if( url!==false )
				{
					
					if( typeof(formInfo[GLOBAL_FORM_SEND_PARAMS])!="undefined" && 
						formInfo[GLOBAL_FORM_SEND_PARAMS]===false
					)
					{
						params = "";
					}
					
					var requestInfo = [];
					requestInfo[0] = false;
					requestInfo[1] = false;
					requestInfo[2] = false;

					if( typeof(formInfo[GLOBAL_FORM_FN_HANDLE_CALLBACK])!="undefined" )
					{
						
						requestInfo[0] = formInfo[GLOBAL_FORM_FN_HANDLE_CALLBACK];

						if( typeof(formInfo[GLOBAL_FORM_FN_CALLBACK_PARAMS])!="undefined" )
						{
							requestInfo[1] = formInfo[GLOBAL_FORM_FN_CALLBACK_PARAMS];
						}
						
						if( typeof(formInfo[GLOBAL_FORM_FN_BEFORE_SUBMIT])!="undefined" )
						{
							requestInfo[2] = formInfo[GLOBAL_FORM_FN_BEFORE_SUBMIT];
						}
					}

					sendRequest(params,url,requestInfo);
				}
				else
				{
					showError(formInfo);
				}
			}
		}
		else
		{
			showError(formInfo);
		}
	}
	else
	{
		//Error: form no encontrado
	}
}

//Get form config info
function getFormInfo(formName)
{
	var formsCount = GLOBAL_FORMS.length;

	if( formsCount > 0 )
	{
		for(var i=0;i<formsCount;i++)
		{
			//var GLOBAL_FORM_NAME = 0;
			//var GLOBAL_FORM_ACTION = 1;
			//var GLOBAL_FORM_VALIDATION_FLAG = 2;
			//var GLOBAL_FORM_FIELDS = 3;
		
			if( GLOBAL_FORMS[i][GLOBAL_FORM_NAME] == formName)
			{
				return GLOBAL_FORMS[i];
			}
		}
	}

	return false;
}

//Get form values as string
function getFormParams(fildsLst,acction)
{
	try
	{
		var fieldsCount = fildsLst.length;

		var output = "";
		
		
		output = "?action=" + acction;
		
		
		var value=null;
		var fieldName = null;
		
		if( fieldsCount > 0 )
		{
			for(var i=0;i<fieldsCount;i++)
			{
				/*
					var GLOBAL_FIELD_INF_TYPE = 0;
					var GLOBAL_FIELD_INF_NAME = 1;
					var GLOBAL_FIELD_INF_VAL_FLAG = 2;
					var GLOBAL_FIELD_INF_VAL_FN_DEF = 3;
					var GLOBAL_FIELD_INF_VAL_FN_ESP = 4;
					var GLOBAL_FIELD_INF_VAL_PARAMS = 5;
					var GLOBAL_FIELD_INF_LST = 6;
					var GLOBAL_FIELD_INF_LST_FN = 7;
				*/
				fieldName = fildsLst[i][GLOBAL_FIELD_INF_NAME];
			
				value = $( "#" + fieldName ).val();
			
				if( output == "" )
				{
					output = fieldName + "=" + value;
				}
				else
				{
					output = output + "&" + fieldName + "=" + value;
				}
			}
		}

		return output;
	}
	catch(ex)
	{
		alert(ex.description);
		return false;
	}
}

//Get form values as array
function getFormParamsAsObject(fildsLst,acction)
{
	try
	{
		var fieldsCount = fildsLst.length;

		var output = [];

		output.push(["action", acction]);
		
		
		
		var value=null;
		var fieldName = null;
		
		if( fieldsCount > 0 )
		{
			for(var i=0;i<fieldsCount;i++)
			{
				/*
					var GLOBAL_FIELD_INF_TYPE = 0;
					var GLOBAL_FIELD_INF_NAME = 1;
					var GLOBAL_FIELD_INF_VAL_FLAG = 2;
					var GLOBAL_FIELD_INF_VAL_FN_DEF = 3;
					var GLOBAL_FIELD_INF_VAL_FN_ESP = 4;
					var GLOBAL_FIELD_INF_VAL_PARAMS = 5;
					var GLOBAL_FIELD_INF_LST = 6;
					var GLOBAL_FIELD_INF_LST_FN = 7;
				*/
				fieldName = fildsLst[i][GLOBAL_FIELD_INF_NAME];
			
				value = $( "#" + fieldName ).val();
			
				output.push([fieldName, value]);
			}
		}

		return output;
	}
	catch(ex)
	{
		alert(ex.description);
		return false;
	}
}

//Get param value from an array
function getFormParam(paramObj,paramToSearch)
{
	try
	{
		for(var i=0;i<paramObj.length;i++)
		{
			if( paramObj[i][0] == paramToSearch )
			{
				return paramObj[i][1];
			}
		}

		return null;
	}
	catch(ex)
	{
		alert(ex.description);
		return false;
	}
}

//Validate form before submiit
function validateForm(formInfo,formName,acctionName)
{
	try
	{
		if( typeof(formName)!= "undefined" && 
			typeof(formName)!= null &&
			formName!=false
		)
		{
			formInfo = getFormInfo(formName);
		}
		
		var fildsLst = formInfo[GLOBAL_FORM_FIELDS];
		
		var fieldsCount = fildsLst.length;

		var value=null;
		var type=null;
		var fieldName = null;
		var fieldNamedisplay = null;
		var valParams=false;
		var continue_=true;
		var param=null;
		var continueInternal_=true;

		if( fieldsCount > 0 )
		{
			for(var i=0; i<fieldsCount && (continue_||continueInternal_);i++)
			{
				value = null;
				
				if( fildsLst[i][GLOBAL_FIELD_INF_VAL_FLAG] == true )
				{
					fieldName = fildsLst[i][GLOBAL_FIELD_INF_NAME];
					fieldNamedisplay = fildsLst[i][GLOBAL_FIELD_INF_NAME_DISPLAY];

					readFieldFlag=true;
					try
					{
						value = $( "#" + fieldName ).val();
					}
					catch(ex)
					{
						readFieldFlag=false;
					}

					if( typeof(value)== "undefined" ){ value = null; }

					if( readFieldFlag )
					{
						type = fildsLst[i][GLOBAL_FIELD_INF_TYPE];
						valParams=false;

						if( fildsLst[i][GLOBAL_FIELD_INF_VAL_FN_DEF] == true )
						{
							if( typeof(fildsLst[i][GLOBAL_FIELD_INF_VAL_PARAMS])!= "undefined" &&
								typeof(fildsLst[i][GLOBAL_FIELD_INF_VAL_PARAMS])!= null
							)
							{
								valParams = fildsLst[i][GLOBAL_FIELD_INF_VAL_PARAMS];
								
								//for(var j=0,t=valParams.length;j<t&&continueInternal_;j++)
								for(var j=0,t=valParams.length;j<t;j++)
								{
									param = valParams[j];

									continue_ = defaultValidation(value,type,param,acctionName,fieldName,fieldNamedisplay);
									
									if( !continue_ && GLOBAL_FORMS_EXIT_ON_ERROR )
									{
										continueInternal_=false;
									}
								}
							}
							else
							{
								//Error de configuracion
							}
						}
						else if( fildsLst[i][GLOBAL_FIELD_INF_VAL_FN_ESP] == true )
						{
							var fn = eval(fildsLst[i][GLOBAL_FIELD_INF_VAL_FN_ESP]);
							continue_=fn(value,type);
							
							if( !continue_ && GLOBAL_FORMS_EXIT_ON_ERROR )
							{
								continueInternal_=false;
							}
						}
					}
					else
					{
						//Error de sistema
					}
				}

			}
		}

		if( continue_ )
		{
			return true;
		}
		
		return false;
	}
	catch(ex)
	{
		alert(ex.description);
		return false;
	}
}

//Apply default validation
function defaultValidation(value,type,params,acctionName,fieldName,fieldNamedisplay)
{
	var result = true;
	
	if( typeof(params)== "undefined" ||
		typeof(params)== null ||
		typeof(params)== false
	)
	{
		params = false;
	}

	if( params )
	{
		/*
			var GLOBAL_FIELD_VAL_PARAM_MIN_LENGTH = 0;
			var GLOBAL_FIELD_VAL_PARAM_MAX_LENGTH = 1;
			var GLOBAL_FIELD_VAL_PARAM_BETWEEN = 2;
			var GLOBAL_FIELD_VAL_PARAM_EMAIL = 3;
			var GLOBAL_FIELD_VAL_PARAM_NOT_IS_NUMBER = 4;
			var GLOBAL_FIELD_VAL_PARAM_NOT_NULL = 5;
		*/

		switch( params[0] )
		{
			case GLOBAL_FIELD_VAL_PARAM_NOT_NULL:
			{
				//Not null/empty
				resultado = (typeof(value)=="undefined"||value==null||value.length<=0?true:false);
				if( resultado )
				{
					saveError(GLOBAL_FIELD_VAL_CODE_EMPTY,acctionName,false,fieldName,fieldNamedisplay);
					result = false;
				}
			}
			break;
			/*
				var GLOBAL_FIELD_VAL_CODE_EMAIL=0;//INVALID EMAIL
				var GLOBAL_FIELD_VAL_CODE_EMPTY=1;//EMPTY VALUE
			*/
			
			case GLOBAL_FIELD_VAL_PARAM_EMAIL:
			{
				//Validate Email
				resultado = validateEmail(value);
				if(!resultado)
				{
					saveError(GLOBAL_FIELD_VAL_CODE_EMAIL,acctionName,false,fieldName,fieldNamedisplay);
					result = false;
				}
			}
			break;

			case GLOBAL_FIELD_VAL_PARAM_MIN_LENGTH:
			{
				//Validate string length (min)
				if( GLOBAL_FIELD_TYPE_STRING )
				{
					var minL = params[1];
					resultado = (value.length<minL?true:false);

					if(resultado)
					{
						saveError(GLOBAL_FIELD_VAL_PARAM_MIN_LENGTH,acctionName,false,fieldName,fieldNamedisplay);
						result = false;
					}
				}
			}
			break;

			case GLOBAL_FIELD_VAL_PARAM_MAX_LENGTH:
			{
				//Validate string length (min)
				if( GLOBAL_FIELD_TYPE_STRING )
				{
					var maxL = params[1];
					resultado = (value.length>maxL?true:false);

					if(resultado)
					{
						saveError(GLOBAL_FIELD_VAL_PARAM_MAX_LENGTH,acctionName,false,fieldName,fieldNamedisplay);
						result = false;
					}
				}
			}
			break;

			case GLOBAL_FIELD_VAL_PARAM_BETWEEN:
			{
				//Validate string length (min)
				if( GLOBAL_FIELD_TYPE_STRING )
				{
					var minV = params[1];
					var maxV = params[2];
					resultado = (value<minV||value>maxV?true:false);

					if(resultado)
					{
						saveError(GLOBAL_FIELD_VAL_PARAM_BETWEEN,acctionName,false,fieldName,fieldNamedisplay);
						result = false;
					}
				}
			}
			break;
		}
	}
	else
	{
		/*
			Validar tipo: typeof
			"number"	Operand is a number
			"string"	Operand is a string
			"boolean"	Operand is a Boolean
			"object"	Operand is an object
			null		Operand is null.
			"undefined"	Operand is not defined.
		*/
		switch( type )
		{
			case GLOBAL_FIELD_TYPE_NUMBER:
			{
				if(typeof(value)!="number")
				{
					saveError(GLOBAL_FIELD_VAL_CODE_NOT_IS_A_NUMBER,acctionName,false,fieldName,fieldNamedisplay);
					result = false;
				}
			}
			break;
			
			case GLOBAL_FIELD_TYPE_STRING:
			{
				//dummy
			}
			break;
			
			case GLOBAL_FIELD_TYPE_BOOLEAN:
			{
				//dummy
			}
			break;
			
			case GLOBAL_FIELD_TYPE_LIST:
			{
				//dummy
			}
			break;
		}
	}
	
	return result;
}

//Get new error row info
function saveError(errorType,acction,errorDesc,fieldName,fieldNamedisplay)
{	
	if(	typeof(errorDesc) == "undefined" ||
		typeof(errorDesc) == null ||
		errorDesc == false
	)
	{
		errorDesc = getErrorDesc(acction,errorType,fieldName);
	}
	
	var errorInfo = [errorType,acction,errorDesc,fieldName,fieldNamedisplay];
	
	GLOBAL_FROM_VAL_ERROR_RESULT.push(errorInfo);
}

//Get error description. Map validation type-error desc
function getErrorDesc(acction,errorType,fieldName)
{
	var errorDesc = "";
	
	switch( errorType )
	{
		case GLOBAL_FIELD_VAL_CODE_EMPTY:
		{
			errorDesc = "Debe insertar un valor.";
		}
		break;
		
		case GLOBAL_FIELD_VAL_CODE_EMAIL:
		{
			errorDesc = "El email ingresado es inv&aacute;lido";
		}
		break;
		
		/*case GLOBAL_FIELD_VAL_CODE_NOT_IS_A_NUMBER:
		{
			errorDesc = "El valor ingresado debe ser un n&uacute;mero";
		}
		break;*/

		default:
		{
			//dummy
		}
		break;
	}
	
	return 	errorDesc;
}


//Display error alert
function showError(formInfo)
{
	try
	{
		if( typeof(formInfo[GLOBAL_FORM_FN_HANDLE_ERROR])!="undefined" )
		{
			try
			{
				fn = formInfo[GLOBAL_FORM_FN_HANDLE_ERROR];
				fn();
			}
			catch(ex)
			{
				alert(ex.description);
			}
		}
		else
		{
			var fieldsCount = GLOBAL_FROM_VAL_ERROR_RESULT.length;

			if( fieldsCount > 0 )
			{
				var msg="";
				var errorMsg = "";
				var errorField = "";
				for(var i=0; i<fieldsCount;i++)
				{
					errorMsg = GLOBAL_FROM_VAL_ERROR_RESULT[i][2];
					errorField = GLOBAL_FROM_VAL_ERROR_RESULT[i][4];
					msg = "Se produjo un error en el campo: " + errorField + "\n";
					msg = msg + " Descripción: " + errorMsg;
				
					alert(msg);
					
					msg = "";
					errorMsg = "";
					errorField = "";
				}
			}
		}
	}
	catch(ex)
	{
		alert(ex.description);
		return false;
	}
}

//Get node value from any browser
function getNodeValue(item,index,indexIE)
{
	//var idCategoria = item.currentTarget.attributes[0].nodeValue;
	//-----------------------------------------------------------
	//Fix by IE
	//-----------------------------------------------------------
	/*var value = node[0].childNodes[k].firstChild.wholeText;
	if( typeof(value)=='undefined' || value==null || value=='' )
	{
		value = node[0].childNodes[k].firstChild.nodeValue;
	}*/
	var value = null;

	try
	{
		try
		{
			//value = item.attributes[index].wholeText;
			//-----------------------------------------------------------
			//Fix by IE
			//-----------------------------------------------------------
			var totAtributes = item.attributes.length;
			
			for(var i=0;i<totAtributes;i++)
			{
				nN = item.attributes[i].nodeName;
				if( nN.toLowerCase() == indexIE.toLowerCase() )
				{
					value = item.attributes[i].nodeValue;
					//alert('categoria seleccionada ['+value+']');
					break;
				}
			}
		}
		catch(ex)
		{
			//dummy
		}
		
		if( typeof(value)=='undefined' || value==null || value=='' )
		{
			value = item.attributes[index].nodeValue;
		}

	}
	catch(ex)
	{
		//dummy
	}

	//-----------------------------------------------------------

	return value;
}

//Return url associated to an acction
// >>Before: Define acction list
function getUrl(action,params,paramsObj)
{
	var url = false;
	
	if(typeof(params)==null || params==null)
	{
		params = "";
	}
	
	switch(action)
	{
		case "sendMessage":
		{
			url = "controllers/ctrAcctionsRequest.php";
		}
		break;
		
		case "sendLoginInfo":
		{
			//console.log(paramsObj);
			var userName = getFormParam(paramsObj,"username");
			var userPass = getFormParam(paramsObj,"password");
			var data = "userName/"+userName+"/userPass/"+userPass;
            url = "http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/getlogin/"+data;
		}
		break;
		
		default:
		{
			url = false;
		}
		break;
	}

	return url;
}

//Redirect to login site
function login_callback(response)
{
	var params = "?";

	if( response != null)
	{
		if(typeof(response.success)!="undefined" && response.success!=true)
		{
			alert(response.msg);
			return true;
		}
		else if(typeof(response)!="undefined" && response==true)
		{
			params = params + "sE=true";
		}
	}
	else
	{
		params = "";
	}
	
	$(location).attr('href','login.php'+params);
}


//Clean access token
function cleanToken()
{
	GLOBAL_ACCESS_TOKEN = false;
}

//Save access token
function saveToken(token)
{
	GLOBAL_ACCESS_TOKEN = token;
}

//Get access token
function getToken()
{
	return GLOBAL_ACCESS_TOKEN;
}
