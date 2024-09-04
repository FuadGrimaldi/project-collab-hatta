<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductDiscountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product_discounts')->insert([
            [
                'product_id' => 1,
                'discount_id' => 1,
                'discount_amount' => 150000.00,
            ],
            [
                'product_id' => 2,
                'discount_id' => 1,
                'discount_amount' => 150000.00,
            ],
            [
                'product_id' => 3,
                'discount_id' => 1,
                'discount_amount' => 150000.00,
            ],
            [
                'product_id' => 4,
                'discount_id' => 1,
                'discount_amount' => 150000.00,
            ],
            [
                'product_id' => 5,
                'discount_id' => 1,
                'discount_amount' => 150000.00,
            ],
        ]);
        //
    }
}
