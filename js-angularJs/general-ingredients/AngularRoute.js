upload.config(function($routeProvider, $locationProvider) {
    $routeProvider

    // .when('/home', { templateUrl: 'content-admin-panel/page/home.html', controller: 'Load_Data_Controller' })
    // .when('/', { templateUrl: 'content-admin-panel/page/home.html', controller: 'Load_Data_Controller' })
    // .when('/posts-demo', { templateUrl: 'content-admin-panel/page/content-posts.html', controller: 'Load_Data_Controller' })

        .when('/home', { templateUrl: 'content-admin-panel/page/home.html', controller: 'ShowCaroselController' })
        .when('/', { templateUrl: 'content-admin-panel/page/home.html', controller: 'ShowCaroselController' })
        .when('/posts-demo', { templateUrl: 'content-admin-panel/page/content-posts.html', controller: 'HiddenCaroselController' })


    .otherwise({ redirectTo: '/' })

    $locationProvider.html5Mode(true);


});