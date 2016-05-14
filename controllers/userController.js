var app = angular.module('myApp');
app.controller('userController', function($scope, $firebaseArray) 
{
    var ref = new Firebase("https://towing-made-easy.firebaseio.com/");
    var authData = ref.getAuth();
    $scope.serviceType = "Towing";
    $scope.costPerUnit = 50;
    $scope.towing_numberOfCars = 0;
    
    //get the data for our pending service requests
    var service_requests = ref.child("service_requests");
    $scope.service_request_data = $firebaseArray(service_requests.orderByChild("user").equalTo(authData.uid));

    $scope.newServiceRequest = function()
    {
        //save the new service request to firebase
        var instructions = "";
        var size = "";
        var cost = 0;
        $scope.serviceType == "Towing"
        {
            instructions = $scope.Towing_instructions;
            size = $scope.Towing_numberOfCars;
            cost = size * costPerUnit;
        }
        

        service_requests.push({user: authData.uid, type: $scope.serviceType, instructions: instructions, cost: cost, size: size, provider: "n/a", completed: false});
    }

    $scope.TowingButtonOnClick = function()
    {
        $scope.serviceType = "Towing";
        $scope.costPerUnit = 50;
    }

    });