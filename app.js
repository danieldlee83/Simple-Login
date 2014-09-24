var app = angular.module("myApp", ["firebase"]);

app.factory('simpleLogin', function($firebaseSimpleLogin){
	var ref = new Firebase("https://sizzling-fire-7483.firebaseio.com/");
    return $firebaseSimpleLogin(ref);
});

app.controller("mainCtrl", function($scope, simpleLogin){
	
	$scope.auth = simpleLogin;


    $scope.doLogin = function(){
    	$scope.auth.$login('google')
    	.then(function(user){
         //if they login
         $scope.user = user;	
    	}, function(error){
    	 //if they don;t login
    	 $scope.loginError = "Login Error: "+error;	
    	});
    }
	$scope.doLogout = function(){
		$scope.auth.$logout()
	}    	
});


