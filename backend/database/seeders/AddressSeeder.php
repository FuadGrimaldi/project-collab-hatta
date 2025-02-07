<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('address')->insert([
            [
                'user_id' => 1,
                'address' => 'Jl. Imam Bonjol No. 123, Kelurahan Menteng, Kecamatan Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10310, Indonesia',
                'phone_number' => '081234567890',
            ],
            [
                'user_id' => 1,
                'address' => 'Jl. Gatot Subroto No. 456, Kelurahan Kuningan Barat, Kecamatan Mampang Prapatan, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, 12710, Indonesia',
                'phone_number' => '081345678901',
            ],
            [
                'user_id' => 2,
                'address' => 'Jl. Sudirman No. 45, Kelurahan Karet, Kecamatan Setiabudi, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta, 12930, Indonesia',
                'phone_number' => '081298765432',
            ],
            [
                'user_id' => 3,
                'address' => 'Jl. Thamrin No. 789, Kelurahan Kebon Sirih, Kecamatan Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta, 10340, Indonesia',
                'phone_number' => '081456789012',
            ],
        ]);

    }
}
