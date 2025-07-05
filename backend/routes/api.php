<?php

use App\Http\Controllers\ContactController;
use Illuminate\Support\Facades\Route;

Route::group([], function () {
    Route::get('/contacts', [ContactController::class, 'index']);
    Route::post('/contacts', [ContactController::class, 'store']);
});