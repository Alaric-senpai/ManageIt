<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Project extends Model
{
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<string>
     */
    protected $fillable = [
        'name',
        'description',
        'isTeamProject',
        'team_id',
        'user_id',
        'tags',
        'status',
        'github_url',
        'website_url',
        'project_type',
        'banner_url',
        'technologies',
        'database_type',
        'programming_language',
        'framework',
        'server_os',
        'deployment_environment',
        'has_backend',
        'has_frontend',
        'has_database',
        'start_date',
        'end_date',
        'estimated_hours',
        'actual_hours',
        'budget',
        'currency',
        'progress',
        'notes',
        'client_name',
        'requirements',
        'features',
        'version_control',
        'repo_url',
        'commit_hash',
        'branch',
        'api_docs_url',
        'design_docs_url',
        'user_docs_url',
        'has_tests',
        'test_coverage',
        'is_secure',
        'security_notes'
    ];

    
}
