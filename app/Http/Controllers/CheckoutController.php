<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class CheckoutController extends Controller
{
    public function store(Request $request) {
        $userData = User::find($request->input('userId'));
        $checkoutData = $request->input('checkoutData');
        if (!$userData) {
            $userData = new User([
                'name' => $checkoutData['firstName'],
                'email' => $checkoutData['email'],
                'password' => $checkoutData['password'],
            ]);
            $userData -> save();

            return response()->json(['message' => 'User created successfully', 'user' => $userData], 201);
    }
        $userData->surname = $checkoutData['lastName'];
        $userData->country = $checkoutData['country'];
        $userData->city_town = $checkoutData['cityTown'];
        $userData->zip_code = $checkoutData['zipCode'];
        $userData->phone_number = $checkoutData['phoneNumber'];
        $userData->save();
    }

    public function placeOrder(Request $request) {

    }
}
