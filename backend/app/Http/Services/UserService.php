<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class UserService
{
    /**
     * Register a new user.
     *
     * @param array $data
     * @return User
     * @throws ValidationException
     */
    public function register(array $data): User
    {
        try {
            // Validate the incoming data

            // Create the user
            $user = User::create([
                'firstname' => $data['firstname'],
                'lastname' => $data['lastname'],
                'role' => $data['role'],
                'img_profile' => $data['img_profile'] ?? null,
                'phone_number' => $data['phone_number'] ?? null,
                'birthdate' => $data['birthdate'] ?? null,
                'gender' => $data['gender'] ?? null,
                'email' => $data['email'],
                'password' => Hash::make($data['password']),
            ]);

            return $user;
        } catch (\Exception $e) {
            throw ValidationException::withMessages([
                'error' => ['Failed to register user: ' . $e->getMessage()],
            ]);
        }
    }
}
