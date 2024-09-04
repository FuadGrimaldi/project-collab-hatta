<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Helpers\ResponseFormatter;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        try {
            DB::beginTransaction();

            // Validate the request
            $request->validate([
                'email' => 'required|string|email',
                'password' => 'required|string',
            ]);

            // Attempt to find the user
            $user = User::where('email', $request->email)->first();

            // Check if the user exists and the password is correct
            if (! $user || ! Hash::check($request->password, $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }

            // Create a new Sanctum token
            $token = $user->createToken('auth_token')->plainTextToken;

            DB::commit();

            // Return the token in the response
            return ResponseFormatter::success([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => $user
            ], 'User logged in successfully');
        } catch (\Exception $e) {
            // Log the error
            Log::channel('daily')->error('Login error: ' . $e->getMessage(), [
                'email' => $request->email,
                'exception' => $e,
            ]);
            DB::rollBack();
            // Return error response
            return ResponseFormatter::error(
                null,
                'Server Error',
                500
            );
        }
    }

    public function register(Request $request)
    {

        try {
            DB::beginTransaction();

            // Validate the incoming request
            $request->validate([
                'firstname' => 'required|string|max:255',
                'lastname' => 'required|string|max:255',
                'role' => 'required|string|in:buyer,seller',
                'img_profile' => 'nullable|string',
                'phone_number' => 'nullable|string',
                'birthdate' => 'nullable|date',
                'gender' => 'nullable|string|in:male,female,other',
                'email' => 'required|string|email|max:255|unique:users',
                'password' => 'required|string|min:8|confirmed',
            ]);

            // Create a new user
            $user = User::create([
                'firstname' => $request->firstname,
                'lastname' => $request->lastname,
                'role' => $request->role,
                'img_profile' => $request->img_profile,
                'phone_number' => $request->phone_number,
                'birthdate' => $request->birthdate,
                'gender' => $request->gender,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            // Generate a Sanctum token for the user
            $token = $user->createToken('auth_token_hatta')->plainTextToken;

            DB::commit();

            // Return the user's data along with the token
            return ResponseFormatter::success([
                'access_token' => $token,
                'token_type' => 'Bearer',
                'user' => $user,
            ], 'User registered successfully');
        } catch (\Exception $e) {
            DB::rollBack();
            return ResponseFormatter::error(
                null,
                'Registration failed: ' . $e->getMessage(),
                500
            );
        }
    }

    public function getProfile(Request $request)
    {
        try {
            // Get the authenticated user
            $user = $request->user();
            

            if (!$user) {
                return ResponseFormatter::error(null, 'User not found', 404);
            }

            // Return the user's profile data
            return ResponseFormatter::success($user, 'User profile retrieved successfully');

        } catch (\Exception $e) {
            // Log the error
            Log::channel('daily')->error('Error in getProfile: ' . $e->getMessage(), [
                'exception' => $e,
                'user_id' => $request->user() ? $request->user()->id : null,
            ]);
            return ResponseFormatter::error(null, 'An error occurred: ' . $e->getMessage(), 500);
        }
    }
}
