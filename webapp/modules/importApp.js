angular.module('importApp', ['ngRoute', 'ngToast', 'ui.bootstrap', 'nvd3', 'angularGrid'])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        // route for the home page

        .when('/main', {
            templateUrl: 'pages/main/main.html',
            controller: 'mainController'
        })

        .when('/users', {
            templateUrl: 'pages/users/users.html',
            controller: 'usersController'
        })

        .when('/users/:id', {
            templateUrl: 'pages/users/userDetail.html',
            controller: 'userDetailController'
        })

        .when('/users/criar', {
            templateUrl: 'pages/users/userDetail.html',
            controller: 'userDetailController'
        })

        .when('/login', {
            templateUrl: 'pages/users/login.html'
        })

        .otherwise({ redirectTo: '/main'});

}])

.config(['ngToastProvider',function(ngToast) {
    ngToast.configure({
        verticalPosition: 'top',
        horizontalPosition: 'right',
        maxNumber: 3,
        timeout: 2000,
        dismissOnTimeout: true
    });
}])

.controller("navController", ['$scope', function ($scope) {
    $scope.funcao1 = "Utilizadores";
    $scope.funcao2 = "Backlog";
    $scope.funcao3 = "Recursos";
    $scope.funcao4 = "Projectos";
}]);