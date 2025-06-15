import { cn, formatCurrency, formatDate, getStatusBadge, getTypeStyle } from "@/lib/utils";
import { Project} from "@/types";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@radix-ui/react-collapsible";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import {   Calendar, Code2, Zap, Database, Github, Globe, Server } from "lucide-react";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Link } from '@inertiajs/react';

const ProjectCard = ({ project }: { project: Project }) => {
    const defaultImage = 
    

      const tags = project.tags;
      console.log(tags)

      const technologies = project.technologies

      console.log(technologies)

      const mainimage = project.banner_url || 
  
      const [isOpen, setIsOpen] = useState(false);
  
      return (
          <motion.div
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full"
          >
              <Card className={cn(
                "transition-all duration-300 hover:shadow-xl hover:scale-[1.01] p-0 dark:bg-slate-400/20 pb-4",
                "border-border",
                "border-opacity-60",
                "overflow-hidden"
              )}>
                  <CardHeader className="relative p-0">
                      {mainimage ? (
                          <div className="relative h-48">
                              <img
                                  src={project.banner_url}
                                  alt={project.name}
                                  className="w-full h-48 object-cover"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                              <div className="absolute bottom-0 left-0 right-0 p-4">
                                  <Badge 
                                      variant="outline" 
                                      className={cn(getStatusBadge(project.status))}
                                  >
                                      {project.status}
                                  </Badge>
                              </div>
                          </div>
                      ) : (
                          <div className={cn(
                            "h-16 w-full",
                            "bg-gradient-to-r from-slate-700 via-slate-700/95 to-slate-600",
                            "flex items-center justify-between px-4 font-semibold"
                          )}> 
                              <span className="text-white">
                                {project.name}                              
                              </span>
                              <Badge 
                                  variant="outline" 
                                  className={cn(getStatusBadge(project.status))}
                              >
                                  {project.status}
                              </Badge>
                          </div>
                      )}
                      


                      <div className="p-4 pb-2">
                          <div className="flex justify-between items-start">
                              <CardTitle className="text-xl font-semibold">
                                  <Link href={`/projects/${project.id}`} className="hover:text-black transition-colors">
                                      {project.name}
                                  </Link>
                              </CardTitle>
                              
                              <Badge 
                                  variant="outline" 
                                  className={cn(getTypeStyle(project.project_type))}
                              >
                                  {project.project_type}
                              </Badge>
                          </div>
                          <CardDescription className="mt-1 flex items-center text-muted-foreground">
                              <Calendar className="h-3 w-3 mr-1" /> {formatDate(project.created_at)}
                          </CardDescription>
                      </div>
                  </CardHeader>
  
                  <CardContent className="p-4 pt-2 space-y-4">
                      <p className="text-foreground/80">
                          {project.description}
                      </p>
                      

                      {/*fix tags jere*/}
                      <div className="flex flex-wrap gap-2">
                        {/* {tags.length} */}
                          {/* {tags.map((tag, index) => (
                              <Badge
                                  key={index}
                                  variant="secondary"
                                  className="bg-primary/10 hover:bg-primary/20"
                              >
                                  #{tag}
                              </Badge>
                          ))}
                          {tags.length > 4 && (
                              <Badge variant="outline">
                                  +{tags.length - 4} more
                              </Badge>
                          )} */}
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2 text-sm">
                          {project.programming_language && (
                              <div className="flex items-center space-x-1 text-muted-foreground">
                                  <Code2 className="h-3 w-3" />
                                  <span>{project.programming_language}</span>
                              </div>
                          )}
                          
                          {project.framework && (
                              <div className="flex items-center space-x-1 text-muted-foreground">
                                  <Zap className="h-3 w-3" />
                                  <span>{project.framework}</span>
                              </div>
                          )}
                          
                          {project.database_type && (
                              <div className="flex items-center space-x-1 text-muted-foreground">
                                  <Database className="h-3 w-3" />
                                  <span>{project.database_type}</span>
                              </div>
                          )}
                          
                          {project.deployment_environment && (
                              <div className="flex items-center space-x-1 text-muted-foreground">
                                  <Server className="h-3 w-3" />
                                  <span>{project.deployment_environment}</span>
                              </div>
                          )}
                      </div>
                      
                      <Collapsible
                          open={isOpen}
                          onOpenChange={setIsOpen}
                          className="w-full"
                          >
                            <CollapsibleTrigger asChild className="w-full">
                              <Button variant="ghost" size="sm" className="text-xs">
                                  {isOpen ? "Show less" : "Show more"}
                              </Button>
                          </CollapsibleTrigger>                          
                          <CollapsibleContent className="mt-4">
                              <div className="flex justify-between items-center">
                                  <div className="flex space-x-4">
                                      {project.github_url && (
                                          <TooltipProvider>
                                              <Tooltip>
                                                  <TooltipTrigger asChild>
                                                      <a 
                                                          href={project.github_url} 
                                                          target="_blank" 
                                                          rel="noopener noreferrer"
                                                          className="text-muted-foreground hover:text-foreground transition-colors"
                                                      >
                                                          <Github className="h-5 w-5" />
                                                      </a>
                                                  </TooltipTrigger>
                                                  <TooltipContent>
                                                      <p>GitHub Repository</p>
                                                  </TooltipContent>
                                              </Tooltip>
                                          </TooltipProvider>
                                      )}
                                      
                                      {project.website_url && (
                                          <TooltipProvider>
                                              <Tooltip>
                                                  <TooltipTrigger asChild>
                                                      <a 
                                                          href={project.website_url} 
                                                          target="_blank" 
                                                          rel="noopener noreferrer"
                                                          className="text-muted-foreground hover:text-foreground transition-colors"
                                                      >
                                                          <Globe className="h-5 w-5" />
                                                      </a>
                                                  </TooltipTrigger>
                                                  <TooltipContent>
                                                      <p>Live Website</p>
                                                  </TooltipContent>
                                              </Tooltip>
                                          </TooltipProvider>
                                      )}
                                  </div>
                              
                                  {/*<ProjectDetailsDialog project={project} />*/}
                              </div>
                              <div className="space-y-4 text-sm">
                                  {project.progress && (
                                      <div className="space-y-1">
                                          <div className="flex justify-between">
                                              <span className="text-muted-foreground">Progress:</span>
                                              <span>{project.progress}</span>
                                          </div>
                                            {/*<Progress value={parseInt(project.progress) || 0} className="h-1" />*/}
                                      </div>
                                  )}
                                  
                                  <div className="grid grid-cols-2 gap-2">
                                      {project.start_date && (
                                          <div className="flex justify-between">
                                              <span className="text-muted-foreground">Start:</span>
                                              <span>{formatDate(project.start_date)}</span>
                                          </div>
                                      )}
                                      
                                      {project.end_date && (
                                          <div className="flex justify-between">
                                              <span className="text-muted-foreground">End:</span>
                                              <span>{formatDate(project.end_date)}</span>
                                          </div>
                                      )}
                                      
                                      {project.client_name && (
                                          <div className="flex justify-between">
                                              <span className="text-muted-foreground">Client:</span>
                                              <span>{project.client_name}</span>
                                          </div>
                                      )}
                                      
                                      {project.budget && (
                                          <div className="flex justify-between">
                                              <span className="text-muted-foreground">Budget:</span>
                                              <span>{formatCurrency(project.budget, project.currency)}</span>
                                          </div>
                                      )}
                                      
                                      {project.isTeamProject && (
                                          <div className="flex justify-between">
                                              <span className="text-muted-foreground">Team:</span>
                                              <span>Yes</span>
                                          </div>
                                      )}
                                  </div>
                              </div>
                          </CollapsibleContent>
                      </Collapsible>
                  </CardContent>
                  
                  <CardFooter className="p-4 pt-0 gap-5 flex justify-end ">

                      <Button> See details </Button>
                      <Button> Edit details </Button>


                  </CardFooter>
              </Card>
          </motion.div>
      );
  };

  export default ProjectCard