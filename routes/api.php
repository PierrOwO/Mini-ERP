<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ProductController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('v1')->group(function () {

    Route::apiResource('products', ProductController::class);
    // AUTH PUBLIC

    Route::post('/login', [AuthController::class, 'login']);

    // AUTH PROTECTED

    Route::middleware('auth:sanctum')->group(function () {

        Route::get('/user', [AuthController::class, 'user']);

        Route::post('/logout', [AuthController::class, 'logout']);

    });
});
