console.log('Scripts Loaded');

var app = angular.module('searchCompany', [], function($interpolateProvider) {
    
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
    
});
 
app.controller('searchCompanyController', function($scope, $http) {
 
	$scope.init = function() {
        
        $scope.searchCompany = {};
        $scope.searchCompany.companyName = '';
        
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