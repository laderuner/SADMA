var app = angular.module("angularApp", []);
    app.controller("angularControl", function ($scope, $http) {

        $scope.registerOrders = function () {

            try{


                 var date                  = $('#date').val();

                var amount                = $('#amount').val();
                var tax                   = $('#tax').val();
                var total                 = $('#total').val();
                var comments              = $('#comments').val();

                var latfrom               = $('#latfrom').val();
                var lngfrom               = $('#lngfrom').val();
                var latto                 = $('#latto').val();
                var lngto                 = $('#lngto').val();
                var packagesquantity      = $('#packagesquantity').val();
                var address               = $('#address').val();
                var addressnumber         = $('#addressnumber').val();
                var reference             = $('#reference').val();

var path ='token/'+token+
          '/date/'+date+

          '/amount/'+amount+
          '/tax/'+tax+
          '/total/'+total+
          '/comments/'+comments+

          '/latfrom/'+latfrom+
          '/lngfrom/'+lngfrom+
          '/latto/'+latto+
          '/lngto/'+lngto+
          '/packagesquantity/'+packagesquantity+
          '/address/'+address+
          '/number/'+addressnumber+
          '/reference/'+reference;

var urlApi ='http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createOrder/'+path;

            $scope.url="http://localhost:8080/successful";

            var res= $http.post($scope.url)
            res.success(
                function (status) {
                
                if(status.resultCode===0){
                  
                    $scope.orders={};

                     loadEffect("La orden se ha creado correctamente");   
                     
                }else{
                    
                     loadEffect("Ha ocurrido un error al crear la orden"); 
                    $scope.orders={};
            }               
            });
           
            }
            catch(err) {
              console.log(err);
           }             
        };

       
        
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

function loadEffect(message){
     App.blockUI({
                target: '#blockui_sample_1_portlet_body',
                animate: true
            });

            window.setTimeout(function() {
                App.unblockUI('#blockui_sample_1_portlet_body');
            }, 2000);

            UIBootstrapGrowl(message, 2000)
}
