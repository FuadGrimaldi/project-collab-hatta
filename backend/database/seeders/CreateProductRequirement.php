<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CreateProductRequirement extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('product_requirements')->insert([
            ['product_id' => 1, 'master_system_requirement_id' => 11, 'detail_requirement_id' => 1],
            ['product_id' => 1, 'master_system_requirement_id' => 12, 'detail_requirement_id' => 2],
            ['product_id' => 2, 'master_system_requirement_id' => 11, 'detail_requirement_id' => 3],
            ['product_id' => 2, 'master_system_requirement_id' => 12, 'detail_requirement_id' => 4],
            ['product_id' => 3, 'master_system_requirement_id' => 11, 'detail_requirement_id' => 5],
            ['product_id' => 3, 'master_system_requirement_id' => 12, 'detail_requirement_id' => 6],
            ['product_id' => 4, 'master_system_requirement_id' => 11, 'detail_requirement_id' => 7],
            ['product_id' => 4, 'master_system_requirement_id' => 12, 'detail_requirement_id' => 8],
            ['product_id' => 5, 'master_system_requirement_id' => 11, 'detail_requirement_id' => 9],
            ['product_id' => 5, 'master_system_requirement_id' => 12, 'detail_requirement_id' => 10],
        ]);
    }
}
