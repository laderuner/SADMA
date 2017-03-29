function registershippers(){

  var name =  $('#name').val();
  var contact  =  $('#contact').val();
  var legalid  =  $('#legalid').val();
  var taxid  =  $('#taxid').val();
  var phone   =  $('#phone').val();
  var facebook =  $('#facebook').val();
  var twitter     =  $('#twitter').val();
  var rate =  $('#rate').val();
  var counter      =  $('#counter').val();
  var totalpoints      =  $('#counter').val();
  var legalstreetaddress       =  $('#legalstreetaddress').val();
  var legalstreetnumberaddress       =  $('#legalstreetnumberaddress').val();



  var urlApi ='';

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
