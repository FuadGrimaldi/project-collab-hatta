<?php

use App\Http\Controllers\SystemRequireMentController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DetailSystemRequireMentController;

# PUBLIC
Route::post('/login', [UserController::class, 'login']);
Route::post('/users/register', [UserController::class, 'register']); 

# PRIVATE
Route::middleware(['auth-token'])->group(function () {
    Route::get('/users/profile', [UserController::class, 'getProfile']);
    Route::delete('/users/logout', [UserController::class, 'logout']);

    Route::resource('system-recuirement', SystemRequireMentController::class);
    Route::resource('detail-system-requirement', DetailSystemRequireMentController::class);
});

