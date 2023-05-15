angular.module("myApp",[])
.filter('encodeURIComponent', function() {
    // http://stackoverflow.com/questions/16630471/how-can-i-invoke-encodeuricomponent-from-angularjs-template
    return window.encodeURIComponent;
})
.controller("Example", function($scope, $interval) {
  $scope.url = document.location.href;
  $scope.text = document.querySelector("h2").innerText;
  $scope.via = "codepen";
  $scope.format = 'hh:mm:ss';
  $scope.tags = [
    'Bootstrap','AngularJS','sharing','facebook','twitter','Google+'
  ]
})