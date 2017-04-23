<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

/* Search Companies */

Route::get('/', 'searchCompaniesController@index');

Route::resource('api/searchCompany','searchCompanyController');

/* Testing Below This 

Route::get('/', function () {
    return view('welcome');
});

Route::get('/foo/bar','UriController@index');

Route::get('/register',function(){
    
    $config = Config::get('app.timezone');
    
   echo $config;
});

Route::post('/user/register',array('uses'=>'UserRegistration@postRegister'));

*/