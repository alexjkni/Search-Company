console.log('Scripts Loaded');

var app = angular.module('searchCompany', [], function($interpolateProvider) {
    
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
    
});
 
app.controller('searchCompanyController', function($scope, $http) {
 
	$scope.init = function() {
        
        $scope.barShow = true;
        $scope.searchCompany = {};
        $scope.searchCompany.companyName = '';
        $scope.searchCompany.companyDetails = {};
        
	}
 
    $scope.searchForCompany = function() {
        
        console.log('Searching for a Company');
        
        var companyName = $scope.searchCompany.companyName;
        
        console.log('HTTP REQUEST: Search for ' + companyName);
        
        $http.post('api/searchCompany', {

            fetchType: 'search',
            companyName: companyName
            
        }).success(function(data, status, headers, config) {
            
            $scope.barShow = data.items.length !== 0 ? true : false;
            
            $scope.searchCompany.searchResults = data;
            
        });
        
    }

	$scope.init();
 
});