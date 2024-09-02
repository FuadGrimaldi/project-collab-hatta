<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class WishlistsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('wishlists')->insert([
            [
                'user_id' => 1,
                'product_id' => 1,
            ],
            [
                'user_id' => 1,
                'product_id' => 2,
            ],
            [
                'user_id' => 1,
                'product_id' => 3,
            ],
        ]);
    }
}
