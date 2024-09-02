<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductDetailsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product_details')->insert([
            [
                'product_id' => 1,
                'tag' => 'Multiplayer, Shooter',
                'workson' => 'Windows(7, 8, 10), MacOS',
                'release_date' => '2016-05-24',
                'company_name' => 'New World Computing. Inc./Ubisoft',
                'size' => '30GB',
                'language' => 'English, Chinese, Japanese, Indonesian, Arabic',
            ],
            [
                'product_id' => 2,
                'tag' => 'Sandbox, Survival',
                'workson' => 'Windows, MacOS, Linux',
                'release_date' => '2011-11-18',
                'company_name' => 'Mojang Studios',
                'size' => '1GB',
                'language' => 'English, Chinese, Japanese, Indonesian, Arabic',
            ],
            [
                'product_id' => 3,
                'tag' => 'Action, RPG',
                'workson' => 'Windows, PlayStation 4, Xbox One, Nintendo Switch',
                'release_date' => '2015-05-19',
                'company_name' => 'CD Projekt',
                'size' => '50GB',
                'language' => 'English, Chinese, Japanese, Indonesian, Arabic',
            ],
            [
                'product_id' => 4,
                'tag' => 'Action, RPG',
                'workson' => 'Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, Stadia',
                'release_date' => '2020-12-10',
                'company_name' => 'CD Projekt',
                'size' => '70GB',
                'language' => 'English, Chinese, Japanese, Indonesian, Arabic',
            ],
            [
                'product_id' => 5,
                'tag' => 'Action, Adventure',
                'workson' => 'Windows, PlayStation 4, Xbox One, Stadia',
                'release_date' => '2018-10-26',
                'company_name' => 'Rockstar Games',
                'size' => '150GB',
                'language' => 'English, Chinese, Japanese, Indonesian, Arabic',
            ],
        ]);
    }
}
