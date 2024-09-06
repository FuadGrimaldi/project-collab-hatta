<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Helpers\ResponseFormatter;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Resources\UserResource;
use App\Http\Resources\UserProfileResource;
use App\Http\Services\UserService;
use App\Http\Services\ApiTokenService;
use App\Http\Requests\UserLoginRequest;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    public function login(UserLoginRequest $request)
    {
        try {
            DB::beginTransaction();

            // The UserLoginRequest will handle the validation
            $data = $request->validated();
            

            // Attempt to find the user
            $user = User::where('email', $data['email'])->first();

            // Check if the user exists and the password is correct
            if (! $user || ! Hash::check($data['password'], $user->password)) {
                throw ValidationException::withMessages([
                    'email' => ['The provided credentials are incorrect.'],
                ]);
            }

            $tokenService = ApiTokenService::registerApiToken($user);
            $user->token = $tokenService->token;;

            DB::commit();

            return ResponseFormatter::success(new UserResource($user), 'User logged in successfully');


        } catch (\Exception $e) {
            // Log the error
            Log::channel('daily')->error($e->getMessage());
            DB::rollBack();
            // Return error response
            return ResponseFormatter::error(
                null,
                'Server Error',
                500
            );
        }
    }

    public function register(UserRegisterRequest $request)
    {
        try {

            DB::beginTransaction();

            // The UserRegisterRequest will handle the validation
            $data = $request->validated();

            $user = $this->userService->register($data);

            // Call ApiTokenService to register the API token for the user
            $tokenService = ApiTokenService::registerApiToken($user);
            // Add the token to the user object
            $user->token = $tokenService->token;
            
            DB::commit();
            return ResponseFormatter::success(new UserResource($user), 'User registered successfully', 201);

        } catch (\Exception $e) {
            DB::rollBack();
            Log::channel('daily')->error($e->getMessage());
            return ResponseFormatter::error(
                null,
                'Registration failed: ' . $e->getMessage(),
                500
            );
        }
    }

    public function logout(Request $request)
    {
        try {

            // Get the authenticated user
            $user = $request->user;

            if (!$user)  return ResponseFormatter::error(null, 'User not found', 404);

            $logout = ApiTokenService::nonActiveToken($user);
            if ($logout) {
                return ResponseFormatter::success(null, 'Logout successfully');
            }


        } catch (\Exception $e) {
            // Log the error
            Log::channel('daily')->error($e->getMessage());
            return ResponseFormatter::error(null, 'An error occurred: ' . $e->getMessage(), 500);
        }
    }


    public function getProfile(Request $request)
    {
        try {

            // Get the authenticated user
            $user = $request->user;

            if (!$user)  return ResponseFormatter::error(null, 'User not found', 404);

            return ResponseFormatter::success(new UserProfileResource($user), 'User profile retrieved successfully');

        } catch (\Exception $e) {
            // Log the error
            Log::channel('daily')->error($e->getMessage());
            return ResponseFormatter::error(null, 'An error occurred: ' . $e->getMessage(), 500);
        }
    }
    public function updateProfile(Request $request)
    {
        try {
            // Get the authenticated user
            $user = $request->user;

            if (!$user)  return ResponseFormatter::error(null, 'User not found', 404);

            $data = $request->all();

            $user = $this->userService->update($user, $data);

            return ResponseFormatter::success(new UserProfileResource($user), 'User profile updated successfully');

        } catch (\Exception $e) {
            // Log the error
            Log::channel('daily')->error($e->getMessage());
            return ResponseFormatter::error(null, 'An error occurred: ' . $e->getMessage(), 500);
        }
    }
}
