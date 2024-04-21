<?php

namespace App\Http\Controllers;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::select('id', 'image', 'name', 'description', 'price')->get(); 

        return response()->json($products); 
    }
}
