<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;

# PUBLIC
Route::post('/login', [UserController::class, 'login']);
Route::post('/users/register', [UserController::class, 'register']); 

# PRIVATE
Route::middleware(['auth-token'])->group(function () {
    Route::get('/users/profile', [UserController::class, 'getProfile']);
    Route::post('/users/logout', [UserController::class, 'logout']); 
});

