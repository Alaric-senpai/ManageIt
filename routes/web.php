<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::get('/features', function(){
    return Inertia::render('features');
})->name('features');

Route::get('/about', function(){
    return Inertia::render('about');
})->name('about');


Route::get('/contact', function(){
    return Inertia::render('contact');
})->name('contact');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    // Route::get('projects', function(){
    //     $projects = [1,2,3,4,5];

    //     return Inertia::render('projects' ,['projects'=> $projects]);
    // })->name('projects');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
require __DIR__. '/projects.php';