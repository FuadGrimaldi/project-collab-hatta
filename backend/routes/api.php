<?php

use App\Http\Controllers\SystemRequireMentController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\DetailSystemRequireMentController;
use App\Http\Controllers\ProductControllerDev;
use App\Http\Controllers\CartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\AddressController;
# PUBLIC
Route::post('/login', [UserController::class, 'login']);
Route::post('/users/register', [UserController::class, 'register']); 

# PRIVATE
Route::middleware(['auth-token'])->group(function () {
    Route::get('/users/profile', [UserController::class, 'getProfile']);
    Route::put('/users/edit-profile', [UserController::class, 'updateProfile']);
    Route::delete('/users/logout', [UserController::class, 'logout']);

    Route::resource('address', AddressController::class);
    Route::get('users/address/{userId}', [AddressController::class, 'getAddressByUser']);

    Route::resource('system-recuirement', SystemRequireMentController::class);
    Route::resource('detail-system-requirement', DetailSystemRequireMentController::class);

    Route::resource('product', ProductControllerDev::class);
    Route::resource('cart', CartController::class);

    Route::get('mycart', [CartController::class, 'getMyCart']);
    Route::delete('mycart/delete/{product_id}', [CartController::class, 'deleteMyCart']);
    Route::put('mycart/update/{cartId}', [CartController::class, 'updateMyCart']);

    // Route::resource('orders', OrderController::class);
    Route::post('orders/create', [OrderController::class, 'store']);
    Route::get('myorders', [OrderController::class, 'myOrders']);
    Route::put('orders/{orderId}/update-payment-status', [OrderController::class, 'updatePaymentStatus']);
    
});

