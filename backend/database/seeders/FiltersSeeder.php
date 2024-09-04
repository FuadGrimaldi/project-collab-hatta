<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FiltersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('filters')->insert([
            [
                'name' => 'Best Deals',
            ],
            [
                'name' => 'Latest Releases',
            ],
            [
                'name' => 'Best Sellers',
            ],
            [
                'name' => 'Recommended',
            ],
            [
                'name' => 'Pre-Order',
            ],
        ]);
    }
}
