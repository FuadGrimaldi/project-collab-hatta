<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderDiscountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('order_discounts')->insert([
            [
                'order_id' => 1,
                'discount_id' => 1,
                'discount_amount' => 150000.00,
            ],
            [
                'order_id' => 2,
                'discount_id' => 1,
                'discount_amount' => 150000.00,
            ],
            [
                'order_id' => 1,
                'discount_id' => 1,
                'discount_amount' => 150000.00,
            ],
        ]);
    }
}
