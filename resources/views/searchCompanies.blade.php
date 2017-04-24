@extends('layouts.master') @section('mainContainer')

<div id="searchCompanyContainer" class="container" ng-app="searchCompany" ng-controller="searchCompanyController">
    
    <h1>Search Companies</h1>
    
    <div class="searchInputContainer">
        <div class="searchInput">
            
            <input type='text' class="remStl" ng-change="searchForCompany()" ng-model="searchCompany.companyName" placeholder="Type Here To Search">
            
        </div>
    </div>
    
    <hr ng-show="barShow">
    
    <div class="searchResultsContainer">
        
        <div id="searchResults">
            
            <ul>
            
                <li ng-repeat='company in searchCompany.searchResults.items' ng-click="companyDetails(company)">
                    
                    <p><% company.title %></p>
                        
                </li>
            
            </ul>
            
        </div>
        
    </div>
    
</div>

@stop
