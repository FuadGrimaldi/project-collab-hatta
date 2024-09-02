<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DiscountsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('discounts')->insert([
            [
                'discount_code' => 'WINTER23',
                'description' => 'Winter Sale 2023',
                'discount_amount' => 150000.000,
                'discount_percentage' => 30.00,
                'start_date' => '2023-12-01',
                'end_date' => '2023-12-31',
            ],
            [
                'discount_code' => 'SPRING23',
                'description' => 'Spring Sale 2023',
                'discount_amount' => 75000.000,
                'discount_percentage' => 15.00,
                'start_date' => '2023-03-01',
                'end_date' => '2023-03-31',
            ],
            [
                'discount_code' => 'FALL23',
                'description' => 'Fall Sale 2023',
                'discount_amount' => 100000.000,
                'discount_percentage' => 20.00,
                'start_date' => '2023-09-01',
                'end_date' => '2023-09-30',
            ],
        ]);
    }
}
