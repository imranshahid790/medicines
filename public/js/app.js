var app = angular.module('myApp', ['ngRoute']);


app.config(['$httpProvider','$routeProvider', function ($httpProvider,$routeProvider,$locationProvider) {
    $httpProvider.defaults.useXDomain = true;

    $routeProvider
    .when("/", {
        templateUrl : "/static/main.html"
    })
    .when("/red", {
        templateUrl : "/static/red.html"
    })
    .when("/register", {
        templateUrl : "/static/register.html"
    })
    .when("/add", {
        templateUrl : "/static/addMedicine.html"
    })
    .when("/cart", {
        templateUrl : "/static/medicine-cart.html"
    })
    .otherwise({
        redirectTo:"/static/main.html"
    });
  
   
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
}]);

