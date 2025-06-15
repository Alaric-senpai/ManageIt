<?php

use App\Http\Controllers\ProjectsController;
use Illuminate\Support\Facades\Route;

// Project Routes
Route::middleware(['auth', 'verified'])->prefix('/projects')->group(function () {
    // Display all projects
    Route::get('/', [ProjectsController::class, 'create'])->name('projects');
    
    // Create new project
    Route::get('/new', [ProjectsController::class, 'newProject'])->name('projects.new');
    Route::post('/new', [ProjectsController::class, 'store'])->name('projects.new.save');
    
    // View specific project
    Route::get('/{project}', [ProjectsController::class, 'show'])->name('projects.show');
    
    // Edit project
    Route::get('/{project}/edit', [ProjectsController::class, 'edit'])->name('projects.edit');
    Route::put('/{project}', [ProjectsController::class, 'update'])->name('projects.update');
    
    // Delete project
    Route::delete('/{project}', [ProjectsController::class, 'destroy'])->name('projects.destroy');
});