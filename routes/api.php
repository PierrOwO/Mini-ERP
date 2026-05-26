<?php

use App\Http\Controllers\Api\ProductController;
use Illuminate\Routing\Route;

Route::prefix('v1')->group(function () {

    Route::apiResource('products', ProductController::class);

});
