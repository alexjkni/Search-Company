<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class searchCompaniesController extends Controller
{
    
    public function index()
    { 
           
		return view('searchCompanies');
	}
    
}
