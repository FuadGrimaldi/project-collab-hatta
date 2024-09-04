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
                'master_system_requirement_id' => 11,
                'type' => 'Minimum',
                'system_operation' => 'macOS 10.12',
                'processor' => 'Intel Core i5',
                'memory' => '8GB RAM',
                'graphics' => 'AMD Radeon R9 M290X',
                'directx' => null,
                'storage' => '30GB available space',
            ],
            [
                'master_system_requirement_id' => 11,
                'type' => 'Recommended',
                'system_operation' => 'macOS 10.14',
                'processor' => 'Intel Core i7',
                'memory' => '16GB RAM',
                'graphics' => 'AMD Radeon Pro 560',
                'directx' => null,
                'storage' => '30GB available space',
            ],
            [
                'master_system_requirement_id' => 12,
                'type' => 'Minimum',
                'system_operation' => 'Windows 7',
                'processor' => 'Intel Core i3',
                'memory' => '4GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 460',
                'directx' => 'DirectX 11',
                'storage' => '30GB available space',
            ],
            [
                'master_system_requirement_id' => 12,
                'type' => 'Recommended',
                'system_operation' => 'Windows 10',
                'processor' => 'Intel Core i5',
                'memory' => '8GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 660',
                'directx' => 'DirectX 12',
                'storage' => '30GB available space',
            ],
            [
                'master_system_requirement_id' => 11,
                'type' => 'Minimum',
                'system_operation' => 'macOS 10.11',
                'processor' => 'Intel Core i5',
                'memory' => '4GB RAM',
                'graphics' => 'Intel Iris Pro Graphics 6200',
                'directx' => null,
                'storage' => '1GB available space',
            ],
            [
                'master_system_requirement_id' => 11,
                'type' => 'Recommended',
                'system_operation' => 'macOS 10.13',
                'processor' => 'Intel Core i7',
                'memory' => '8GB RAM',
                'graphics' => 'AMD Radeon Pro 555',
                'directx' => null,
                'storage' => '1GB available space',
            ],
            [
                'master_system_requirement_id' => 12,
                'type' => 'Minimum',
                'system_operation' => 'Windows 7',
                'processor' => 'Intel Core i5',
                'memory' => '6GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 660',
                'directx' => 'DirectX 11',
                'storage' => '50GB available space',
            ],
            [
                'master_system_requirement_id' => 12,
                'type' => 'Recommended',
                'system_operation' => 'Windows 10',
                'processor' => 'Intel Core i7',
                'memory' => '8GB RAM',
                'graphics' => 'NVIDIA GeForce GTX 970',
                'directx' => 'DirectX 12',
                'storage' => '50GB available space',
            ],
            [
                'master_system_requirement_id' => 11,
                'type' => 'Minimum',
                'system_operation' => 'macOS 10.13',
                'processor' => 'Intel Core i5',
                'memory' => '8GB RAM',
                'graphics' => 'AMD Radeon Pro 555X',
                'directx' => null,
                'storage' => '70GB available space',
            ],
            [
                'master_system_requirement_id' => 11,
                'type' => 'Recommended',
                'system_operation' => 'macOS 10.15',
                'processor' => 'Intel Core i7',
                'memory' => '16GB RAM',
                'graphics' => 'AMD Radeon Pro 5500M',
                'directx' => null,
                'storage' => '70GB available space',
            ],
        ]);
    }
}
