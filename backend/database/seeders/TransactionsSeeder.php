<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TransactionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('transactions')->insert([
            [
                'order_id' => 1,
                'payment_id' => 1,
                'transaction_date' => '2024-01-01',
                'status' => 'success',
                'service_fee' => 10000,
            ],
            [
                'order_id' => 2,
                'payment_id' => 2,
                'transaction_date' => '2024-01-01',
                'status' => 'success',
                'service_fee' => 10000,
            ],
        ]);
    }
}
