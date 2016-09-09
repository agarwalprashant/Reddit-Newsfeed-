(function(){

var app = angular.module('myreddit', ['ionic'])
function RedditController($scope,$http){
  $scope.stories = [];
  $http.get("https://www.reddit.com/r/Android/new/.json")
        .success(function(response){
          angular.forEach(response.data.children,function(child){
            $scope.stories.push(child.data);
            
          });
        })
}
app.controller("RedditController",["$scope","$http",RedditController])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


}());