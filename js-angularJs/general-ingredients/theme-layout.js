upload.controller('HiddenCaroselController', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {


        // $cookies.remove('display_carousel');
        var thamso_carousel = "hidden-carousel";
        // setting thời gian hết hạn của cookies 
        var expdate = new Date();
        expdate.setDate(expdate.getDate() + 2000000);
        // put cookies
        $cookies.put("display_carousel", thamso_carousel, { expires: expdate });
        $rootScope.cookies_display_carousel = $cookies.get('display_carousel');


    }) //End controller
upload.controller('ShowCaroselController', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {



        $cookies.remove('display_carousel');

        $rootScope.cookies_display_carousel = '';


    }) //End controller
upload.controller('ThemeLayoutController', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {






        // $('.setting_carousel').addClass('hidden-carousel');


        $rootScope.scroll_top = function() {
            $('.load').css("display", "block");
            var header = $('.load');

            setTimeout(function() {
                header.fadeOut('slow');
            }, 700);
            $('body,html').animate({
                scrollTop: 0
            }, 0);



        }






        // setting thời gian hết hạn của cookies   
        var expdate = new Date();
        expdate.setDate(expdate.getDate() + 2000000);
        // remove cookies
        $scope.ClearCookies = function() {
            $cookies.remove('color');
            $cookies.remove('layout');
        }



        //A.----------------------------------------------------------------Cookies selected color theme
        $scope.select_carousel = function(theme_carousel) {
            $cookies.put("carousel", theme_carousel, { expires: expdate });
            $scope.cookies_carousel = $cookies.get('carousel');
            $('.load').css("display", "block");
            var header = $('.load');

            setTimeout(function() {
                header.fadeOut('slow');
            }, 700);
            var Title = "Success";
            var Message = "Cập nhật carousel thành công !";
            var Type = "success";
            $scope.HQToast(Title, Message, Type);

        }


        //A.01 : Set theme-color



        if ($cookies.get('carousel') == null) {
            $scope.cookies_carousel = 'carousel-animate-basic';
            $scope.theme_carousel = 'carousel-animate-basic';
        } else {
            $scope.cookies_carousel = $cookies.get('carousel');
            $scope.theme_carousel = $cookies.get('carousel');
        }
        // //A.----------------------------------------------------------------Cookies selected color theme
        // $scope.select_color_theme = function(theme_color) {
        //     $cookies.put("color", theme_color, { expires: expdate });
        //     $scope.cookies_color = $cookies.get('color');
        // }


        // //A.01 : Set theme-color



        // if ($cookies.get('color') == null) {
        //     $scope.cookies_color = 'theme-dark';
        //     $scope.theme_color = 'theme-dark';
        // } else {
        //     $scope.cookies_color = $cookies.get('color');
        //     $scope.theme_color = $cookies.get('color');
        // }


        //B.----------------------------------------------------------------Cookies selected layout theme
        $scope.select_layout = function(theme_layout) {

            $cookies.put("layout", theme_layout, { expires: expdate });
            $scope.cookies_layout = $cookies.get('layout');
            // location.reload();
            $('.load').css("display", "block");
            var header = $('.load');

            setTimeout(function() {
                header.fadeOut('slow');
            }, 700);
            var Title = "Success";
            var Message = "Cập nhật layout thành công !";
            var Type = "success";
            $scope.HQToast(Title, Message, Type);
        }

        //B.01 : Set theme-layout


        if ($cookies.get('layout') == null) {
            $scope.cookies_layout = 'layout_center';
            $scope.theme_layout = 'layout_center';
        } else {
            $scope.cookies_layout = $cookies.get('layout');
            $scope.theme_layout = $cookies.get('layout');


        }



        // //C.----------------------------------------------------------------Cookies selected color package
        // $scope.select_color_package = function(color_package) {
        //         $cookies.put("color_package", color_package, { expires: expdate });
        //         $scope.cookies_color_package = $cookies.get('color_package');
        //     }
        //     //C.01 : Set theme-color

        // if ($cookies.get('color_package') == null) {
        //     $scope.cookies_color_package = 'color_package_no1';
        //     $scope.color_package = 'color_package_no1';
        // } else {
        //     $scope.cookies_color_package = $cookies.get('color_package');
        //     $scope.color_package = $cookies.get('color_package');
        // }



        $scope.get_date = function(data_test, data_test_2) {
            alert(data_test);
            alert(data_test_2);
        }



    }) //End controller