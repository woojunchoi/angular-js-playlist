var spaceApp = angular.module('space',[]);


spaceApp.controller('spaceController', ['$scope', function($scope) {
    
    $scope.removeNinja = function(ninja) {
        var index = $scope.ninjas.indexOf(ninja)
        $scope.ninjas.splice(index,1)
    }

    $scope.ninjas = [
        {
            name:'woojun',
            belt:'black',
            rate: 50,
            available:true
        },
        {
            name:'hongji',
            belt:'yellow',
            rate:1000,
            available:true,
        },
        {
            name:'haru',
            belt:'red',
            rate:500,
            available:true
        }
    ]

}])