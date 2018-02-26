var spaceApp = angular.module('space',['ngRoute']);

spaceApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/home', {
        templateUrl:'app/views/home.html'
    })
    .when('/directory', {
        templateUrl:'app/views/directory.html',
        controller:'spaceController'
    })
    .otherwise({
        redirectTo:'/home'
    })
}])


spaceApp.controller('spaceController', ['$scope', function($scope) {
    
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

    $scope.ninjas = [
        {
            name:'woojun',
            belt:'black',
            rate: 50,
            available:true,
            thumb:'http://placehold.it/50x50/666666/ffffff'
        },
        {
            name:'hongji',
            belt:'yellow',
            rate:1000,
            available:true,
            thumb:'http://placehold.it/50x50/666666/ffffff'
        },
        {
            name:'haru',
            belt:'red',
            rate:500,
            available:true,
            thumb:'http://placehold.it/50x50/666666/ffffff'
        }
    ]

}])