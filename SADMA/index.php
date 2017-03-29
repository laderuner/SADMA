<!DOCTYPE html>
<!--
Template Name: Metronic - Responsive Admin Dashboard Template build with Twitter Bootstrap 3.3.5
Version: 4.5.2
Author: KeenThemes
Website: http://www.keenthemes.com/
Contact: support@keenthemes.com
Follow: www.twitter.com/keenthemes
Like: www.facebook.com/keenthemes
Purchase: http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes
License: You must have a valid license purchased only from themeforest(the above link) in order to legally use the theme for your project.
-->
<!--[if IE 8]> <html lang="en" class="ie8 no-js"> <![endif]-->
<!--[if IE 9]> <html lang="en" class="ie9 no-js"> <![endif]-->
<!--[if !IE]><!-->
<html lang="en">
    <!--<![endif]-->
    <!-- BEGIN HEAD -->

    <head>
        <meta charset="utf-8" />
        <title>S.A.D.M.A.A.</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="" name="description" />
        <meta content="" name="author" />
        <!-- BEGIN GLOBAL MANDATORY STYLES -->
        <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all" rel="stylesheet" type="text/css" />
        <link href="assets/global/plugins/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/global/plugins/simple-line-icons/simple-line-icons.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/global/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/global/plugins/uniform/css/uniform.default.css" rel="stylesheet" type="text/css" />
        <link href="assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css" rel="stylesheet" type="text/css" />

        <script data-pace-options='{ "ajax": false }' src="assets/global/plugins/pace/pace.min.js" type="text/javascript"></script>
         <!-- <link href="assets/global/plugins/pace/themes/pace-theme-flash.css" rel="stylesheet" type="text/css" /> -->
        <!-- END GLOBAL MANDATORY STYLES -->
        <!-- BEGIN PAGE LEVEL PLUGINS -->
        <!-- END PAGE LEVEL PLUGINS -->
        <!-- BEGIN THEME GLOBAL STYLES -->
        <link href="assets/global/css/components.min.css" rel="stylesheet" id="style_components" type="text/css" />
        <link href="assets/global/css/plugins.min.css" rel="stylesheet" type="text/css" />
        <!-- END THEME GLOBAL STYLES -->
        <!-- BEGIN THEME LAYOUT STYLES -->
        <link href="assets/layouts/layout/css/layout.min.css" rel="stylesheet" type="text/css" />
        <link href="assets/layouts/layout/css/themes/darkblue.min.css" rel="stylesheet" type="text/css" id="style_color" />
        <link href="assets/layouts/layout/css/custom.min.css" rel="stylesheet" type="text/css" />
        <!-- END THEME LAYOUT STYLES -->
        <link rel="shortcut icon" href="favicon.ico" /> </head>
    <!-- END HEAD -->

 <body class="page-header-fixed page-sidebar-closed-hide-logo page-content-white wysihtml5-supported" ng-app="angularApp" ng-controller="angularControl" id="blockui_sample_1_portlet_body">
        <!-- BEGIN HEADER -->
        <div class="page-header navbar navbar-fixed-top">
            <!-- BEGIN HEADER INNER -->
            <div class="page-header-inner ">
                <!-- BEGIN LOGO -->

                <!-- END LOGO -->
                <!-- BEGIN RESPONSIVE MENU TOGGLER -->
                <a href="javascript:;" class="menu-toggler responsive-toggler" data-toggle="collapse" data-target=".navbar-collapse"> </a>
                <!-- END RESPONSIVE MENU TOGGLER -->
                <!-- BEGIN TOP NAVIGATION MENU -->

                <!-- END TOP NAVIGATION MENU -->
            </div>
            <!-- END HEADER INNER -->
        </div>
        <!-- END HEADER -->
        <!-- BEGIN HEADER & CONTENT DIVIDER -->
        <div class="clearfix"> </div>
        <!-- END HEADER & CONTENT DIVIDER -->
        <!-- BEGIN CONTAINER -->
        <div class="page-container">
            <!-- BEGIN SIDEBAR -->
            <div class="page-sidebar-wrapper">
                <!-- BEGIN SIDEBAR -->
                <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                <!-- DOC: Change data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                <div class="page-sidebar navbar-collapse collapse">
                    <!-- BEGIN SIDEBAR MENU -->
                    <!-- DOC: Apply "page-sidebar-menu-light" class right after "page-sidebar-menu" to enable light sidebar menu style(without borders) -->
                    <!-- DOC: Apply "page-sidebar-menu-hover-submenu" class right after "page-sidebar-menu" to enable hoverable(hover vs accordion) sub menu mode -->
                    <!-- DOC: Apply "page-sidebar-menu-closed" class right after "page-sidebar-menu" to collapse("page-sidebar-closed" class must be applied to the body element) the sidebar sub menu mode -->
                    <!-- DOC: Set data-auto-scroll="false" to disable the sidebar from auto scrolling/focusing -->
                    <!-- DOC: Set data-keep-expand="true" to keep the submenues expanded -->
                    <!-- DOC: Set data-auto-speed="200" to adjust the sub menu slide up/down speed -->
                    <?php include 'menu.html';?>
                    <!-- END SIDEBAR MENU -->
                    <!-- END SIDEBAR MENU -->
                </div>
                <!-- END SIDEBAR -->
            </div>
            <!-- END SIDEBAR -->
            <!-- BEGIN CONTENT -->
            <div class="page-content-wrapper">
                <!-- BEGIN CONTENT BODY -->
                <div class="page-content" style="min-height:804px">
                    <!-- BEGIN PAGE HEADER-->
                    <!-- BEGIN THEME PANEL -->

                    <!-- END THEME PANEL -->
                    <!-- BEGIN PAGE BAR -->

                    <!-- END PAGE BAR -->
                    <!-- BEGIN PAGE TITLE-->

                    <!-- END PAGE TITLE-->
                    <!-- END PAGE HEADER-->
                    <div id="personal" style="display:none">
						<?php include 'personal.html';?>
                    </div>
                    <div id="controlHora" style="display:none">
						<?php include 'controlHora.html';?>
                    </div>

				</div>
                <!-- END CONTENT BODY -->
            </div>
            <!-- END CONTENT -->
            <!-- BEGIN QUICK SIDEBAR -->
            <a href="javascript:;" class="page-quick-sidebar-toggler">
                <i class="icon-login"></i>
            </a>

            <!-- END QUICK SIDEBAR -->
        </div>
        <!-- END CONTAINER -->
        <!-- BEGIN FOOTER -->
        <div class="page-footer">

            <div class="scroll-to-top" style="display: none;">
                <i class="icon-arrow-up"></i>
            </div>
        </div>
        <!-- END FOOTER -->
        <!--[if lt IE 9]>
<script src="assets/global/plugins/respond.min.js"></script>
<script src="assets/global/plugins/excanvas.min.js"></script>
<![endif]-->
        <!-- BEGIN CORE PLUGINS -->
        <script src="assets/global/plugins/jquery.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/js.cookie.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/bootstrap-hover-dropdown/bootstrap-hover-dropdown.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/jquery.blockui.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/uniform/jquery.uniform.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js" type="text/javascript"></script>
        <!-- END CORE PLUGINS -->
        <!-- BEGIN PAGE LEVEL PLUGINS -->
        <script src="assets/global/plugins/select2/js/select2.full.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/jquery-validation/js/jquery.validate.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/jquery-validation/js/additional-methods.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js" type="text/javascript"></script>
        <script src="assets/global/plugins/bootstrap-wysihtml5/wysihtml5-0.3.0.js" type="text/javascript"></script>
        <script src="assets/global/plugins/bootstrap-wysihtml5/bootstrap-wysihtml5.js" type="text/javascript"></script>
        <script src="assets/global/plugins/ckeditor/ckeditor.js" type="text/javascript"></script>
        <script src="assets/global/plugins/bootstrap-markdown/lib/markdown.js" type="text/javascript"></script>
        <script src="assets/global/plugins/bootstrap-markdown/js/bootstrap-markdown.js" type="text/javascript"></script>

        <script src="assets/global/plugins/bootbox/bootbox.min.js" type="text/javascript"></script>

        <script src="js/jquery.bootstrap-growl.js" type="text/javascript"></script>

        <!-- END PAGE LEVEL PLUGINS -->
        <!-- BEGIN THEME GLOBAL SCRIPTS -->
        <script src="assets/global/scripts/app.min.js" type="text/javascript"></script>
        <!-- END THEME GLOBAL SCRIPTS -->
        <!-- BEGIN PAGE LEVEL SCRIPTS -->
        <script src="assets/pages/scripts/form-validation.min.js" type="text/javascript"></script>

      <!--<script src="http://maps.google.com/maps/api/js?sensor=false" type="text/javascript"></script>-->
       <!--<script src="assets/global/plugins/gmaps/gmaps.min.js" type="text/javascript"></script>-->


        <!-- END PAGE LEVEL SCRIPTS -->
        <!-- BEGIN THEME LAYOUT SCRIPTS -->
        <script src="assets/layouts/layout/scripts/layout.min.js" type="text/javascript"></script>
        <script src="assets/layouts/layout/scripts/demo.min.js" type="text/javascript"></script>
        <script src="assets/layouts/global/scripts/quick-sidebar.min.js" type="text/javascript"></script>

        <script src="assets/pages/scripts/ui-blockui.js" type="text/javascript"></script>

        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.3.15/angular.min.js"></script>
        <script type="text/javascript" src="js/angularCustomers.js"></script>





        <script type="text/javascript" src="js/epo_register.js"></script>

        <!-- END THEME LAYOUT SCRIPTS -->

        <script src="js/ui-booDtbox.js" type="text/javascript"></script>

        <script>

		var token=321321321321321
    $( "#ControlHoras" ).hide();
		function showAddHoras(flag)
		{
      if( typeof(flag)!="undefined" )
			{
				if(flag)
				{
					$("#addHoras").show();
                    labelsCustomes(false);
                  }
				else
				{
					$("#addHoras").hide();
          labelsCustomes(true);
          $("#updateCustomerAddresses").hide();
        }
			}
			else
			{
				$("#addHoras").show();
                $("#addCustomerAddresses").show();
                $("#updateCustomerAddresses").hide();
                labelsCustomes(true);

			}
		}
		function showOrd(flag){

            if( typeof(flag)!="undefined" )
            {
                if(flag)
                {
                    $("#addOrd").show();


                }
                else
                {
                    //ESCONDE EL FORMULARIO "ITEMS DE LA ORDEN" Y LO RESETEA. BORRA TODO LOS VALORES Y AGREGA LA FUNCION "createOrderDetail()"
                    $("#addOrd").hide();
                    labelsOrders(true);

                    $("#registerOrders").show();
                    $("#updateOrder").hide();



                }
            }
            else
            {
                $("#addOrd").show();
                $("#updateOrder").hide();


            }

        }

		function showAddItem(flag)
		{
			if( typeof(flag)!="undefined" )
			{
				if(flag)
				{
					$("#addItemOrd").show();
                    $("#updateItmeOrders").hide();

				}
				else
				{
                    //ESCONDE EL FORMULARIO "ITEMS DE LA ORDEN" Y LO RESETEA. BORRA TODO LOS VALORES Y AGREGA LA FUNCION "createOrderDetail()"
					$("#addItemOrd").hide();

                    $("#addItmeOrders").show();
                    $("#updateItmeOrders").hide();

                    $("#labelDescription").show();
                    $("#labelQuantity").show();
                    $("#labelInsurance").show();
                    $("#labelPkgsizeid").show();
                    $("#labelPrice").show();

                    $("#itemDescription").val("");
                    $("#quantity").val("");
                    $("#insurance").val("");
                    $("#price").val("");
                    $("#pkgsizeid").val("");

				}
			}
			else
			{
				$("#addItemOrd").show();
                 $("#updateItmeOrders").hide();

			}
		}

        $(document).ready(function(){

            /**
            Código que aporta a la navegación dinamica
            **/

             //Mostrar Customer / Ocultar Orders
        $("#hidePersonal").click(function(){
				$("#personal").hide();});

        $("#showPersonal").click(function(){
				$("#controlHora").hide();
				$("#personal").show();


				$( "#optPersonal" ).addClass( "active" ).addClass( "open" );
				$( "#optControlHoras" ).removeClass( "active" ).removeClass( "open" );
				$( "#optOthers" ).removeClass( "active" ).removeClass( "open" );
        });

        //Mostrar Orders / Oculta Ordes
        $("#hideOrders").click(function(){
				$("#controlHora").hide();
            });

        $("#showControlHoras").click(function(){
				$("#personal").hide();
				$("#controlHora").show();

				$( "#optControlHoras" ).addClass( "active" ).addClass( "open" );
				$( "#optPersonal" ).removeClass( "active" ).removeClass( "open" );
				$( "#optOthers" ).removeClass( "active" ).removeClass( "open" );
         });

        $("#hidePersonal").click(function(){
				$("#personal").hide();});

        $("#tab_4").click(function(){
				// $("#orders").hide();
				$("#tab_4").show();});


			//------------------------------------------
			//
			//------------------------------------------
      $("#tabAcPersonal").click(function(){
				$("#tabPersonal").click();
			});

			$("#tabAcLibro").click(function(){
				$("#tabLibro").click();
			});

			$("#tabAcPermisos").click(function(){
				$("#tabPermisos").click();
			});
      $("#tabAcLegal").click(function(){
				$("#tabLegal").click();
			});
      $("#tabAcReportes").click(function(){
				$("#tabReportes").click();
			});


      $("#tabPersonal").click(function(){
        $( "#tabLibro" ).removeClass( "active" );
				$( "#tabPermisos" ).removeClass( "active" );
				$( "#tabLegal" ).removeClass( "active" );
        $( "#tabReportes" ).removeClass( "active" );
				$( "#tabPersonal" ).addClass( "active" );
            });

            // Muestra Tab tabLibro
            $("#tabLibro").click(function(){
        $( "#tabPersonal" ).removeClass( "active" );
				$( "#tabPermisos" ).removeClass( "active" );
				$( "#tabLegal" ).removeClass( "active" );
        $( "#tabReportes" ).removeClass( "active" );
				$( "#tabLibro" ).addClass( "active" );
            });

			// Muestra Tab tabPermisos
      $("#tabPermisos").click(function(){
  $( "#tabPersonal" ).removeClass( "active" );
  $( "#tabLibro" ).removeClass( "active" );
  $( "#tabLegal" ).removeClass( "active" );
  $( "#tabReportes" ).removeClass( "active" );
  $( "#tabPermisos" ).addClass( "active" );
      });

      $("#tabLegal").click(function(){
  $( "#tabPersonal" ).removeClass( "active" );
  $( "#tabLibro" ).removeClass( "active" );
  $( "#tabPermisos" ).removeClass( "active" );
  $( "#tabReportes" ).removeClass( "active" );
  $( "#tabLegal" ).addClass( "active" );
      });

      $("#tabReportes").click(function(){
    $( "#tabPersonal" ).removeClass( "active" );
    $( "#tabLibro" ).removeClass( "active" );
    $( "#tabPermisos" ).removeClass( "active" );
    $( "#tabLegal" ).removeClass( "active" );
    $( "#tabReportes" ).addClass( "active" );
      });
			//------------------------------------------
			// End -
			//------------------------------------------

            //MUESTRA TAB CREAR ORDENES
            $("#activeTabCreateOrders").click(function(){
				$( "#tabId01" ).removeClass( "active" );
				$( "#tabId02" ).removeClass( "active" );
				$( "#tabId03" ).removeClass( "active" );
				$( "#tabId04" ).removeClass( "active" );
				$( "#tabId05" ).removeClass( "active" );

				$( "#tabId00" ).addClass( "active" );
            });
            //MUESTRA TAB CREAR DETALLES DE ORDENES
            $("#activeTabOrderDetail").click(function(){
            $( "#tabId00" ).removeClass( "active" );
            $( "#tabId02" ).removeClass( "active" );
            $( "#tabId03" ).removeClass( "active" );
            $( "#tabId04" ).removeClass( "active" );
            $( "#tabId05" ).removeClass( "active" );

            $( "#tabId01" ).addClass( "active" );
            });
            //MUESTRA TAB CANCELA ORDENES
            $("#activeTabCancelOrder").click(function(){
            $( "#tabId00" ).removeClass( "active" );
            $( "#tabId01" ).removeClass( "active" );
            $( "#tabId03" ).removeClass( "active" );
            $( "#tabId04" ).removeClass( "active" );
            $( "#tabId05" ).removeClass( "active" );

            $( "#tabId02" ).addClass( "active" );
            });
            //MUESTRA TAB ELIMINAR ORDENES
            $("#activeTabDeleteOrder").click(function(){
            $( "#tabId00" ).removeClass( "active" );
            $( "#tabId01" ).removeClass( "active" );
            $( "#tabId02" ).removeClass( "active" );
            $( "#tabId03" ).removeClass( "active" );
            $( "#tabId04" ).removeClass( "active" );

            $( "#tabId03" ).addClass( "active" );
            });
            //MUESTRA TAB CONSULTAS ORDENES
            $("#activeTabQueryOrders").click(function(){
            $( "#tabId00" ).removeClass( "active" );
            $( "#tabId01" ).removeClass( "active" );
            $( "#tabId02" ).removeClass( "active" );
            $( "#tabId03" ).removeClass( "active" );
            $( "#tabId05" ).removeClass( "active" );

            $( "#tabId04" ).addClass( "active" );
            });
            //MUESTRA TAB CONSULTAS DETALLES ORDENES
            $("#activeTabQueryOrderDetail").click(function(){
            $( "#tabId01" ).removeClass( "active" );
            $( "#tabId02" ).removeClass( "active" );
            $( "#tabId03" ).removeClass( "active" );
            $( "#tabId04" ).removeClass( "active" );
            $( "#tabId00" ).removeClass( "active" );

            $( "#tabId05" ).addClass( "active" );
            });


            });
        </script>

        <script>

        $(document).ready(function(){


    $(".textos1").click(function(){

    var idi = $(".textos",this).val();
        alert('Evento click '+idi);
    });
});
        </script>








</body>

</html>
