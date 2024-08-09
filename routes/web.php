<?php

use App\Http\Controllers\DestinationController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/personal', [ProfileController::class, 'bookmark'])->middleware(['auth', 'verified'])->name('profile.personal');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::post('/bookmark', [DestinationController::class, 'bookmark'])->name('bookmark');
    Route::post('/unbookmark', [DestinationController::class, 'unbookmark'])->name('unbookmark');
});


Route::get('/about-us', function () {
    return Inertia::render('AboutUs');
})->name('about-us');

Route::get('/contact-us', function () {
    return Inertia::render('ContactUs');
})->name('contact-us');

Route::get('/destinations', [DestinationController::class, 'index'])->name('destinations');

Route::get('/destinations/{destination}', [DestinationController::class, 'show'])
    ->name('destinations.detail');

Route::post('/bookmark/destination/{destination}', [DestinationController::class, 'bookmark'])
    ->middleware(['auth'])->name('bookmark.destination');

Route::post('/unbookmark/destination/{destination}', [DestinationController::class, 'unbookmark'])
    ->middleware(['auth'])->name('bookmark.destination');

require __DIR__ . '/auth.php';
