<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->insert([
            [
                'email' => 'fuad@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('1234fuad'),
                'role' => 'buyer',
                'firstname' => 'Fuad',
                'lastname' => 'Grimaldi',
                'img_profile' => null,
                'phone_number' => null,
                'gender' => null,
                'birthdate' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'email' => 'team2@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('12345678'),
                'role' => 'seller',
                'firstname' => 'Team',
                'lastname' => '2',
                'img_profile' => null,
                'phone_number' => null,
                'gender' => null,
                'birthdate' => null,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
