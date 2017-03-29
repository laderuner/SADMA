function registerCarriers(){

  var firstname =  $('#firstname').val();
  var lastname  =  $('#lastname').val();
  var username  =  $('#username').val();
  var category  =  $('#category').val();
  var legalid   =  $('#legalid').val();
  var timestamp =  $('#timestamp').val();
  var taxid     =  $('#taxid').val();
  var timestamp =  $('#timestamp').val();
  var lock      =  $('#lock').val();
  var url       =  $('#url').val();

  var path = '/'firstname+
  '/'+lastname+
  '/'+username+
  '/'+category+
  '/'+legalid+
  '/'+timestamp+
  '/'+taxpayer+
  '/'+timestamp+
  '/'+lock+
  '/'+url;
  
  var urlApi ='http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createCarrier/'
 

       $.ajax({
                //data:  parametros,
                url:   urlApi,
                type:  'post',
                beforeSend: function () {
                        $("#resultado").html("");
                },
                success:  function (response) {
                        if(response.resultCode===0){
                    alert("Se ha enviado un correo a su dirección para restablecer su password")
                         }else{
                        alert(response.errorDes)
                        }
                }
        });

}
