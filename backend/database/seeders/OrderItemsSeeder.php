<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('order_items')->insert([
            [
                'order_id' => 1,
                'product_id' => 1,
                'quantity' => 1,
                'price' => 350000.00,
            ],
            [
                'order_id' => 1,
                'product_id' => 2,
                'quantity' => 1,
                'price' => 250000.00,
            ],
            [
                'order_id' => 2,
                'product_id' => 5,
                'quantity' => 1,
                'price' => 450000.00,
            ],
            [
                'order_id' => 3,
                'product_id' => 3,
                'quantity' => 1,
                'price' => 300000.00,
            ],
            [
                'order_id' => 3,
                'product_id' => 4,
                'quantity' => 1,
                'price' => 400000.00,
            ],
        ]);
    }
}
