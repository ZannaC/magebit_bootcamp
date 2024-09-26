<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartProduct;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function update(Request $request){
        // checking if we have the cart
        $userCart = Cart::where('user_id', $request->post('userId'))->first();
        if (!$userCart) { // if no we creating it
            $userCart = new Cart([
                'user_id' => $request['userId'],
                'subtotal' => 0
                ]);

            $userCart->save();
        }
        $userCartId = $userCart->id;
        // check if we have the product in the cart
        $cartProduct = CartProduct::where('cart_id', $userCartId)->where('product_id', $request->post('productId'))->first();
        if (!$cartProduct) { // if no we creating it
            $cartProduct = new CartProduct([
                'cart_id' => $userCartId,
                'product_id' => $request->post('productId'),
                'quantity' => $request->post('quantity')
                ]);

            $cartProduct->save();
        } else { // if yes we updating it
            $cartProduct->quantity = $cartProduct->quantity + $request->post('quantity');
            $cartProduct->save();
        }

        $productPrice = DB::table('products')->where('id', $request->post('productId'))->value('price');
        $userCart->subtotal = $userCart->subtotal + ($productPrice * $request->post('quantity'));
        $userCart->save();
        // $cartProducts = CartProduct::where('cart_id', $userCartId)->get();
        return ['productQuantity' => $cartProduct->quantity, 'subTotal' => $userCart->subtotal];
    }

    public function getSubtotal (Request $request) {
        $userCart = Cart::where('user_id', $request->post('userId'))->first();
        if (!$userCart) { // if no we creating it
            $userCart = new Cart([
                'user_id' => $request['userId'],
                'subtotal' => 0
                ]);

            $userCart->save();
        }
        return $userCart->subtotal;
    }

    public function getItems (Request $request) {
        $items = DB::table('cart')
        ->select('cart.*', 'cart_products.*', 'products.*')
        ->join('cart_products', 'cart.id', '=', 'cart_products.cart_id')
        ->join('products', 'cart_products.product_id', '=', 'products.id')
        ->where('cart.user_id', $request->post('userId'))
        ->get();
        return ['products' => $items];
    }
}
