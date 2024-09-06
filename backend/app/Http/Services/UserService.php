<?php

namespace App\Http\Services;

use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Log;
use App\Helpers\ResponseFormatter;

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
                'firstname' => $data['firstname'] ?? null,
                'lastname' => $data['lastname'] ?? null,
                'role' => 'buyer',
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

    /**
     * Update the user's profile.
     *
     * @param User $user
     * @param array $data
     * @return User
     */
    public function update(User $user, array $data): User
    {
        try {
            $user->update($data);
            return $user;
        } catch (\Exception $e) {
            // Log the error
            Log::channel('daily')->error($e->getMessage());
            return ResponseFormatter::error(null, 'An error occurred: ' . $e->getMessage(), 500);
        }
    }
}
