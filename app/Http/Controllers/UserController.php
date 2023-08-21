<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{
    public function register (Request $request) {
        // dd($request->post());
        User::create($request->post());
        if (User::create($request->post())) {
            return true;
        } else {
            return false;
        }
    }
}
