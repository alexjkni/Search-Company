var app = angular.module('searchCompany', [], function($interpolateProvider) {
    
	$interpolateProvider.startSymbol('<%');
	$interpolateProvider.endSymbol('%>');
    
});
 
app.controller('searchCompanyController', function($scope, $http) {
 
	$scope.init = function() {
        
        $scope.barShow = false;
        $scope.searchCompany = {};
        
	}
 
    $scope.searchForCompany = function() {
        
        var companyName = $scope.searchCompany.companyName;
        
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