<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{ // register function
    public function register(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|max:255',
        'email' => 'required|email|unique:users|max:255',
        'password' => 'required|max:255',
    ]);

    try {
        $user = User::create($validated);
        return ['userReg' => 'success'];
    } catch (\Exception $e) {
        // Information about mistakes:
        return ['userReg' => 'false', 'error' => $e->getMessage()];
    }
}
    // login function
    public function login (Request $request) {

        $user = User::where('email', $request->post('email'))->first();

        if ($user) {
            return ['userExists' => 'est', 'user' => $user];
        } else {
            return ['userExists' => 'net'];
        }
    }
}
