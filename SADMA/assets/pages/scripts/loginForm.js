/*
 *Toma los datos de los formularios Login, Reset Password y Registro de usuario para enviarlos a través de un post 
 */
var app = angular.module('myApp', ['myApp.services']);

app.controller('MainCtrl', ['$scope', 'servicePost',
    function ($scope, servicePost) {
        $scope.user = {};
//Función para el Registro de Usuarios        
        $scope.signUp = function () {
            var signUp = {};
            signUp = $scope.user;

            //servicePost.signUp(signUp,urlPost);
        };
//Función para iniciar sesión
        $scope.signIn = function () {
            var signIn = {};
            signIn = $scope.user;

            //servicePost.signUp(signUp,urlPost);
        };
//Función para reset Password        
        $scope.resetPassword = function () {
            var resetPassword = {};
            resetPassword = $scope.user;

            //servicePost.signUp(signUp,urlPost);
        };

    }]);

//Función para enviar el post de los datos ingresados en los formularios.
var svc = angular.module('myApp.services', ['ngResource']);

svc.factory('servicePost', ['$resource', function ($resource, urlPost) {

        return $resource('', null, {
            signIn: {method: 'POST',
                url: urlPost,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        });
    }
]);