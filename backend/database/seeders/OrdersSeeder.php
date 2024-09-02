<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrdersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('orders')->insert([
            [
                'order_number' => uniqid(),
                'user_id' => 1,
                'total_price' => 500000.000,
                'status' => 'completed',
            ],
            [
                'order_number' => uniqid(),
                'user_id' => 1,
                'total_price' => 450000.000,
                'status' => 'pending',
            ],
            [
                'order_number' => uniqid(),
                'user_id' => 1,
                'total_price' => 700000.000,
                'status' => 'completed',
            ],
        ]);
    }
}
