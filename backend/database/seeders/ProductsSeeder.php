<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            [
                'name' => 'Overwatch Battle.net Key Global',
                'description' => 'Overwatch is a team-based multiplayer first-person shooter developed and published by Blizzard Entertainment.',
                'price' => 500000.000,
                'stock' => 100,
                'seller_id' => 2,
                'thumbnail' => 'img/product1.jpg',
            ],
            [
                'name' => 'Minecraft Java Edition',
                'description' => 'Minecraft is a sandbox video game developed by Mojang Studios.',
                'price' => 400000.000,
                'stock' => 200,
                'seller_id' => 2,
                'thumbnail' => 'img/product2.jpg',
            ],
            [
                'name' => 'The Witcher 3: Wild Hunt',
                'description' => 'The Witcher 3: Wild Hunt is an action role-playing game developed and published by CD Projekt.',
                'price' => 450000.000,
                'stock' => 150,
                'seller_id' => 2,
                'thumbnail' => 'img/product3.jpg',
            ],
            [
                'name' => 'Cyberpunk 2077',
                'description' => 'Cyberpunk 2077 is an action role-playing video game developed and published by CD Projekt.',
                'price' => 550000.000,
                'stock' => 120,
                'seller_id' => 2,
                'thumbnail' => 'img/product4.jpg',
            ],
            [
                'name' => 'Red Dead Redemption 2',
                'description' => 'Red Dead Redemption 2 is an action-adventure game developed and published by Rockstar Games.',
                'price' => 600000.000,
                'stock' => 80,
                'seller_id' => 2,
                'thumbnail' => 'img/product5.jpg',
            ],
        ]);
    }
}
