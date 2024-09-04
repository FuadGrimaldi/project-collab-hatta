<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductFiltersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product_filters')->insert([
            [
                'product_id' => 1,
                'filter_id' => 1,
            ],
            [
                'product_id' => 2,
                'filter_id' => 2,
            ],
            [
                'product_id' => 3,
                'filter_id' => 3,
            ],
            [
                'product_id' => 1,
                'filter_id' => 4,
            ],
            [
                'product_id' => 5,
                'filter_id' => 5,
            ],
            [
                'product_id' => 2,
                'filter_id' => 2,
            ],
            [
                'product_id' => 4,
                'filter_id' => 3,
            ],
            [
                'product_id' => 1,
                'filter_id' => 4,
            ],
            [
                'product_id' => 4,
                'filter_id' => 5,
            ],
            [
                'product_id' => 5,
                'filter_id' => 1,
            ],
            [
                'product_id' => 2,
                'filter_id' => 3,
            ],
            [
                'product_id' => 4,
                'filter_id' => 4,
            ],
            [
                'product_id' => 4,
                'filter_id' => 5,
            ],
            [
                'product_id' => 1,
                'filter_id' => 1,
            ],
            [
                'product_id' => 1,
                'filter_id' => 2,
            ],
        ]);
    }
}
