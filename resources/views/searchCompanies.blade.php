@extends('layouts.master') @section('mainContainer')

<div class="container" ng-app="searchCompany" ng-controller="searchCompanyController">
    
    <h1>Search For a Company</h1>
    
    <div class="searchInputContainer">
        <div class="searchInput">
            
            <input type='text' ng-model="searchCompany.companyName">
            
            <button class="btn btn-primary btn-md" ng-click="searchForCompany()">Search</button>
            
        </div>
    </div>
    
    <div class="searchResultsContainer">
        
        <div id="searchResults">
            
            <ul>
            
                <li ng-repeat='result in searchCompany.searchResults.items'>
                    
                    <% result.title %>
                        
                </li>
            
            </ul>
            
        </div>
        
    </div>
</div>

@stop
