console.log('beforeload');
    var testApp = angular.module('testApp', ['ngRoute']);

console.log('afterload');
testApp.controller('appCtrl', function ($scope) {
    console.log('inside 2 cntrl');
     $scope.myFunc = function() {
        templateUrl : './pages/home.html', 
     };

});
    /*testApp.config(function($routeProvider) {
          console.log('inside 1 cntrl');
        $routeProvider
            .when('/', {
                templateUrl : './pages/home.html',
                controller  : 'mainController'
            })
            .when('/about', {
                templateUrl : './pages/about.html',
                controller  : 'aboutController'
            });
    });*/

    testApp.controller('mainController', function($scope) {
        $scope.message = 'Everyone come and see how good I look!';
    });

   /* testApp.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });*/

  
