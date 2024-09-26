<?php

namespace App\Http\Controllers;

use App\Models\Newsletter;
use Illuminate\Http\Request;
use App\Models\User;

class UserController extends Controller
{ // register function
    public function register(Request $request)
{
    try {
        $validated = $request->validate([
            'name' => 'required|max:255',
            'email' => 'required|email|unique:users|max:255',
            'password' => 'required|max:255',
        ]);

        $newUser = User::create($validated);
        return ['userReg' => 'success', 'userId' => $newUser->id];
    } catch (\Illuminate\Validation\ValidationException $e) {
        // Обработка ошибок валидации
        return ['userReg' => 'false', 'errors' => $e->errors()];
    } catch (\Exception $e) {
        // Обработка других ошибок при создании пользователя
        return ['userReg' => 'false', 'error' => $e->getMessage()];
    }
}
    // login function
    public function login (Request $request) {

        $user = User::where('email', $request->post('email'))->first();

        if ($user) {
            return ['userExists' => 'success', 'userId' => $user->id];
        } else {
            return ['userExists' => 'error'];
        }
    }

    public function newsletterSubscribe(Request $request) {
        $email = $request->post('email');
        $newsletterRecord=new Newsletter([
            'email' => $email
        ]);
        $newsletterRecord->save();
    }
}
