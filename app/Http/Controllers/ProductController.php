<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;

class ProductController extends Controller
{
    public function index() {
        // return ['product' => 'pro'];
            $products = Product::all();
            return response()->json($products);
            // return ['Products' => 'est', 'products' => $products];
    }
}
