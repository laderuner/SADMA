 var app = angular.module('app', []);

            MainCtrl.$inject=['$scope','$http'];
            function MainCtrl($scope,$http){

              var config={
                method:"GET", 
                url:"http://larecta.ddns.net/sitioLaRecta/epostin/site_epostin/api/resources/v_1_0/shipper/loginShipper/help/"
              }  
              var promise=$http(config);
              promise.then(function(response){  
                  $scope.issues=response.data;
              },function(response) {
                  alert("Fallo la petición:" + response.status);
              })
            }
            app.controller('MainCtrl',MainCtrl);