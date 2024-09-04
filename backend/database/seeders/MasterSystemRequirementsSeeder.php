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
                'requirement' => 'Apple',
            ],
            [
                'requirement' => 'Windows',
            ],
        ]);
    }
}
