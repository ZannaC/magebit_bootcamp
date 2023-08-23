<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class Orders extends Migration
{
    public function up()
    {
        // Schema::create('orders', function (Blueprint $table) {
        //     $table->id( false,true);
        //     $table->integer('product_id');
        //     $table->integer('user_id');
        //     $table->integer('quantity');
        //     $table->decimal('total_price', 10, 2);
        //     $table->timestamps();

        //     $table->foreignID('user_id')->constrained('users');
        //     $table->foreignID('product_id')->constrained('products');
        // });
    }

    public function down()
    {
        Schema::dropIfExists('orders');
    }
}

