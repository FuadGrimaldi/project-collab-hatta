<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

# PUBLIC
Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

# PRIVATE
Route::middleware(['auth:sanctum', 'ability:buyer,seller'])->group(function () {
    Route::get('/profile', [AuthController::class, 'getProfile']);
    
});


