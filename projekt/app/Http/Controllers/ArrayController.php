<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ArrayController extends Controller
{
    public function ShowArray(){
        $user = ['firstname'=>'Janusz',
        'lastname'=>'Nowak',
        'city'=>'poznań',
        'hobby'=>['siatkowka','bejsbol','boks']];
        return view('show_array',['data'=>$user]);
    }
}
