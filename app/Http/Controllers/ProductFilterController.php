<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductFilterController extends Controller
{
    public function productFilter(Request $request) {
        $filteredProducts = Product::whereIn('type', $request)->get();
        return response()->json($filteredProducts);
    }
}
