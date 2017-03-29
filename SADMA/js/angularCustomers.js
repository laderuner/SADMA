var app = angular.module("angularApp", []);
app.controller("angularControl", function ($scope, $http) {
  //VARIABLES GLOBALES
  var idCustomers;

  var idOrders;
  var itemOrders;
  var location

    // CAMBIA PASSWORD

    $scope.changePassword = function () {

        try {
            var password = $('#password').val();
            var newPassword = $('#newPassword').val();
            var repeatPassword = $('#repeatPassword').val();

            var data = "/" + password + "/" + newPassword + "/" + repeatPassword;

            var messageOK = "La contraseña se ha cambiado correctamente";
            var messageError = "Ha ocurrido un error al cambiar la contraseña";

            $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
            $scope.password = {};



        }
        catch (err) {
            console.log("Exceptions changePassword(): " +err);
        }
    };

    //REGISTRO DE CLIENTES  

    $scope.registerCustomer = function () {

        try {

            var username = $('#username').val();
            var password = $('#password').val();
            var email = $('#email').val();
            var name = $('#name').val();
            var contact = $('#contact').val();
            var phone = $('#phone').val();
            var legalid = $('#legalid').val();
            var taxid = $('#taxid').val();
            var facebookid = $('#facebookid').val();
            var twitter = $('#twitter').val();
            var whatsapp = $('#whatsapp').val();
            var legalstreetaddress = $('#legalstreetaddress').val();
            var legalstreetnumberaddress = $('#legalstreetnumberaddress').val();
            var isshipper = document.getElementById("radio1").checked;
            var iscarrier = document.getElementById("radio2").checked;

            var path = 'token/' + token +
                    '/username/' + username +
                    '/password/' + password +
                    '/email/' + email +
                    '/name/' + name +
                    '/contact/' + contact +
                    '/phone/' + phone +
                    '/legalid/' + legalid +
                    '/taxid/' + taxid +
                    '/facebookid/' + facebookid +
                    '/twitter/' + twitter +
                    '/whatsapp/' + whatsapp +
                    '/legalstreetaddress/' + legalstreetaddress +
                    '/legalstreetnumberaddress/' + legalstreetnumberaddress +
                    '/isshipper/' + isshipper +
                    '/iscarrier/' + isshipper;

            var urlApi = 'http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createCustomer/' + path;

            var messageOK = "El cliente se han guardado correctamente";
            var messageError = "Ha ocurrido un error al guardar el cliente";

            $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
            $scope.customers = {};
        }
        catch (err) {
            console.log("Exceptions registerCustomer(): " +err);
        }
    };

    //REGISTRO DE DIRECCIONES

    $scope.registerCustomerAddresses = function () {

        try {

            var description = $('#description').val();
            var street = $('#street').val();
            var number = $('#number').val();
            var locationid = $('#locationid').val();
            var phone1 = $('#phone1').val();
            var phone2 = $('#phone2').val();
            var latitude = $('#latitude').val();
            var longitude = $('#longitude').val();
            var defaultaddress = $('#defaultaddress').val();
            var priority = $('#priority').val();


            var path = 'token/' + token +
                    '/description/' + description +
                    '/street/' + street +
                    '/number/' + number +
                    '/locationid/' + locationid +
                    '/phone1/' + phone1 +
                    '/phone2/' + phone2 +
                    '/latitude/' + latitude +
                    '/longitude/' + longitude +
                    '/defaultaddress/' + defaultaddress +
                    '/priority/' + priority;

            var urlApi = 'http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createCarrierAddresses/' + path;

            var messageOK = "El dirección ha sido agregada correctamente";
            var messageError = "Ha ocurrido un error al agregar la dirección";

            $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
            $scope.addresses = {};
        }
        catch (err) {
            console.log("Exceptions registerCustomerAddresses(): " +err);
        }
    };

   $scope.loadFormCustomerAddresses  = function(carrieraddressid,description,street,number,locationid,phone1,phone2,latitude,longitude,defaultaddress,priority){
      try {
        showAddDir(); 
      }catch(err){
        console.log("Exceptions: " +err);
      }
    };
    $scope.deleteCustomerAddresses = function(id){
    try{
    
    var path="token/"+token+"/customerid/"+id;
    var urlApi= 'http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/deleteCustomerAddresses/' + path;

    var messageOK = "La dirección ha sido Eliminada";
    var messageError = "La dirección no pudo ser Eliminada";

  
                bootbox.confirm("¿Desea realmente eliminar esta dirección?", function(result) {
                  
                  if (result===true) {
                   $scope.deleteFunction("http://localhost:8089/successful", messageOK, messageError);
                  }else{
                   loadEffect("Se ha cancelado la operación");
                  };

                }); 
    
  }catch(err){
    console.log("Exceptions deleteCustomerAddresses(): " +err);
  } 
};
    //REGISTRAR ORDENES

    $scope.registerOrders = function () {

        try {


            var date = $('#date').val();

            var amount = $('#amount').val();
            var tax = $('#tax').val();
            var total = $('#total').val();
            var comments = $('#comments').val();

            var latfrom = $('#latfrom').val();
            var lngfrom = $('#lngfrom').val();
            var latto = $('#latto').val();
            var lngto = $('#lngto').val();
            var packagesquantity = $('#packagesquantity').val();
            var address = $('#address').val();
            var addressnumber = $('#addressnumber').val();
            var reference = $('#reference').val();

            var path = 'token/' + token +
                    '/date/' + date +
                    '/amount/' + amount +
                    '/tax/' + tax +
                    '/total/' + total +
                    '/comments/' + comments +
                    '/latfrom/' + latfrom +
                    '/lngfrom/' + lngfrom +
                    '/latto/' + latto +
                    '/lngto/' + lngto +
                    '/packagesquantity/' + packagesquantity +
                    '/address/' + address +
                    '/number/' + addressnumber +
                    '/reference/' + reference;

            var urlApi = 'http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createOrder/' + path;

            var messageOK = "La orden se ha creado correctamente";
            var messageError = "Ha ocurrido un error al crear la orden";

            $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
            $scope.orders = {};

        }
        catch (err) {
            console.log("Exceptions registerOrders(): " +err);
        }
    };

    //REGISTRO DE DETALLE DE ORDENES 

    $scope.createOrderDetail = function () {

        try {
            var itemDescription = $("#itemDescription").val();
            var itemQuantity = $scope.orders.quantity;
            var itemInsurance = $scope.orders.insurance;
            var itemPrice = $scope.orders.price;
            var pkgsizeid = $scope.orders.pkgsizeid


            var path = 'token/' + token +
                    '/description/' + itemDescription +
                    '/quantity/' + itemQuantity +
                    '/insurance/' + itemInsurance +
                    '/price/' + itemPrice +
                    '/pkgsizeid/' + pkgsizeid;


            var urlApi = 'http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createOrderDetail/' + path;

            var messageOK = "La orden se ha creado correctamente";
            var messageError = "Ha ocurrido un error al crear la orden";

            $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
            $scope.orders = {};

        }
        catch (err) {
           console.log("Exceptions createOrderDetail(): " +err);
        }
    };

    $scope.cancelOrder = function () {

        try {
            var ordernumber = $scope.orders.ordernumber;
            var reason = $scope.orders.reason;
            var reasonid = $scope.orders.reasonid;

            var path = 'token/' + token +
                    '/ordernumber/' + ordernumber +
                    '/rason/' + reason +
                    '/rasonid/' + reasonid;

            urlApi = 'http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/cancelOrder/' + path;

            var messageOK = "La Orden ha sido cancelada";
            var messageError = "La Orden no pudo ser cancelada";


            $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
            $scope.orders = {};
        }
        catch (err) {
           console.log("Exceptions cancelOrder(): " +err);
        }
   };

   $scope.updateOrderDetail = function(){
    try{

      var description=$("#itemDescription").val();
      var quantity=$("#quantity").val();
      var insurance=$("#insurance").val();
      var price=$("#price").val();
      var pkgsizeid=$("#pkgsizeid").val();

        var path = 'token/' + token +
                    '/ordernumber/' + idOrders +
                    '/item/'+ itemOrders +
                    '/description/' + description +
                    '/quantity/' + quantity +
                    '/insurance/' + insurance +
                    '/price/' + price +
                    '/pkgsizeid/' + price;

            var messageOK = "El Item ha sido acutualizado correctamente";
            var messageError = "El Item no pudo ser acutualizado";        
                   
            var urlApi = 'http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createOrderDetail/' + path;
            $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
            $scope.orders = {};
            showAddItem(false);

    }catch(err){
      console.log("Exceptions updateOrderDetail(): " +err);
    }

   };
   //ACTUALIZA ORDENES
   $scope.updateOrder=function(){
            var date = $('#date').val();
            var amount = $('#amount').val();
            var tax = $('#tax').val();
            var total = $('#total').val();
            var comments = $('#comments').val();
            var latfrom = $('#latfrom').val();
            var lngfrom = $('#lngfrom').val();
            var latto = $('#latto').val();
            var lngto = $('#lngto').val();
            var packagesquantity = $('#packagesquantity').val();
            var address = $('#address').val();
            var addressnumber = $('#addressnumber').val();
            var reference = $('#reference').val();

            var path = 'token/' + token +
                        'ordernumber' + idOrders +
                    '/date/' + date +
                    '/amount/' + amount +
                    '/tax/' + tax +
                    '/total/' + total +
                    '/comments/' + comments +
                    '/latfrom/' + latfrom +
                    '/lngfrom/' + lngfrom +
                    '/latto/' + latto +
                    '/lngto/' + lngto +
                    '/packagesquantity/' + packagesquantity +
                    '/address/' + address +
                    '/number/' + addressnumber +
                    'locationid' + location +
                    '/reference/' + reference;

                     var messageOK = "La Orden ha sido acutualizada correctamente";
            var messageError = "La Orden no pudo ser acutualizada";    

      var urlApi="http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/updateOrder/" + path;
      $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
            $scope.orders = {};
            showOrd(false);


   };
   $scope.updateCustomerAddresses=function(){

      try{


            var description = $('#description').val();
            var street = $('#street').val();
            var number = $('#number').val();
            var locationid = $('#locationid').val();
            var phone1 = $('#phone1').val();
            var phone2 = $('#phone2').val();
            var latitude = $('#latitude').val();
            var longitude = $('#longitude').val();
            var defaultaddress = $('#defaultaddress').val();
            var priority = $('#priority').val();

      var path = "token/" + token +
                  "/carrieraddressid/" + idCustomers + 
                  "/description/" + description +
                  "/street/" + street +
                  "/number/" + number +
                  "/locationid/" + locationid +
                  "/phone1/" + phone1 +
                  "/phone2/" + phone2 +
                  "/latitude/" + latitude +
                  "/longitude/" + longitude +
                  "/defaultaddress/" + defaultaddress +
                  "/priority/" + priority ; 

            var messageOK = "La dirección ha sido acutualizada correctamente";
            var messageError = "El dirección no pudo ser acutualizada";    

      var urlApi="http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/updateCustomerAddresses/" + path;
      $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
            $scope.orders = {};
            showAddDir(false);

      }catch(err){
        console.log("Exceptions updateCustomerAddresses(): " +err);
      }

   };


   //CARGA EL FORMULARIO "ITEMS DE LA ORDEN" "
   $scope.loadFormOrderDetail = function(id,item,description,quantity,insurance,price,pkgsizeid){
  try{
      showAddItem();
      $("#labelDescription").hide();
      $("#labelQuantity").hide();
      $("#labelInsurance").hide();
      $("#labelPkgsizeid").hide();
      $("#labelPrice").hide();
      $("#addItmeOrders").hide();
      $("#updateItmeOrders").show();
     
      idOrders=id;
      itemOrders=item;
      $("#itemDescription").val(description);
      $("#quantity").val(quantity);
      $("#insurance").val(insurance);
      $("#price").val(price);
      $("#pkgsizeid").val(pkgsizeid);

    }catch(err){
      console.log("Exceptions loadFormOrderDetail(): " +err);
    }
};

/**
// CARGA FORMULARIO Direcciones de clientes 
**/
$scope.loadFormCustomerAddresses = function(id,description,street,number,floor,floorid,locationid,loc_id,phone1,phone2,lat,longitud,default_address,priority){
   
    labelsCustomes(false);

  showAddDir(true);

  $("#addCustomerAddresses").hide();
  $("#updateCustomerAddresses").show();

  if (default_address==="1") {
    $("#defaultaddress").prop("checked", "checked");
  }else{
    $("#defaultaddress").prop("checked", "");
  };
  idCustomers=null;
  idCustomers=id;

  $("#description").val(description);
  $("#street").val(street);
  $("#number").val(number);
  $("#floor").val(floor);
  $("#floorid").val(floorid);
  $("#locationid").val(locationid);
  $("#locid").val(loc_id);
  $("#phone1").val(phone1);
  $("#phone2").val(phone2);
  $("#latitude").val(lat);
  $("#longitude").val(longitud);
 
  $("#priority").val(priority);
 

};


/**
// CARGA FORMULARIO ORDENES
**/
$scope.loadFormOrder=function(number,date,amount,tax,total,comments,priorityid,latfrom,lngfrom,latto,lngto,packagesquantity,reference,street,number,locationid){

  labelsOrders(false);
  showOrd(true);
  $("#registerOrders").hide();
  $("#updateOrder").show();

  idOrders=null;
  idOrders=number;
  location=locationid;

  $("#amount").val(amount);
  $("#tax").val(tax);
  $("#total").val(total);
  $("#comments").val(comments);
  $("#latfrom").val(latfrom);
  $("#lngfrom").val(lngfrom);
  $("#latto").val(latto);
  $("#lngto").val(lngto);
  $("#packagesquantity").val(packagesquantity);
  $("#address").val(street);
  $("#addressnumber").val(number);
  $("#reference").val(reference);


}
   $scope.deleteOrder = function (ordernumber) {
    try{
     //var ordernumber = $scope.orders.ordernumber;
     var path="token/"+token+"/ordernumber/"+ordernumber;
     urlApi = 'http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/deleteOrder/' + path;

     var messageOK = "La Orden ha sido Eliminada";
     var messageError = "La Orden no pudo ser Eliminada";

      bootbox.confirm("¿Desea realmente eliminar esta Orden?", function(result) {
                  
                  if (result===true) {
                   $scope.setPost("http://localhost:8089/successful", messageOK, messageError);
                  }else{
                   loadEffect("Se ha cancelado la operación");
                  };

                }); 

     $scope.orders = {};
     }catch(err){
      console.log("Exceptions: " +err);
     }

   };

   $scope.queryOrder = function(){

    try{
    var ordernumber=$scope.orders.ordernumber;
    var path="token/"+token+"/ordernumber/"+ordernumber;
    var urlApi= 'http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/queryOrder/' + path;

    var messageOK = "Aguarde mientras procesamos su pedido";
     var messageError = "No hemos podido procesar su consulta";

    try{
        $scope.url = "http://localhost:8089/queryOrders";

        var res = $http.post($scope.url)
        res.success(
                function (status) {
                    $scope.status=status;
                    if (status.resultCode === 0) { 
                                  
                        loadEffect(messageOK);
                         $( "#ShowOrders" ).show();
                        
                    } else {
                        loadEffect(messageError); 
                         $( "#ShowOrders" ).hide();                     
                    }

                }).error(function () {
            loadEffect("Ha ocurrido un error inesperado");
        });
      }catch(err){
        console.log("Exceptions Post queryOrder(): " +err);
      }

    }catch(err){
      console.log("Exceptions queryOrder(): " +err);
    }    
   };

    $scope.deleteFunction = function(urlApi,messageOK,messageError){
    try{                                  
                   $scope.setPost(urlApi, messageOK, messageError);

        }catch(err){
            console.log("Exceptions deleteFunction(): " +err);
          } 
        };

    //FUNCIÓN PARA MANEJAR LOS POST ...

    $scope.setPost = function (urlApi, messageOK, messageError) {

        try{
        $scope.url = urlApi

        var res = $http.post($scope.url)
        res.success(
                function (status) {
                  
                    if (status.resultCode === 0) { 
                                  
                        loadEffect(messageOK);
                         
                        
                    } else {
                        loadEffect(messageError);                    
                    }

                }).error(function () {
            loadEffect("Ha ocurrido un error inesperado");
        });
      }catch(err){
        console.log("Exceptions setPost(): " +err);
      }
    };

    //MUESTRA TABLAS 

    $http.get("http://localhost:8089/customers").then(function (response) {
        $scope.listCustomers = response.data;
    });

    $http.get("http://localhost:8089/orders").then(function (response) {
        $scope.listItemOrders = response.data;
    });
     $http.get("http://localhost:8089/OrdersList").then(function (response) {
        $scope.listOrders = response.data;
    });
    
});


/* CONFICURACÓN PARA MUESTRA MENSAJE AL FINALIZAR EL POST */

function UIBootstrapGrowl(message, second) {
    $.bootstrapGrowl(message, {
        ele: 'body', // which element to append to
        type: 'info', // (null, 'info', 'danger', 'success')
        offset: {from: 'top', amount: 20}, // 'top', or 'bottom'
        align: 'center', // ('left', 'right', or 'center')
        width: 450, // (integer, or 'auto')
        delay: second, // Time while the message will be displayed. It's not equivalent to the *demo* timeOut!
        allow_dismiss: true, // If true then will display a cross to close the popup.
        stackup_spacing: 10 // spacing between consecutively stacked growls.
    });
}

function loadEffect(message) {
    App.blockUI({
        target: '#blockui_sample_1_portlet_body',
        animate: true
    });

    window.setTimeout(function () {
        App.unblockUI('#blockui_sample_1_portlet_body');
    }, 2000);

    UIBootstrapGrowl(message, 2000)
}
function labelsCustomes(flag){

  if (flag===true) {

    $("#labelDescription").show();
    $("#labelStreet").show();
    $("#labelNumber").show();
    $("#labelFloor").show();
    $("#labelFloorid").show();
    $("#labelLocationid").show();
    $("#labelLocid").show();
    $("#labelPhone1").show();
    $("#labelPhone2").show();
    $("#labelLatitude").show();
    $("#labelLongitude").show();
    $("#labelPriority").show();

     $("#defaultaddress").prop("checked", "");

    $("#description").val("");
  $("#street").val("");
  $("#number").val("");
  $("#floor").val("");
  $("#floorid").val("");
  $("#locationid").val("");
  $("#locid").val("");
  $("#phone1").val("");
  $("#phone2").val("");
  $("#latitude").val("");
  $("#longitude").val("");
 
  $("#priority").val("");

  }else{

  $("#labelDescription").hide();
    $("#labelStreet").hide();
    $("#labelNumber").hide();
    $("#labelFloor").hide();
    $("#labelFloorid").hide();
    $("#labelLocationid").hide();
    $("#labelLocid").hide();
    $("#labelPhone1").hide();
    $("#labelPhone2").hide();
    $("#labelLatitude").hide();
    $("#labelLongitude").hide();
    $("#labelPriority").hide();
  };
}
function labelsOrders(flag){

  if (flag===true){
  $("#labelAmount").show();
  $("#labelTax").show();
  $("#labelTotal").show();
  $("#labelComments").show();
  $("#labelLatfrom").show();
  $("#labelLngfrom").show();
  $("#labelLatto").show();
  $("#labelLngto").show();
  $("#labelPackagesquantity").show();
  $("#labelAddress").show();
  $("#labelAddressnumber").show();
  $("#labelReference").show();

  $("#amount").val("");
  $("#tax").val("");
  $("#total").val("");
  $("#comments").val("");
  $("#latfrom").val("");
  $("#lngfrom").val("");
  $("#latto").val("");
  $("#lngto").val("");
  $("#packagesquantity").val("");
  $("#address").val("");
  $("#addressnumber").val("");
  $("#reference").val("");

  }else{
    $("#labelAmount").hide();
  $("#labelTax").hide();
  $("#labelTotal").hide();
  $("#labelComments").hide();
  $("#labelLatfrom").hide();
  $("#labelLngfrom").hide();
  $("#labelLatto").hide();
  $("#labelLngto").hide();
  $("#labelPackagesquantity").hide();
  $("#labelAddress").hide();
  $("#labelAddressnumber").hide();
  $("#labelReference").hide();
  };

  
}