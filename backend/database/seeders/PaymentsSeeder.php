<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('payments')->insert([
            [
                'payment_method' => 'cash',
                'payment_date' => '2024-01-01',
                'amount' => 450000,
                'status' => 'success',
            ],
            [
                'payment_method' => 'debit',
                'payment_date' => '2024-01-01',
                'amount' => 700000,
                'status' => 'success',
            ],
        ]);
    }
}
