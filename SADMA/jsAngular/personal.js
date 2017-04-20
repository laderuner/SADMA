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
		var resLibroVuelo = $http.get("http://localhost:8080/libroVuelo");
												 resLibroVuelo.success(
																function (status) {
																$scope.libroHoras = status;
																$('#tabLibroHoras').find('div.form-group.form-md-line-input.form-md-floating-label.has-success').removeClass('form-md-floating-label');
															});
		var resLibroHorasList = $http.get("http://localhost:8080/libroHoraList");
															resLibroHorasList.success(
																	function (status) {
																	$scope.libroHorasList = status;

															});
    var resLibroVueloList = $http.get("http://localhost:8080/libroVueloList");
																												resLibroVueloList.success(
																														function (status) {
																														$scope.libroVueloList = status;

					});
					var resLibroVuelo = $http.get("http://localhost:8080/libroVuelo");
																															resLibroVuelo.success(
																																	function (status) {
																																	$scope.libroVueloList = status;

								});
	var resMaterialAeronautic = $http.get("http://localhost:8080/materialAeronautic");
											resMaterialAeronautic.success(
											function (status) {
											$scope.materialAeronautic = status;
											$('#tabMaterial').find('div.form-group.form-md-line-input.form-md-floating-label.has-success').removeClass('form-md-floating-label');
										});
var resHorasMaterial = $http.get("http://localhost:8080/HorasMaterial");
														resHorasMaterial.success(
														function (status) {
														$scope.HorasMaterial = status;
														$('#tabHorasMaterial').find('div.form-group.form-md-line-input.form-md-floating-label.has-success').removeClass('form-md-floating-label');
													});
var resMaterialAeronauticList = $http.get("http://localhost:8080/materialAeronauticList");
										resMaterialAeronauticList.success(
										function (status) {
										$scope.materialAeronauticList = status;

		});
});
