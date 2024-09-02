<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CheckoutsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('checkouts')->insert([
            [
                'order_id' => 2,
                'checkout_date' => '2024-01-01',
            ],
            [
                'order_id' => 3,
                'checkout_date' => '2024-01-01',
            ],
        ]);
    }
}
