<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserFormController extends Controller
{
    public function ShowUser(Request $req){
        $req->validate([
            "firstname" => "required | min:3 | max:20",
            "lastname" => "required | min:3 | max:20",
        ]);
        $user = [
            "firstname"=>$req->input("firstname"),
            "lastname"=>$req->input("lastname")];
        return view('user', $user);
    }
}
