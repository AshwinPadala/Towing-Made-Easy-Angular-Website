var app = angular.module('indexApp');
app.controller('loginRedirect', function($scope, $firebaseArray) 
{
	var ref = new Firebase("https://towing-made-easy.firebaseio.com/");
	var authData = ref.getAuth();
    if(!authData)
    {
        window.location.href = "towing_made_easy_index.html";
    }
});