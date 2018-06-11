console.log('beforeload');
    var testApp = angular.module('testApp', ['ngRoute']);

console.log('afterload');
    testApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : './pages/home.html',
                controller  : 'mainController'
            })
            .when('/about', {
                templateUrl : './pages/about.html',
                controller  : 'aboutController'
            });
    });

    testApp.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

    testApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });

  
