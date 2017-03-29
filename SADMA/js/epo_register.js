var token=321;
function registerCustomer(){

var  token;                               
var  username                   = $('#username').val();
var  password                   = $('#password').val();
var  email                      = $('#email').val();
var  name                       = $('#name').val();
var  contact                    = $('#contact').val();
var  phone                      = $('#phone').val();
var  legalid                    = $('#legalid').val();
var  taxid                      = $('#taxid').val();
var  facebookid                 = $('#facebookid').val();
var  twitter                    = $('#twitter').val();
var  whatsapp                   = $('#whatsapp').val();
var  legalstreetaddress         = $('#legalstreetaddress').val();
var  legalstreetnumberaddress   = $('#legalstreetnumberaddress').val();
var  isshipper                  = document.getElementById("radio1").checked;
var  iscarrier                  = document.getElementById("radio2").checked;

try {
var path =    'token/'+token+
              '/username/'+username+
              '/password/'+password+
              '/email/'+email+
              '/name/'+name+
              '/contact/'+contact+
              '/phone/'+phone+
              '/legalid/'+legalid+
              '/taxid/'+taxid+
              '/facebookid/'+facebookid+
              '/twitter/'+twitter+
              '/whatsapp/'+whatsapp+
              '/legalstreetaddress/'+legalstreetaddress+
              '/legalstreetnumberaddress/'+legalstreetnumberaddress+
              '/isshipper/'+isshipper+
              '/iscarrier/'+isshipper;
  
  var urlApi ='http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createCustomer/'+path;
  


  registerAjax(urlApi);
  }
 catch(err) {
console.log(err);
}
 
}

function registerCustomerAddresses(){

var  token;                               
var  description      = $('#description').val();
var  street           = $('#street').val();
var  number           = $('#number').val();
var  locationid       = $('#locationid').val();
var  phone1           = $('#phone1').val();
var  phone2           = $('#phone2').val();
var  latitude         = $('#latitude').val();
var  longitude        = $('#longitude').val();
var  defaultaddress   = $('#defaultaddress').val();
var  priority         = $('#priority').val();

try {
var path =    'token/'+token+
              '/description/'+description+
              '/street/'+street+
              '/number/'+number+
              '/locationid/'+locationid+
              '/phone1/'+phone1+
              '/phone2/'+phone2+
              '/latitude/'+latitude+
              '/longitude/'+longitude+
              '/defaultaddress/'+defaultaddress+
              '/priority/'+priority;
  
  var urlApi ='http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createCarrierAddresses/'+path;


  registerAjax(urlApi);
  }
 catch(err) {
console.log(err);
}
}

function updateCustomer(){

var  token;                               
var  name                       = $('#name').val();
var  contact                    = $('#contact').val();
var  phone                      = $('#phone').val();
var  legalid                    = $('#legalid').val();
var  taxid                      = $('#taxid').val();
var  facebookid                 = $('#facebookid').val();
var  twitter                    = $('#twitter').val();
var  whatsapp                   = $('#whatsapp').val();
var  legalstreetaddress         = $('#legalstreetaddress').val();
var  legalstreetnumberaddress   = $('#legalstreetnumberaddress').val();
var  isshipper                  = document.getElementById("radio1").checked;
var  iscarrier                  = document.getElementById("radio2").checked;

try {
var path =    'token/'+token+
              '/name/'+name+
              '/contact/'+contact+
              '/phone/'+phone+
              '/legalid/'+legalid+
              '/taxid/'+taxid+
              '/facebookid/'+facebookid+
              '/twitter/'+twitter+
              '/whatsapp/'+whatsapp+
              '/legalstreetaddress/'+legalstreetaddress+
              '/legalstreetnumberaddress/'+legalstreetnumberaddress+
              '/isshipper/'+isshipper+
              '/iscarrier/'+isshipper;
  
  var urlApi ='http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/createCustomer/'+path;

  registerAjax(urlApi);
  }
 catch(err) {
console.log(err);
}
 
}

function registerOrders(){



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
registerAjax(urlApi);


  }
function registerAjax(urlApi){

  
       $.ajax({
                //data:  parametros,
                url:   urlApi,
                type:  'post',                
                success:  function (response) {
                        if(response.resultCode===0){
                    // console.log("ok");
                         }else{
                        // console.log(response.errorDes);
                        }
                }
        });

}
