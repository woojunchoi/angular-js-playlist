var spaceApp = angular.module('space',['ngRoute','ngAnimate']);

spaceApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl:'app/views/home.html',
        controller:'spaceController'
    })
    .when('/directory', {
        templateUrl:'app/views/directory.html',
        controller:'spaceController'
    })
    .otherwise({
        redirectTo:'/home'
    })
}])

spaceApp.directive('spaceApp', [function() {
    return {
        restrict:'E',
        scope: {
            ninjas: '=',
            title: '='
        },
        transclude:true,
        replace:true,
        templateUrl:'app/views/random.html',
        controller: function($scope) {
            $scope.random = Math.floor(Math.random()*4)
        }
    }
}])



spaceApp.controller('spaceController', ['$scope', '$http', function($scope, $http) {
    
    $scope.removeNinja = function(ninja) {
        var index = $scope.ninjas.indexOf(ninja)
        $scope.ninjas.splice(index,1)
    }

    $scope.addNinja = function() {
        $scope.ninjas.push({
            name:$scope.name,
            belt:$scope.belt,
            rate:parseInt($scope.rate),
            available:true
        })
        $scope.name = ''
        $scope.belt = ''
        $scope.rate = ''
    }

    $http.get('data/ninjas.json').then(function(response) {
        $scope.ninjas = response.data
    })

}])