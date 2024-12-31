<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{
    //
    function login(Request $request){
    $email=$request->input("email");
     $res=Customer::where("email",$email)->first();
     $inputpassword=$request->password;
     
  

     if($res){ 
        $realpassword=$res->password;
        if(Hash::check($inputpassword,$realpassword)){
        return response()->json(["status"=>true,"message"=>"login Success "]);
        }
else{
    return response()->json(["status"=>false,"message"=>"password invalid"]); 
}}
else{
    return response()->json(["status"=>false,"message"=>" invalid email"]);
}



    }
}
