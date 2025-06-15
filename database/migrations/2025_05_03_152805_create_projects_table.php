<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description');
            $table->timestamps();
            $table->boolean('isTeamProject')->default(false);
            $table->string('team_id')->nullable();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->json('tags')->nullable()->toArray();
            $table->enum('status', ['planning', 'development', 'testing', 'production', 'completed', 'cancelled', 'on_hold'])->default('planning');
            $table->string('github_url')->nullable();
            $table->string('website_url')->nullable();
            $table->enum('project_type', ['web_app', 'mobile_app', 'desktop_app', 'api', 'library', 'tool', 'game', 'other'])->default('other');
            $table->string('banner_url')->nullable();

            // Technical Details
            $table->json('technologies')->nullable()->toArray();
            $table->string('database_type')->nullable();
            $table->string('programming_language')->nullable();
            $table->string('framework')->nullable();
            $table->string('server_os')->nullable();
            $table->string('deployment_environment')->nullable();
            $table->boolean('has_backend')->nullable()->default(true);
            $table->boolean('has_frontend')->nullable()->default(true);
            $table->boolean('has_database')->nullable()->default(true);

            // Project Management
            $table->datetime('start_date')->nullable(); // Changed from date to datetime
            $table->datetime('end_date')->nullable();   // Changed from date to datetime
            $table->integer('estimated_hours')->nullable();
            $table->integer('actual_hours')->nullable();
            $table->integer('budget')->nullable();
            $table->string('currency')->nullable()->default('USD');
            $table->enum('progress', ['not_started', 'planning', 'design', 'development', 'testing', 'deployment', 'maintenance', 'completed'])->default('not_started');
            $table->text('notes')->nullable();
            $table->string('client_name')->nullable();
            $table->text('requirements')->nullable();
            $table->text('features')->nullable();

            // Version Control
            $table->string('version_control')->nullable()->default('Git');
            $table->string('repo_url')->nullable();
            $table->string('commit_hash')->nullable();
            $table->string('branch')->nullable();

            // Documentation
            $table->string('api_docs_url')->nullable();
            $table->string('design_docs_url')->nullable();
            $table->string('user_docs_url')->nullable();
            $table->boolean('has_tests')->nullable()->default(false);
            $table->string('test_coverage')->nullable();

            //Security
            $table->boolean('is_secure')->nullable()->default(true);
            $table->text('security_notes')->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('projects');
    }
};