

angular.module('voteApp', []);
angular.module('voteApp');
angular.module('voteApp').controller('mainController', ['$scope', function($scope){

  $scope.ballot = false;
$scope.sitefront = true;


$scope.flip = function() {
  $scope.ballot = !$scope.ballot;
}

$scope.flop = function() {
  $scope.sitefront = !$scope.sitefront;

}



}])



// <div id="beach-toys">
  
//   <div class="beach-toy" ng-class="{ 'selected-toy' : toy.selected }" ng-repeat="(myIndex, toy) in beachToys">
//     <!-- Get Values of keys in object -->
//     <!-- <p ng-repeat="(key, val) in toy">{{key}}</p> -->
//     {{toy.name}} - {{$index}}
//     <ul>
//       <li ng-click="changeBackground($index, myIndex)" ng-repeat="color in toy.colors track by $index">{{color}} - {{$index}}</li>
//     </ul>
    

//   </div>  


// </div>