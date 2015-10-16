

angular.module('voteApp', ['ngAnimate']);
angular.module('voteApp');
angular.module('voteApp').controller('mainController', ['$scope', function($scope){

  $scope.ballot = false;



$scope.flip = function() {
  $scope.ballot = !$scope.ballot;
}





}])

