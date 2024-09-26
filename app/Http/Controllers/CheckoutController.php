<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderProduct;
use App\Models\CartProduct;
use App\Models\User;
use App\Models\Order;
use App\Models\Cart;

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
        $cart = Cart::where("user_id", $request->input('userId'))->first();
        $products = CartProduct::where("cart_id", $cart->id)->get();
        $this->placeOrder($userData, $products, $cart);
        return response()->json(['message' => 'Order placed successfully', 'code' => 201]);
    }
    public function placeOrder($userData, $products, $cart) {
        $orderData = new Order ([
                "user_id" => $userData->id,
                "subtotal" => $cart->subtotal,
                "total" => $cart->subtotal
            ]);
            $orderData->save();
        foreach ($products as $product) {
            $order = new OrderProduct([
                'product_id' => $product->id,
                'order_id' => $orderData->id,
                'quantity' => $product->quantity,
            ]);
            $order->save();
        }
        CartProduct::where("cart_id", $cart->id)->delete();
    }
}
