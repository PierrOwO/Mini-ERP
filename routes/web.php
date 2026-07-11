<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\OrderController;
use Illuminate\Support\Facades\Route;

Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);
    Route::get('/{any}', function () {
        return redirect('/');
    })->where('any', '.*');
});
Route::get('/create-order', [OrderController::class, 'store']);
Route::get('/get-orders', [OrderController::class, 'index']);
Route::get('/{any}', function () {
    return view('index');
})->where('any', '.*');



