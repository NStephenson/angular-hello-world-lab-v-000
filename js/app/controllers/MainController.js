function MainController($scope){

  $scope.name = "Derek"
  $scope.friend = { name: "Jonas", age: "12" }
}

angular
  .module("app")
  .controller("MainController", MainController)