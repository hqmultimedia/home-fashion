upload.controller('Load_Data_Controller', function($rootScope, $scope, $http, $location, $cookies, $routeParams) {



        //01. Setting source 

        $rootScope.optionsModelTheme = {

            value_selected: '2'
        };


        // C-02.Set giá trị nhận vào đầu tiên của option

        $rootScope.optionsModelQuantity = {
            Page: 1,
            PageSize: '8'

        };
        // Set giá trị cho đầu ra của setting view data(ko xoá)
        $rootScope.optionsModelDisplay = {

            hienthi: ''
        };

        $rootScope.onChangePageSize = function(page_data) {

                $scope.DataBeginByPage = 0;
                var Title = "Success";
                var Message = "Cập nhật thành công !";
                var Type = "success";
                $scope.HQToast(Title, Message, Type);

                $scope.getDataPagination(page_data);

            }
            //01. End setting source


        $rootScope.getDataPagination_heart = function(page_data, page_function, option_value) {
                // code chỉnh sửa theo yêu cầu dự án

                var URL_API_Load = 'https://hqmultimedia.github.io/home-fashion/Data/data-product-heart.json';

                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get_heart = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)
        $rootScope.getDataPagination = function(page_data, page_function, option_value) {
                // code chỉnh sửa theo yêu cầu dự án

                var URL_API_Load = 'https://hqmultimedia.github.io/home-fashion/Data/data-product.json';

                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get = res.data;
                        console.log(res.data);



                    }); // kết thúc phần get data




            } // end $scope.getDataPagination(Hàm get data Pagination)


        $rootScope.getDataCategory = function(page_data, page_function) {


                // var URL_API_Load = 'http://localhost/Angular2026/admin/CrudDataController/get_data_box_trash';
                var URL_API_Load = 'https://hqmultimedia.github.io/home-fashion/Data/data-category.json';

                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get_category = res.data;
                        console.log(res.data);

                    }); // kết thúc phần get data


            } // end $scope.getDataPagination(Hàm get data Pagination)

        $rootScope.getDataPostsBottom = function(page_data, page_function) {


                // var URL_API_Load = 'http://localhost/Angular2026/admin/CrudDataController/get_data_box_trash';
                var URL_API_Load = 'https://hqmultimedia.github.io/home-fashion/Data/data-posts-bottom.json';

                // "code cố định chỉ chỉnh sửa khi cần"
                // Hàm lấy tổng số tin 
                $http.get(URL_API_Load)
                    .then(function(res) {
                        // lấy tổng tin
                        $scope.data_get_posts_bottom = res.data;
                        console.log(res.data);

                    }); // kết thúc phần get data


            } // end $scope.getDataPagination(Hàm get data Pagination)



    }) //End controller FunctionController