<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DetailRequirementsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('detail_requirements')->insert([
            [
                'master_system_requirement_id' => 1,
                'system_operation' => 'Windows 7',
                'processor' => 'Intel Core i3',
                'memory' => '4GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 460',
                'directx' => null,
                'storage' => '30GB available space',
            ],
            [
                'master_system_requirement_id' => 2,
                'system_operation' => 'Windows 10',
                'processor' => 'Intel Core i5',
                'memory' => '8GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 660',
                'directx' => null,
                'storage' => '30GB available space',
            ],
            [
                'master_system_requirement_id' => 3,
                'system_operation' => 'Windows 7',
                'processor' => 'Intel Core i3',
                'memory' => '2GB RAM',
                'graphics' => 'Intel HD Graphics 4000',
                'directx' => null,
                'storage' => '1GB available space',
            ],
            [
                'master_system_requirement_id' => 4,
                'system_operation' => 'Windows 10',
                'processor' => 'Intel Core i5',
                'memory' => '4GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 660',
                'directx' => null,
                'storage' => '1GB available space',
            ],
            [
                'master_system_requirement_id' => 5,
                'system_operation' => 'Windows 7',
                'processor' => 'Intel Core i5',
                'memory' => '6GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 660',
                'directx' => null,
                'storage' => '50GB available space',
            ],
            [
                'master_system_requirement_id' => 6,
                'system_operation' => 'Windows 10',
                'processor' => 'Intel Core i7',
                'memory' => '8GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 970',
                'directx' => null,
                'storage' => '50GB available space',
            ],
            [
                'master_system_requirement_id' => 7,
                'system_operation' => 'Windows 7',
                'processor' => 'Intel Core i5',
                'memory' => '8GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 780',
                'directx' => null,
                'storage' => '70GB available space',
            ],
            [
                'master_system_requirement_id' => 8,
                'system_operation' => 'Windows 10',
                'processor' => 'Intel Core i7',
                'memory' => '16GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 1060',
                'directx' => null,
                'storage' => '70GB available space',
            ],
            [
                'master_system_requirement_id' => 9,
                'system_operation' => 'Windows 7',
                'processor' => 'Intel Core i5',
                'memory' => '8GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 770',
                'directx' => null,
                'storage' => '150GB available space',
            ],
            [
                'master_system_requirement_id' => 10,
                'system_operation' => 'Windows 10',
                'processor' => 'Intel Core i7',
                'memory' => '16GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 1060',
                'directx' => null,
                'storage' => '150GB available space',
            ],
        ]);
    }
}
