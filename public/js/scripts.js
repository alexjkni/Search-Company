console.log('Scripts Loaded');

var app = angular.module('searchCompany', [], function($interpolateProvider) {
    
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
    
});
 
app.controller('searchCompanyController', function($scope, $http) {
 
	$scope.init = function() {
        
		$http.get('api/searchCompany').
		success(function(data, status, headers, config) {
            
            $scope.searchCompany = {};
            $scope.searchCompany.companyName = '';
            
            console.log(data);
			
            //$scope.todos = data;
 
        });
	}
 
    $scope.searchForCompany = function() {
        
        console.log('Searching for a Company');
        
        var companyName = $scope.searchCompany.companyName;
        
        console.log('HTTP REQUEST: Search for ' + companyName);
        
        $http.post('api/searchCompany', {
            
            companyName: companyName
            
        }).success(function(data, status, headers, config) {
            
            $scope.searchCompany.searchResults = data;
            window.searchResults = data;
            
            console.log('HTTP RESPONSE: ' + data);
            
        });
        
    }

	$scope.init();
 
});