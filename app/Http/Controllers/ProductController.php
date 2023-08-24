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
    public function search(Request $request) {
        $search = $request->post('search');
        $products = Product::where('name', 'LIKE', '%'.$search.'%')->get();
        return response()->json($products);
    }
}

