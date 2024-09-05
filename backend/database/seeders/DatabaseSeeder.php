<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        $this->call([
<<<<<<< HEAD
            UsersSeeder::class,
=======
<<<<<<< HEAD
<<<<<<< HEAD
            UsersSeeder::class,
=======
=======
            UsersSeeder::class,
>>>>>>> main
>>>>>>> ahya
            // UsersSeeder::class,
>>>>>>> main
            AddressSeeder::class,
            CheckoutsSeeder::class,
            DetailRequirementsSeeder::class,
            DiscountsSeeder::class,
            FiltersSeeder::class,
            GallerySeeder::class,
            MasterSystemRequirementsSeeder::class,
            OrderDiscountsSeeder::class,
            OrderItemsSeeder::class,
            OrdersSeeder::class,
            PaymentsSeeder::class,
            ProductDetailsSeeder::class,
            ProductDiscountsSeeder::class,
            ProductFiltersSeeder::class,
            ProductsSeeder::class,
            TransactionsSeeder::class,
            UsersSeeder::class,
            WishlistsSeeder::class,
        ]);
    }
}
