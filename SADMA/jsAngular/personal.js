var app = angular.module("angularApp", []);
app.controller("angularControl", function ($scope, $http) {


			var resSucursales = $http.get("http://localhost:8080/personal");
             resSucursales.success(
                    function (status) {
                    $scope.personal = status;
                    $('#personalForm').find('div.form-group.form-md-line-input.form-md-floating-label.has-success').removeClass('form-md-floating-label');
										$('#tabPermisos').find('div.form-group.form-md-line-input.form-md-floating-label.has-success').removeClass('form-md-floating-label');
                    });
		// $('#tabPermisos').find('div.form-group.form-md-line-input.form-md-floating-label.has-success').removeClass('form-md-floating-label');
		var resPersonalList = $http.get("http://localhost:8080/personalList");
					 resPersonalList.success(
									function (status) {
									$scope.personalList = status;
									});
});
