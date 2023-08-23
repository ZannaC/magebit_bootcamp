<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            [
                'name' => "The Dandy Chair",
                'price' => 250,
                'image' => "https://www.ikea.com/us/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=xl",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Rustic Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "The Silky Vase",
                'price' => 125,
                'image' => "https://silkyfactory.com/wp-content/uploads/2021/10/vaas5.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "The Lucy Lamp",
                'price' => 399,
                'image' => "https://chairish-prod.freetls.fastly.net/image/product/sized/40208db1-1aca-41eb-86dd-8efd835efe98/architect-task-desk-lamp-lucy-by-erco-germany-7866?aspect=fit&width=640&height=640",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Rustic Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "KOko Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Lusa Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Honda Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Mercedes Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Toyota Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Bmw Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Audi Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Vw Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Reno Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
            [
                'name' => "Supra Vase Set",
                'price' => 155,
                'image' => "https://m.media-amazon.com/images/I/61JxVujQN3L._AC_UF894,1000_QL80_.jpg",
                'description' => "NICE PRODUCT",
                'height' => '100cm',
                'width'=> '75cm',
                'depth'=> '45cm',
            ],
        ]);
    }
}
