<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class searchCompanyController extends Controller
{
    
    private $apiKey = 'hXoj-z9caGAcJzHd7kwbUX2EH49kuK84BxPIyPd0';
    private $remUrl = 'https://api.companieshouse.gov.uk';

    public function index()
    { 
        
        return 'Hello World';
		
	}

    public function store()
    {
        
        $postData = file_get_contents('php://input');
        
        $result = $this->searchForCompany($postData);
        
        return $result;
    }
    
    private function searchForCompany($postData)
    {
        
        $jsonData = json_decode($postData);
        $searchCompanyName = $jsonData->companyName;
        $fullUrl = $this->remUrl."/search?q=".$searchCompanyName;
        
        $opts = array(
            'http'=>array(
                'method'=>"GET",
                'header' => "Authorization: Basic " . base64_encode("$this->apiKey")                 
                )
        );
        
        $context = stream_context_create($opts);
        
        $file = file_get_contents($fullUrl, false, $context);
        
        return $file;
        
    }
    
    private function makeRequest()
    {
        
        return 'Hello World';
        
    }
    
}