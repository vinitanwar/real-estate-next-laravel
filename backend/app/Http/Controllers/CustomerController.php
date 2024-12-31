<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;


class CustomerController extends Controller
{
    //
    function SignupCustomer(Request $request){
       $input=$request->all();
       $peopleuser=Customer::create($input);
       return $input;


    }

}
