/* eslint-disable @typescript-eslint/no-unused-vars */
//@ts-nocheck
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Project} from '@/types';
import { usePage, Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { 
  PlusIcon, 
  Search, 
  Globe, 
  Code2, 
  Github,
  ExternalLink,
  Info
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn, formatCurrency, formatDate, getStatusBadge, getTypeStyle } from "@/lib/utils";
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger, DropdownMenuSeparator} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Progress } from "@/components/ui/progress";
import ProjectCard from '@/components/project-card';
import {Calendar} from 'lucide-react';
const breadcrumb: BreadcrumbItem[] = [
    {
        title: 'My projects',
        href: '/projects'
    }
];


export const ProjectDetailsDialog = ({ project }: {project:Project}) => {
  const tags = project.tags ? JSON.parse(JSON.stringify(project.tags)) : [];
  const technologies = project.technologies || [];
  

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto">
          <Info className="h-4 w-4 mr-2" />
          Details
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">{project.name}</DialogTitle>
          <DialogDescription>
            Complete project information and technical details
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          {/* Main Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold mb-2">General Information</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Created:</span>
                  <span>{formatDate(project.created_at)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <Badge variant="outline" className={cn(getStatusBadge(project.status))}>
                    {project.status}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <Badge variant="outline" className={cn(getTypeStyle(project.project_type))}>
                    {project.project_type}
                  </Badge>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Team Project:</span>
                  <span>{project.isTeamProject ? 'Yes' : 'No'}</span>
                </div>
                {project.team_id && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Team ID:</span>
                    <span>{project.team_id}</span>
                  </div>
                )}
                {project.client_name && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Client:</span>
                    <span>{project.client_name}</span>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Timeline & Budget</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Start Date:</span>
                  <span>{formatDate(project.start_date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">End Date:</span>
                  <span>{formatDate(project.end_date)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Est. Hours:</span>
                  <span>{project.estimated_hours || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Actual Hours:</span>
                  <span>{project.actual_hours || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Budget:</span>
                  <span>{project.budget ? formatCurrency(project.budget, project.currency) : 'N/A'}</span>
                </div>
                {project.progress && (
                  <div className="flex flex-col space-y-1">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Progress:</span>
                      <span>{project.progress}</span>
                    </div>
                    <Progress value={parseInt(project.progress)} className="h-2" />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Technologies */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Technologies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Language:</span>
                  <span>{project.programming_language || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Framework:</span>
                  <span>{project.framework || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Database:</span>
                  <span>{project.database_type || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Server OS:</span>
                  <span>{project.server_os || 'N/A'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Deployment:</span>
                  <span>{project.deployment_environment || 'N/A'}</span>
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Has Backend:</span>
                  <span>{project.has_backend ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Has Frontend:</span>
                  <span>{project.has_frontend ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Has Database:</span>
                  <span>{project.has_database ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Has Tests:</span>
                  <span>{project.has_tests ? 'Yes' : 'No'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Test Coverage:</span>
                  <span>{project.test_coverage || 'N/A'}</span>
                </div>
              </div>
            </div>
            
            {technologies.length > 0 && (
              <div className="mt-4">
                <p className="text-sm text-muted-foreground mb-2">Technologies:</p>
                <div className="flex flex-wrap gap-2">
                  {technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Links</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground flex items-center">
                    <Github className="h-4 w-4 mr-1" /> GitHub:
                  </span>
                  {project.github_url ? (
                    <a href={project.github_url} target="_blank" rel="noopener noreferrer" 
                      className="text-primary hover:underline flex items-center">
                      Link <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground flex items-center">
                    <Globe className="h-4 w-4 mr-1" /> Website:
                  </span>
                  {project.website_url ? (
                    <a href={project.website_url} target="_blank" rel="noopener noreferrer" 
                      className="text-primary hover:underline flex items-center">
                      Link <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground flex items-center">
                    <Code2 className="h-4 w-4 mr-1" /> Repository:
                  </span>
                  {project.repo_url ? (
                    <a href={project.repo_url} target="_blank" rel="noopener noreferrer" 
                      className="text-primary hover:underline flex items-center">
                      Link <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </div>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground flex items-center">
                    <Code2 className="h-4 w-4 mr-1" /> API Docs:
                  </span>
                  {project.api_docs_url ? (
                    <a href={project.api_docs_url} target="_blank" rel="noopener noreferrer" 
                      className="text-primary hover:underline flex items-center">
                      Link <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground flex items-center">
                    <Code2 className="h-4 w-4 mr-1" /> Design Docs:
                  </span>
                  {project.design_docs_url ? (
                    <a href={project.design_docs_url} target="_blank" rel="noopener noreferrer" 
                      className="text-primary hover:underline flex items-center">
                      Link <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground flex items-center">
                    <Code2 className="h-4 w-4 mr-1" /> User Docs:
                  </span>
                  {project.user_docs_url ? (
                    <a href={project.user_docs_url} target="_blank" rel="noopener noreferrer" 
                      className="text-primary hover:underline flex items-center">
                      Link <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                  ) : (
                    <span>N/A</span>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Version Control */}
          {project.version_control && (
            <div>
              <h4 className="text-lg font-semibold mb-2">Version Control</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">System:</span>
                  <span>{project.version_control}</span>
                </div>
                {project.branch && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Branch:</span>
                    <span>{project.branch}</span>
                  </div>
                )}
                {project.commit_hash && (
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Commit Hash:</span>
                    <code className="bg-muted px-2 py-1 rounded text-xs">{project.commit_hash}</code>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Notes & Security */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.notes && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Notes</h4>
                <p className="text-sm whitespace-pre-wrap bg-muted p-3 rounded-md">
                  {project.notes}
                </p>
              </div>
            )}
            
            {project.security_notes && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Security Notes</h4>
                <div className="flex mb-2">
                  <span className="text-sm font-medium mr-2">Is Secure:</span>
                  <Badge variant={project.is_secure ? "success" : "destructive"}>
                    {project.is_secure ? 'Yes' : 'No'}
                  </Badge>
                </div>
                <p className="text-sm whitespace-pre-wrap bg-muted p-3 rounded-md">
                  {project.security_notes}
                </p>
              </div>
            )}
          </div>
          
          {/* Requirements & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.requirements && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Requirements</h4>
                <p className="text-sm whitespace-pre-wrap bg-muted p-3 rounded-md">
                  {project.requirements}
                </p>
              </div>
            )}
            
            {project.features && (
              <div>
                <h4 className="text-lg font-semibold mb-2">Features</h4>
                <p className="text-sm whitespace-pre-wrap bg-muted p-3 rounded-md">
                  {project.features}
                </p>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-4">
          //@ts-expect-error
          {tags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="bg-primary/10 text-primary hover:bg-primary/20"
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export const ProjectsFilter = ({ 
    searchQuery, 
    setSearchQuery, 
    statusFilter, 
    setStatusFilter, 
    typeFilter, 
    setTypeFilter 
}) => {
    const statusOptions = ["All", "In Progress", "Completed", "Planning", "On Hold", "Cancelled"];
    const typeOptions = ["All", "Personal", "Client", "Open Source", "Team"];
    
    return (
        <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search projects..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
            </div>
            
            <div className="flex gap-2">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-28">
                            {statusFilter || "Status"}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {statusOptions.map((status) => (
                            <DropdownMenuItem
                                key={status}
                                onClick={() => setStatusFilter(status === "All" ? "" : status)}
                            >
                                {status}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
                
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="outline" className="w-28">
                            {typeFilter || "Type"}
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {typeOptions.map((type) => (
                            <DropdownMenuItem
                                key={type}
                                onClick={() => setTypeFilter(type === "All" ? "" : type)}
                            >
                                {type}
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

// ... 其余导入保持不变

const Projects = () => {
  const { projects } = usePage<{ projects: Project[] }>().props;
  
  // 确保 projects 是数组
  const safeProjects = projects || [];

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");
  const [viewMode, setViewMode] = useState("grid");
  
  // Filter projects based on search query and filters
  const filteredProjects = safeProjects.filter(project => {
      const matchesSearch = searchQuery === "" || 
          project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (project.tags && Array.isArray(project.tags) && project.tags.some(tag => 
              tag.toLowerCase().includes(searchQuery.toLowerCase())
          ));
          
      const matchesStatus = statusFilter === "" || project.status === statusFilter;
      const matchesType = typeFilter === "" || project.project_type === typeFilter;
      
      return matchesSearch && matchesStatus && matchesType;
  });

  return (
      <AppLayout breadcrumbs={breadcrumb}>
          <div className="container p-4 md:p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 mb-6">
                  <div>
                      <h2 className="text-3xl sm:text-4xl font-bold">
                          My projects
                      </h2>
                      <p className="text-muted-foreground mt-1">
                          Manage and track all your development projects
                      </p>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                      <Button variant="default" className="bg-primary hover:bg-primary/90" asChild>
                          <Link href={route('projects.new')}>
                              <PlusIcon size={18} className="mr-2" />
                              Add a project
                          </Link>
                      </Button>
                  </div>
              </div>
              
              <div className="mb-6">
                  <Tabs defaultValue="all" className="w-full">
                      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
                          <TabsList className="mb-4 md:mb-0">
                              <TabsTrigger value="all">All Projects</TabsTrigger>
                              <TabsTrigger value="active">Active</TabsTrigger>
                              <TabsTrigger value="completed">Completed</TabsTrigger>
                              {/*<TabsTrigger value="team">Team</TabsTrigger>*/}
                          </TabsList>
                          
                          <div className="flex items-center gap-2">
                              <Button 
                                  variant={viewMode === "grid" ? "default" : "outline"} 
                                  size="sm"
                                  onClick={() => setViewMode("grid")}
                                  className="w-10 p-0"
                              >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <rect width="7" height="7" x="3" y="3" rx="1" />
                                      <rect width="7" height="7" x="14" y="3" rx="1" />
                                      <rect width="7" height="7" x="3" y="14" rx="1" />
                                      <rect width="7" height="7" x="14" y="14" rx="1" />
                                  </svg>
                              </Button>
                              <Button 
                                  variant={viewMode === "list" ? "default" : "outline"} 
                                  size="sm"
                                  onClick={() => setViewMode("list")}
                                  className="w-10 p-0"
                              >
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                      <line x1="3" x2="21" y1="6" y2="6" />
                                      <line x1="3" x2="21" y1="12" y2="12" />
                                      <line x1="3" x2="21" y1="18" y2="18" />
                                  </svg>
                              </Button>
                          </div>
                      </div>
                      
                      <TabsContent value="all" className="mt-6">
                          <ProjectsFilter 
                              searchQuery={searchQuery}
                              setSearchQuery={setSearchQuery}
                              statusFilter={statusFilter}
                              setStatusFilter={setStatusFilter}
                              typeFilter={typeFilter}
                              setTypeFilter={setTypeFilter}
                          />
                          
                          <AnimatePresence>
                                  <div className={cn(
                                      viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : 
                                      "flex flex-col gap-4"
                                  )}>
                                      {filteredProjects.map( (project, index)=>{
  
                                        
                                        return (
                                          // <span key={index}>i </span>
                                          <ProjectCard key={project.id} project={project} />
                                        )
                                      }  )}
                                  </div>
                                  {projects.length < 1 && (

                                  <motion.div
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      className="flex flex-col items-center justify-center py-16 text-center"
                                      >
                                      <div className="bg-primary/10 p-4 rounded-full mb-4">
                                          <Search className="h-8 w-8 text-primary" />
                                      </div>
                                      <h3 className="text-xl font-medium mb-2">No projects found</h3>
                                      <p className="text-muted-foreground mb-6 max-w-md">
                                          {searchQuery || statusFilter || typeFilter ? 
                                              "No projects match your current filters. Try adjusting your search criteria." : 
                                              "You don't have any projects yet. Get started by adding your first project."}
                                      </p>
                                      <Button asChild>
                                          <Link href={route('projects.new')}>
                                              <PlusIcon size={18} className="mr-2" />
                                              Create your first project
                                          </Link>
                                      </Button>
                                  </motion.div>

                                    )}


                          </AnimatePresence>
                      </TabsContent>
                      {/*<TabsContent value="active" className="mt-6">
                            <ProjectsFilter 
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                statusFilter="In Progress"
                                setStatusFilter={setStatusFilter}
                                typeFilter={typeFilter}
                                setTypeFilter={setTypeFilter}
                            />
                            
                            <AnimatePresence>

                                {filteredProjects.filter(p => p.status === "In Progress").length > 0 ? (
                                    <div className={cn(
                                        viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : 
                                        "flex flex-col gap-4"
                                    )}>
                                        {filteredProjects
                                            .filter(p => p.status === "In Progress")
                                            .map((project) => (
                                                <ProjectCard key={project.id} project={project} />
                                            ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                                            <Zap className="h-8 w-8 text-primary" />
                                        </div>
                                        <h3 className="text-xl font-medium mb-2">No active projects</h3>
                                        <p className="text-muted-foreground mb-6 max-w-md">
                                            You don't have any projects currently in progress.
                                        </p>
                                        <Button asChild>
                                            <Link href={route('projects.new')}>
                                                <PlusIcon size={18} className="mr-2" />
                                                Start a new project
                                            </Link>
                                        </Button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                      </TabsContent>*/}
                      <TabsContent value="completed" className="mt-6">
                            <ProjectsFilter 
                                searchQuery={searchQuery}
                                setSearchQuery={setSearchQuery}
                                statusFilter="Completed"
                                setStatusFilter={setStatusFilter}
                                typeFilter={typeFilter}
                                setTypeFilter={setTypeFilter}
                            />
                            
                            <AnimatePresence>
                                {filteredProjects.filter(p => p.status === "Completed").length > 0 ? (
                                    <div className={cn(
                                        viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : 
                                        "flex flex-col gap-4"
                                    )}>
                                        {filteredProjects
                                            .filter(p => p.status === "Completed")
                                            .map((project) => (
                                                <ProjectCard key={project.id} project={project} />
                                            ))}
                                    </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="flex flex-col items-center justify-center py-16 text-center"
                                    >
                                        <div className="bg-primary/10 p-4 rounded-full mb-4">
                                            {/*<svg xmlns="<url id="" type="url" status="" title="" wc="">http://www.w3.org/2000/svg</url> " fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8 text-primary">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>*/}
                                        </div>
                                        <h3 className="text-xl font-medium mb-2">No completed projects</h3>
                                        <p className="text-muted-foreground mb-6 max-w-md">
                                            You don't have any completed projects yet.
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                      </TabsContent>
                       
                   
                      
                      
                      {/* 其他 TabsContent 保持不变 */}
                  </Tabs>
              </div>
          </div>
      </AppLayout>
  );
};
export default Projects;


