var app = angular.module("mybitapp", []);

app.controller("mycontroller", function($scope, $http){
  $http.get('/btc').then(function(response){
    $scope.Bitcoinbuy = response.data;
  });
});
