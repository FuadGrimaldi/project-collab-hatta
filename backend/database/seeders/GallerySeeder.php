<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('gallery')->insert([
            [
                'product_id' => 1,
                'image_url' => 'image1.jpg',
            ],
            [
                'product_id' => 1,
                'image_url' => 'image2.jpg',
            ],
            [
                'product_id' => 1,
                'image_url' => 'image3.jpg',
            ],
            [
                'product_id' => 2,
                'image_url' => 'image4.jpg',
            ],
            [
                'product_id' => 2,
                'image_url' => 'image5.jpg',
            ],
            [
                'product_id' => 2,
                'image_url' => 'image6.jpg',
            ],
            [
                'product_id' => 3,
                'image_url' => 'image7.jpg',
            ],
            [
                'product_id' => 4,
                'image_url' => 'image8.jpg',
            ],
            [
                'product_id' => 4,
                'image_url' => 'image9.jpg',
            ],
            [
                'product_id' => 4,
                'image_url' => 'image10.jpg',
            ],
            [
                'product_id' => 4,
                'image_url' => 'image11.jpg',
            ],
            [
                'product_id' => 4,
                'image' => 'image12.jpg',
            ],

            [
                'product_id' => 5,
                'image_url' => 'image13.jpg',
            ],
            [
                'product_id' => 5,
                'image_url' => 'image14.jpg',
            ],
            [
                'product_id' => 5,
                'image_url' => 'image15.jpg',
            ],
        ]);
    }
}
