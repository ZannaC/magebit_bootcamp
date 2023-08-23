<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cart;
use App\Models\CartProduct;
use Illuminate\Support\Facades\DB;

class CartController extends Controller
{
    public function update(Request $request){
        $userCart = Cart::where('user_id', $request->post('userId'))->first();
        if (!$userCart) {
            $userCart = new Cart([
                'user_id' => $request['userId'],
                'subtotal' => 0
                ]);

            $userCart->save();
        }
        $userCartId = $userCart->id;
        $cartProduct = CartProduct::where('cart_id', $userCartId)->where('product_id', $request->post('productId'))->first();
        if (!$cartProduct) {
            $cartProduct = new CartProduct([
                'cart_id' => $userCartId,
                'product_id' => $request->post('productId'),
                'quantity' => $request->post('quantity')
                ]);

            $cartProduct->save();
        } else {
            $cartProduct->quantity = $cartProduct->quantity + $request->post('quantity');
            $cartProduct->save();
        }
        $cartProducts = CartProduct::where('cart_id', $userCartId)->get();
        return ['products' => $cartProducts];
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
