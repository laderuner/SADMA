/*
 * LandaEcomm v2.0 - General functionality
 * Copyright (c) 2015 Juarez Gustavo
 *
 * Description:
 * 	- Ready jQuery
 *	- Set main events
 *	- Map actions with controller's url
 */

//**************************************
// 
//**************************************
//Define acctions list
function defineAcctionList()
{
	//Add your acctions here
	GLOBAL_ACCTIONS_LST = [];

	//new entry
	var acction = "sendMessage";
	GLOBAL_ACCTIONS_LST.push(acction);
}

//Map functions with accions
function getAcctionName(fnName)
{
	var acction = false;
	
	switch(fnName)
	{
		case "setContactForm":
		{
			acction = "sendMessage";
		}
		break;
		
		case "sendLoginForm":
		{
			acction = "sendLoginInfo";
		}
		break;
		
		default:
		{
			acction = false;
		}
		break;
	}

	return acction;
}
//**************************************
 
//------------------------------------------//
// 			Formulario de Contacto 			//
//------------------------------------------//
var fnContactFormError = function()
{
	$( "#" + fieldName ).val();
	
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
};
 
function setContactForm()
{
	//Set form definition
	var frmInfo = new Array(GLOBAL_FORM_LAST);
	
	var frmName = "mainFrmContact";
	var acction = getAcctionName("setContactForm");
	var flagValidation = true;
	var frmFields = [];
	var fnErrorHandler = fnContactFormError;
	frmFields.push([GLOBAL_FIELD_TYPE_STRING,"msj_name",	"Nombre", true,true,false,[[GLOBAL_FIELD_VAL_PARAM_NOT_NULL]]]);
	frmFields.push([GLOBAL_FIELD_TYPE_STRING,"msj_tel",		"Tel&eacute;fono", true]);
	frmFields.push([GLOBAL_FIELD_TYPE_STRING,"msj_email",	"Email", true,true,false,[[GLOBAL_FIELD_VAL_PARAM_NOT_NULL],[GLOBAL_FIELD_VAL_PARAM_EMAIL]]]);
	frmFields.push([GLOBAL_FIELD_TYPE_STRING,"msj_comment",	"Comentario", true,true,false,[[GLOBAL_FIELD_VAL_PARAM_NOT_NULL]]]);

	frmInfo[GLOBAL_FORM_NAME] 			 = frmName;
	frmInfo[GLOBAL_FORM_ACTION] 		 = acction;
	frmInfo[GLOBAL_FORM_VALIDATION_FLAG] = flagValidation;
	frmInfo[GLOBAL_FORM_FIELDS] 		 = frmFields;
	frmInfo[GLOBAL_FORM_FN_HANDLE_ERROR] = fnErrorHandler;

	//Set event
	$( "#sendMessageContact" ).click(function(item)
	{
		submitForm("mainFrmContact",getAcctionName("setContactForm"));
	});

	return frmInfo;
}
//------------------------------------------//
// 		  FIN Formulario de Contacto   	    //
//------------------------------------------//

//------------------------------------------//
// 			Formulario de Login 			//
//------------------------------------------//
var fnLoginFormError = function()
{
	$( "#" + fieldName ).val();
	
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
};

var redirectLoginForm = function(userName)
{
	window.location="http://www.landaweb.local.com.ar/site_epostin/site/francisco_05012016/LandaWareLogin/?userName="+userName;
};

var fnCallbackLoginForm = function(resultado,params)
{
	try
	{
		cleanToken();
		
		if( typeof(resultado)!="undefined" &&
			typeof(resultado.resultCode)!="undefined" &&
			resultado.resultCode == 0 &&
			typeof(resultado.token)!="undefined" &&
			resultado.token!=""
		)
		{
			saveToken(resultado.token);
			var redirecSeconds = 5;
			var msj = " " + "Bienvenido: " + resultado.user + "<br/> Será redireccionado en: " + redirecSeconds + " segundos";
			
			App.alert({
				container: "#bootstrap_alerts_demo", // alerts parent container(by default placed after the page breadcrumbs)
				place: "append", // append or prepent in container 
				type: "success",  // alert's type
				message: msj,  // alert's message
				close: 1, // make alert closable
				reset: 1, // close all previouse alerts first
				focus: 1, // auto scroll to the alert after shown
				closeInSeconds: redirecSeconds, // auto close after defined seconds
				icon: "user", // put icon before the message
				fnAfterClose: redirectLoginForm,
				fnAfterCloseParams: resultado.user
			});
		}
		else
		{
			var errorDes = "<N>";
			if( typeof(resultado.errorDes)!="undefined")
			{
				errorDes = resultado.errorDes;
			}
			
			App.alert({
				container: "#bootstrap_alerts_demo", // alerts parent container(by default placed after the page breadcrumbs)
				place: "append", // append or prepent in container 
				type: "warning",  // alert's type
				message: " " + errorDes,  // alert's message
				close: 1, // make alert closable
				reset: 1, // close all previouse alerts first
				focus: 1, // auto scroll to the alert after shown
				closeInSeconds: 0, // auto close after defined seconds
				icon: "warning" // put icon before the message
			});
		}
	}
	catch(ex)
	{
		alert(ex.description);
		//console.log(ex.description);
	}
	
};

var fnGetURLlogin = function(paramsObj)
{
	//console.log(paramsObj);
	var userName = getFormParam(paramsObj,"username");
	var userPass = getFormParam(paramsObj,"password");
	
	var data = "userName/"+userName+"/userPass/"+userPass;
	
	//var url = "http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/getlogin/"+data;
	var url = "http://www.landaweb.local.com.ar/site_epostin/api/resources/v_1_0/shipper/getlogin/"+data;
	
	return url;
};

function setLoginForm()
{
	//Set form definition
	var frmInfo = new Array(GLOBAL_FORM_LAST);
	
	var frmName = "mainFrmLogin";
	var acction = getAcctionName("sendLoginForm");
	var flagValidation = true;
	var frmFields = [];
	var fnErrorHandler = fnContactFormError;
	frmFields.push([GLOBAL_FIELD_TYPE_STRING,"username",	"Usuario / Email", 	true,true,false,[[GLOBAL_FIELD_VAL_PARAM_NOT_NULL]]]);
	frmFields.push([GLOBAL_FIELD_TYPE_STRING,"password",	"Clave", 			true,true,false,[[GLOBAL_FIELD_VAL_PARAM_NOT_NULL]]]);

	frmInfo[GLOBAL_FORM_NAME] 			 = frmName;
	frmInfo[GLOBAL_FORM_ACTION] 		 = acction;
	frmInfo[GLOBAL_FORM_VALIDATION_FLAG] = flagValidation;
	frmInfo[GLOBAL_FORM_FIELDS] 		 = frmFields;
	frmInfo[GLOBAL_FORM_FN_HANDLE_ERROR] = fnLoginFormError;
	frmInfo[GLOBAL_FORM_FN_HANDLE_CALLBACK]= fnCallbackLoginForm;
	frmInfo[GLOBAL_FORM_SEND_PARAMS]	 = false;
	frmInfo[GLOBAL_FORM_URL_API]	 	 = fnGetURLlogin;
	

	//Set event
	$( "#sendLogin" ).click(function(item)
	{
		submitForm("mainFrmLogin",getAcctionName("sendLoginForm"));
	});

	return frmInfo;
}
//------------------------------------------//
// 		  FIN Formulario de Contacto   	    //
//------------------------------------------//


