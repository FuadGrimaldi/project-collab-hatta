<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MasterSystemRequirementsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('master_system_requirements')->insert([
            [
                'product_id' => 1,
                'type' => 'Minimum',
                'requirement' => 'OS: Windows 7, Processor: Intel Core i3, Memory: 4GB RAM, Graphics: NVIDIA GeForce GTX 460, Storage: 30GB available space',
            ],
            [
                'product_id' => 1,
                'type' => 'Recommended',
                'requirement' => 'OS: Windows 10, Processor: Intel Core i5, Memory: 8GB RAM, Graphics: NVIDIA GeForce GTX 660, Storage: 30GB available space',
            ],
            [
                'product_id' => 2,
                'type' => 'Minimum',
                'requirement' => 'OS: Windows 7, Processor: Intel Core i3, Memory: 2GB RAM, Graphics: Intel HD Graphics 4000, Storage: 1GB available space',
            ],
            [
                'product_id' => 2,
                'type' => 'Recommended',
                'requirement' => 'OS: Windows 10, Processor: Intel Core i5, Memory: 4GB RAM, Graphics: NVIDIA GeForce GTX 660, Storage: 1GB available space',
            ],
            [
                'product_id' => 3,
                'type' => 'Minimum',
                'requirement' => 'OS: Windows 7, Processor: Intel Core i5, Memory: 6GB RAM, Graphics: NVIDIA GeForce GTX 660, Storage: 50GB available space',
            ],
            [
                'product_id' => 3,
                'type' => 'Recommended',
                'requirement' => 'OS: Windows 10, Processor: Intel Core i7, Memory: 8GB RAM, Graphics: NVIDIA GeForce GTX 970, Storage: 50GB available space',
            ],
            [
                'product_id' => 4,
                'type' => 'Minimum',
                'requirement' => 'OS: Windows 7, Processor: Intel Core i5, Memory: 8GB RAM, Graphics: NVIDIA GeForce GTX 780, Storage: 70GB available space',
            ],
            [
                'product_id' => 4,
                'type' => 'Recommended',
                'requirement' => 'OS: Windows 10, Processor: Intel Core i7, Memory: 16GB RAM, Graphics: NVIDIA GeForce GTX 1060, Storage: 70GB available space',
            ],
            [
                'product_id' => 5,
                'type' => 'Minimum',
                'requirement' => 'OS: Windows 7, Processor: Intel Core i5, Memory: 8GB RAM, Graphics: NVIDIA GeForce GTX 770, Storage: 150GB available space',
            ],
            [
                'product_id' => 5,
                'type' => 'Recommended',
                'requirement' => 'OS: Windows 10, Processor: Intel Core i7, Memory: 16GB RAM, Graphics: NVIDIA GeForce GTX 1060, Storage: 150GB available space',
            ],
        ]);
    }
}
