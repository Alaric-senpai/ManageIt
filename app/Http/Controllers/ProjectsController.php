<?php

namespace App\Http\Controllers;

use App\Models\Project;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProjectsController extends Controller
{
    //

    public function create(Request $request)
    {
        // Get the currently authenticated user.
        $user = Auth::user();
    
        // Get the projects associated with the user.
        $projects = $user->projects;
    
        $pic = asset('storage/images/image2.png');

        // return <img src="$pic" alt="">;
        return Inertia::render('projects', ['projects' => $projects->toArray()]);
    }
    public function newProject()
    {
        return Inertia::render('projects/newproject');
    }
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
            'isTeamProject' => 'required',
            'team_id' => 'nullable',
            'github_url' => 'nullable',
            'website_url' => 'nullable',
            'tags' => 'nullable',
            'banner_url' => 'nullable',
            'status' => 'required',
            'project_type' => 'required',
            'technologies' => 'nullable',
            'database_type' => 'nullable',
            'programming_language' => 'nullable',
            'framework' => 'nullable',
            'server_os' => 'nullable',
            'deployment_environment' => 'nullable',
            'has_backend' => 'nullable',
            'has_frontend' => 'nullable',
            'has_database' => 'nullable',
            'start_date' => 'nullable',
            'end_date' => 'nullable',
            'estimated_hours' => 'nullable',
            'actual_hours' => 'nullable',
            'budget' => 'nullable',
            'currency' => 'nullable',
            'progress' => 'nullable',
            'notes' => 'nullable',
            'client_name' => 'nullable',
             'requirements' => 'nullable',
            'features' => 'nullable',
            'version_control' => 'nullable',
            'repo_url' => 'nullable',
            'commit_hash' => 'nullable',
            'branch' => 'nullable',
            'api_docs_url' => 'nullable',
            'design_docs_url' => 'nullable',
            'user_docs_url' => 'nullable',
            'has_tests' => 'nullable',
            'test_coverage' => 'nullable',
            'is_secure' => 'nullable',
            'security_notes' => 'nullable',
        ]);

        $validatedData['user_id'] = auth()->id();
        // if (isset($validatedData['tags'])) {
        //     $validatedData['tags'] = json_encode($validatedData['tags']);
        // }
        // if (isset($validatedData['technologies'])) {
        //     $validatedData['technologies'] = json_encode($validatedData['technologies']);
        // }
  // Format datetime values
        if (isset($validatedData['start_date'])) {
            $validatedData['start_date'] = date('Y-m-d H:i:s', strtotime($validatedData['start_date']));
        }
        if (isset($validatedData['end_date'])) {
            $validatedData['end_date'] = date('Y-m-d H:i:s', strtotime($validatedData['end_date']));
        }

        Project::create($validatedData);

        $user = Auth::user();
        $userProjects = $user->projects;




        return to_route('projects', ['projects' => $userProjects]);
    }
    public function show($id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('projects/projectDetails', ['project' => $project]);
    }
    public function edit($id)
    {
        $project = Project::findOrFail($id);
        return Inertia::render('ProjectEdit', ['project' => $project]);
    }
    public function update(Request $request, $id)
    {
        $project = Project::findOrFail($id);
        
        $validatedData = $request->validate([
            // Add your validation rules here
        ]);
        
        $project->update($validatedData);
        
        return redirect()->route('projects.index');
    }
    public function destroy($id)
    {
        $project = Project::findOrFail($id);
        $project->delete();
        
        return redirect()->route('projects.index');
    }
}
