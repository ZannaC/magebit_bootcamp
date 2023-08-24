<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductFilterController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\CheckoutController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('/place-order', [CartController::class, 'placeOrder']);

Route::post('/get-subtotal', [CartController::class, 'getSubtotal']);

Route::post('/get-cart-items', [CartController::class, 'getItems']);

Route::post('/cart-update', [CartController::class, 'update']);

Route::post('/products', [ProductController::class, 'index']);

Route::post('/login', [UserController::class, 'login']);

Route::post('/register', [UserController::class, 'register']);

Route::post('/newsletter-subscribe', [UserController::class, 'newsletterSubscribe']);

Route::post('/productFilter', [ProductFilterController::class, 'productFilter']);

Route::post('/checkout-save', [CheckoutController::class, 'store']);

Route::post('/search', [ProductController::class, 'search']);
