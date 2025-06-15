import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem } from '@/types';
import { useForm } from '@inertiajs/react';
import React, { FormEventHandler, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { 
    Loader2Icon, 
    Tag, 
    Link, 
    Image, 
    Calendar as CalendarIcon, 
    CheckCircle2, 
    Code2,
    Database,
    FileCode2,
    Server,
    Globe,
    Clock,
    DollarSign,
    FileText,
    LockIcon,
    Github,
    ExternalLink
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Progress } from "@/components/ui/progress"

const breads: BreadcrumbItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
    {
        title: 'New project',
        href: '/projects.new',
    },
];

type newProject = {
    name: string;
    description: string;
    tags: string[];
    status: 'planning' | 'development' | 'testing' | 'production' | 'completed' | 'cancelled' | 'on_hold';
    isTeamProject: boolean;
    team_id?: string;
    github_url?: string;
    website_url?: string;
    project_type: 'web_app' | 'mobile_app' | 'desktop_app' | 'api' | 'library' | 'tool' | 'game' | 'other';
    banner_url?: string;
    technologies?: string[];
    database_type?: string;
    programming_language?: string;
    framework?: string;
    server_os?: string;
    deployment_environment?: string;
    has_backend?: boolean;
    has_frontend?: boolean;
    has_database?: boolean;
    start_date?: Date;
    end_date?: Date;
    estimated_hours?: number;
    actual_hours?: number;
    budget?: number;
    currency?: string;
    progress?: 'not_started' | 'planning' | 'design' | 'development' | 'testing' | 'deployment' | 'maintenance' | 'completed';
    notes?: string;
    client_name?: string;
    requirements?: string;
    features?: string;
    version_control?: string;
    repo_url?: string;
    commit_hash?: string;
    branch?: string;
    api_docs_url?: string;
    design_docs_url?: string;
    user_docs_url?: string;
    has_tests?: boolean;
    test_coverage?: string;
    is_secure?: boolean;
    security_notes?: string;
};

const projectTypes = [
    'web_app',
    'mobile_app',
    'desktop_app',
    'api',
    'library',
    'tool',
    'game',
    'other',
];
const projectStatus = [
    'planning',
    'development',
    'testing',
    'production',
    'completed',
    'cancelled',
    'on_hold',
];
const progressOptions = [
    'not_started',
    'planning',
    'design',
    'development',
    'testing',
    'deployment',
    'maintenance',
    'completed'
];
const versionControlOptions = ['Git', 'SVN', 'Other'];
const currencyOptions = ['USD', 'EUR', 'GBP', 'KES']; // Add more as needed

// Helper function for progress value conversion
const getProgressValue = (progress) => {
    const progressMap = {
        'not_started': 0,
        'planning': 15,
        'design': 30,
        'development': 45,
        'testing': 60,
        'deployment': 75,
        'maintenance': 90,
        'completed': 100
    };
    return progressMap[progress] || 0;
};

// Helper function for status colors
const getStatusColor = (status) => {
    const statusColorMap = {
        'planning': 'bg-blue-500 dark:bg-blue-600',
        'development': 'bg-purple-500 dark:bg-purple-600',
        'testing': 'bg-yellow-500 dark:bg-yellow-600',
        'production': 'bg-green-500 dark:bg-green-600',
        'completed': 'bg-emerald-500 dark:bg-emerald-600',
        'cancelled': 'bg-red-500 dark:bg-red-600',
        'on_hold': 'bg-orange-500 dark:bg-orange-600',
    };
    return statusColorMap[status] || 'bg-gray-500 dark:bg-gray-600';
};

const NewProject = () => {
    const { data, errors, post, setData, processing, reset } = useForm<newProject>({
        name: ''.trim(),
        description: '',
        tags: [],
        status: 'planning',
        isTeamProject: false,
        team_id: '',
        github_url: '',
        website_url: '',
        project_type: 'other',
        banner_url: '',
        technologies: [],
        database_type: '',
        programming_language: '',
        framework: '',
        server_os: '',
        deployment_environment: '',
        has_backend: true,
        has_frontend: true,
        has_database: true,
        start_date: undefined,
        end_date: undefined,
        estimated_hours: undefined,
        actual_hours: undefined,
        budget: undefined,
        currency: 'USD',
        progress: 'not_started',
        notes: '',
        client_name: '',
        requirements: '',
        features: '',
        version_control: 'Git',
        repo_url: '',
        commit_hash: '',
        branch: '',
        api_docs_url: '',
        design_docs_url: '',
        user_docs_url: '',
        has_tests: false,
        test_coverage: '',
        is_secure: true,
        security_notes: '',
    });

    const [startDatePopoverOpen, setStartDatePopoverOpen] = useState(false);
    const [endDatePopoverOpen, setEndDatePopoverOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("basic");

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('projects.new.save'));
    };

    const addTag = (e: React.ChangeEvent<HTMLInputElement>) => {
      const data: string = e.target.value;
      const tags = data.split(',');
      // const filteredTags = [];
      // for (let tag of tags) {
      //     if (tag.trim() !== "") {
      //         filteredTags.push(tag.trim());
      //     }
      // }
      setData('tags', tags);
  };
  
  const addTechnology = (e: React.ChangeEvent<HTMLInputElement>) => {
      const data: string = e.target.value;
      const technologies = data.split(',');
      // const filteredTechnologies = [];
      // for (let tech of technologies) {
      //     if (tech.trim() !== "") {
      //         filteredTechnologies.push(tech.trim());
      //     }
      // }
      setData('technologies', technologies);
  };

    // Calculate progress percentage for visual indicator
    const progressPercentage = getProgressValue(data.progress);

    return (
        <AppLayout breadcrumbs={breads}>
            <div className="container p-4 md:p-6 lg:p-8 mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-600 dark:from-indigo-300 dark:to-purple-500 text-transparent bg-clip-text">
                        Create a New Project
                    </h2>
                    <p className="text-center mt-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Document your work, showcase your skills, and keep track of all your development projects
                        in one centralized location.
                    </p>
                </motion.div>

                <Card className="shadow-xl border dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border-b dark:border-gray-800">
                        <CardTitle className="text-2xl flex items-center gap-2">
                            <FileCode2 className="h-6 w-6 text-indigo-500" />
                            Project Details
                        </CardTitle>
                        <CardDescription className="text-gray-600 dark:text-gray-300">
                            Fill in the form below to add a new project to your portfolio. Fields marked with <span className="text-red-500">*</span> are required.
                        </CardDescription>
                    </CardHeader>
                    
                    <Tabs defaultValue="basic" className="w-full" onValueChange={setActiveTab}>
                        <div className="px-6 pt-4 border-b dark:border-gray-800">
                            <TabsList className="grid grid-cols-4 lg:grid-cols-5 w-full bg-gray-100 dark:bg-gray-800">
                                <TabsTrigger value="basic" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                                    <div className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        <span className="hidden sm:inline">Basics</span>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger value="technical" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                                    <div className="flex items-center gap-2">
                                        <Code2 className="h-4 w-4" />
                                        <span className="hidden sm:inline">Technical</span>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger value="management" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span className="hidden sm:inline">Management</span>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger value="version" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                                    <div className="flex items-center gap-2">
                                        <Github className="h-4 w-4" />
                                        <span className="hidden sm:inline">Version Control</span>
                                    </div>
                                </TabsTrigger>
                                <TabsTrigger value="preview" className="hidden lg:flex data-[state=active]:bg-white dark:data-[state=active]:bg-gray-700">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle2 className="h-4 w-4" />
                                        <span className="hidden sm:inline">Preview</span>
                                    </div>
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <CardContent className="p-6">
                                <TabsContent value="basic" className="mt-0 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Project Name */}
                                        <div>
                                            <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">
                                                Project Name <span className="text-red-500">*</span>
                                            </Label>
                                            <Input
                                                id="name"
                                                type="text"
                                                required
                                                disabled={processing}
                                                placeholder="Project name (e.g., E-commerce Website)"
                                                value={data.name}
                                                onChange={(e) =>
                                                    setData('name', e.target.value)
                                                }
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 focus:ring-indigo-500 focus:border-indigo-500"
                                            />
                                            <AnimatePresence>
                                                {errors.name && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 5 }}
                                                        className="text-red-500 mt-2 text-sm"
                                                    >
                                                        {errors.name}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    
                                        {/* Project Status */}
                                        <div>
                                            <Label htmlFor="status" className="text-gray-700 dark:text-gray-300">
                                                Project Status <span className="text-red-500">*</span>
                                            </Label>
                                            <Select
                                                onValueChange={(e) => setData('status', e as any)}
                                                defaultValue={data.status}
                                            >
                                                <SelectTrigger className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                                                    <SelectValue placeholder="Select a project Status" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                                                    <SelectGroup>
                                                        <SelectLabel className="text-gray-700 dark:text-gray-300">
                                                            Available project Statuses
                                                        </SelectLabel>
                                                        {projectStatus.map((status, index) => (
                                                            <SelectItem
                                                                key={index}
                                                                value={status}
                                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                                            >
                                                                <div className="flex items-center gap-2">
                                                                    <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`}></div>
                                                                    {status.charAt(0).toUpperCase() + status.slice(1)}
                                                                </div>
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        
                                        {/* Project Type & Client */}
                                        <div>
                                            <Label htmlFor="project_type" className="text-gray-700 dark:text-gray-300">
                                                Project Type <span className="text-red-500">*</span>
                                            </Label>
                                            <Select
                                                onValueChange={(e) => setData('project_type', e as any)}
                                                defaultValue={data.project_type}
                                            >
                                                <SelectTrigger className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                                                    <SelectValue placeholder="Select a project type" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                                                    <SelectGroup>
                                                        <SelectLabel className="text-gray-700 dark:text-gray-300">
                                                            Available project types
                                                        </SelectLabel>
                                                        {projectTypes.map((type, index) => (
                                                            <SelectItem
                                                                key={index}
                                                                value={type}
                                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                                            >
                                                                {type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        
                                        <div>
                                            <Label htmlFor="client_name" className="text-gray-700 dark:text-gray-300">
                                                Client Name (Optional)
                                            </Label>
                                            <Input
                                                id="client_name"
                                                type="text"
                                                placeholder="Enter Client Name"
                                                value={data.client_name || ''}
                                                onChange={(e) => setData('client_name', e.target.value)}
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        {/* Team Related */}
                                        <div className="md:col-span-2">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Switch
                                                    id="isTeamProject"
                                                    checked={data.isTeamProject}
                                                    onCheckedChange={() => 
                                                        setData('isTeamProject', !data.isTeamProject)
                                                    }
                                                />
                                                <Label 
                                                    htmlFor="isTeamProject"
                                                    className="text-gray-700 dark:text-gray-300 cursor-pointer select-none"
                                                >
                                                    This is a team project
                                                </Label>
                                            </div>
                                            
                                            {data.isTeamProject && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="mt-3"
                                                >
                                                    <Label htmlFor="team_id" className="text-gray-700 dark:text-gray-300">
                                                        Team ID
                                                    </Label>
                                                    <Input
                                                        id="team_id"
                                                        type="text"
                                                        placeholder="Enter team ID"
                                                        value={data.team_id || ''}
                                                        onChange={(e) => setData('team_id', e.target.value)}
                                                        className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                    />
                                                </motion.div>
                                            )}
                                        </div>
                                        
                                        {/* Description */}
                                        <div className="md:col-span-2">
                                            <Label htmlFor="description" className="text-gray-700 dark:text-gray-300">
                                                Project Description <span className="text-red-500">*</span>
                                            </Label>
                                            <Textarea
                                                id="description"
                                                value={data.description}
                                                onChange={(e) =>
                                                    setData('description', e.target.value)
                                                }
                                                rows={4}
                                                placeholder="Describe your project in detail..."
                                                className="mt-1 resize-y min-h-32 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                            <AnimatePresence>
                                                {errors.description && (
                                                    <motion.p
                                                        initial={{ opacity: 0, y: -5 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        exit={{ opacity: 0, y: 5 }}
                                                        className="text-red-500 mt-2 text-sm"
                                                    >
                                                        {errors.description}
                                                    </motion.p>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                        
                                        {/* Tags */}
                                        <div className="md:col-span-2">
                                            <Label htmlFor="tags" className="text-gray-700 dark:text-gray-300">
                                                Project Tags
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Tag className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="tags"
                                                    value={data.tags}
                                                    onChange={addTag}
                                                    placeholder="Add tags separated by commas (e.g., web, design, api)"
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {data.tags && data.tags.length > 0 ? (
                                                    data.tags.map((tag, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="secondary"
                                                            className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/40"
                                                        >
                                                            {tag}
                                                        </Badge>
                                                    ))
                                                ) : (
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">No tags added yet</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="technical" className="mt-0 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* URLs */}
                                        <div>
                                            <Label htmlFor="github_url" className="text-gray-700 dark:text-gray-300">
                                                GitHub Repository URL
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Github className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="github_url"
                                                    type="url"
                                                    placeholder="https://github.com/your-username/your-repo"
                                                    value={data.github_url || ''}
                                                    onChange={(e) =>
                                                        setData('github_url', e.target.value)
                                                    }
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <Label htmlFor="website_url" className="text-gray-700 dark:text-gray-300">
                                                Project Website URL
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Globe className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="website_url"
                                                    type="url"
                                                    placeholder="https://your-project.com"
                                                    value={data.website_url || ''}
                                                    onChange={(e) =>
                                                        setData('website_url', e.target.value)
                                                    }
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        </div>
                                        
                                        <div>
                                            <Label htmlFor="banner_url" className="text-gray-700 dark:text-gray-300">
                                                Banner Image URL
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Image className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="banner_url"
                                                    type="url"
                                                    placeholder="https://example.com/banner.jpg"
                                                    value={data.banner_url || ''}
                                                    onChange={(e) =>
                                                        setData('banner_url', e.target.value)
                                                    }
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Programming Language & Framework */}
                                        <div>
                                            <Label htmlFor="programming_language" className="text-gray-700 dark:text-gray-300">
                                                Programming Language
                                            </Label>
                                            <Input
                                                id="programming_language"
                                                type="text"
                                                placeholder="e.g., JavaScript, Python, PHP"
                                                value={data.programming_language || ''}
                                                onChange={(e) => setData('programming_language', e.target.value)}
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        <div>
                                            <Label htmlFor="framework" className="text-gray-700 dark:text-gray-300">
                                                Framework
                                            </Label>
                                            <Input
                                                id="framework"
                                                type="text"
                                                placeholder="e.g., React, Laravel, Django"
                                                value={data.framework || ''}
                                                onChange={(e) => setData('framework', e.target.value)}
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        {/* Database & Server */}
                                        <div>
                                            <Label htmlFor="database_type" className="text-gray-700 dark:text-gray-300">
                                                Database Type
                                            </Label>
                                            <Input
                                                id="database_type"
                                                type="text"
                                                placeholder="e.g., PostgreSQL, MySQL, MongoDB"
                                                value={data.database_type || ''}
                                                onChange={(e) => setData('database_type', e.target.value)}
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        <div>
                                            <Label htmlFor="server_os" className="text-gray-700 dark:text-gray-300">
                                                Server OS
                                            </Label>
                                            <Input
                                                id="server_os"
                                                type="text"
                                                placeholder="e.g., Ubuntu, Windows Server"
                                                value={data.server_os || ''}
                                                onChange={(e) => setData('server_os', e.target.value)}
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        {/* Deployment Environment */}
                                        <div>
                                            <Label htmlFor="deployment_environment" className="text-gray-700 dark:text-gray-300">
                                                Deployment Environment
                                            </Label>
                                            <Input
                                                id="deployment_environment"
                                                type="text"
                                                placeholder="e.g., AWS, Azure, Heroku"
                                                value={data.deployment_environment || ''}
                                                onChange={(e) => setData('deployment_environment', e.target.value)}
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        {/* Technologies */}
                                        <div className="md:col-span-2">
                                            <Label htmlFor="technologies" className="text-gray-700 dark:text-gray-300">
                                                Technologies Used
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Code2 className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="technologies"
                                                    type='text'
                                                    value={data.technologies}
                                                    onChange={addTechnology}
                                                    placeholder="Add technologies separated by commas (e.g., React, Node.js, Docker)"
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                            <div className="mt-2 flex flex-wrap gap-2">
                                                {data.technologies && data.technologies.length > 0 ? (
                                                    data.technologies.map((tech, index) => (
                                                        <Badge
                                                            key={index}
                                                            variant="secondary"
                                                            className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40"
                                                        >
                                                            {tech}
                                                        </Badge>
                                                    ))
                                                ) : (
                                                    <span className="text-sm text-gray-500 dark:text-gray-400">No technologies added yet</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="management" className="mt-0 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Start Date */}
                                        <div>
                                            <Label htmlFor="start_date" className="text-gray-700 dark:text-gray-300">
                                                Project Start Date
                                            </Label>
                                            <Popover open={startDatePopoverOpen} onOpenChange={setStartDatePopoverOpen}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal",
                                                            !data.start_date && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {data.start_date ? (
                                                            <span>{format(data.start_date, 'PPP')}</span>
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={data.start_date}
                                                        onSelect={(date) => {
                                                            setData('start_date', date);
                                                            setStartDatePopoverOpen(false);
                                                        }}
                                                        numberOfMonths={1}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        
                                        {/* End Date */}
                                        <div>
                                            <Label htmlFor="end_date" className="text-gray-700 dark:text-gray-300">
                                                Project End Date
                                            </Label>
                                            <Popover open={endDatePopoverOpen} onOpenChange={setEndDatePopoverOpen}>
                                                <PopoverTrigger asChild>
                                                    <Button
                                                        variant={"outline"}
                                                        className={cn(
                                                            "w-[240px] pl-3 text-left font-normal",
                                                            !data.end_date && "text-muted-foreground"
                                                        )}
                                                    >
                                                        {data.end_date ? (
                                                            <span>{format(data.end_date, 'PPP')}</span>
                                                        ) : (
                                                            <span>Pick a date</span>
                                                        )}
                                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                    </Button>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-auto p-0" align="start">
                                                    <Calendar
                                                        mode="single"
                                                        selected={data.end_date}
                                                        onSelect={(date) => {
                                                            setData('end_date', date);
                                                            setEndDatePopoverOpen(false);
                                                        }}
                                                        numberOfMonths={1}
                                                    />
                                                </PopoverContent>
                                            </Popover>
                                        </div>
                                        
                                        {/* Estimated Hours */}
                                        <div>
                                            <Label htmlFor="estimated_hours" className="text-gray-700 dark:text-gray-300">
                                                Estimated Hours
                                            </Label>
                                            <Input
                                                id="estimated_hours"
                                                type="number"
                                                placeholder="e.g., 120"
                                                value={data.estimated_hours || ''}
                                                onChange={(e) => 
                                                    setData('estimated_hours', e.target.value ? parseInt(e.target.value) : undefined)
                                                }
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        {/* Actual Hours */}
                                        <div>
                                            <Label htmlFor="actual_hours" className="text-gray-700 dark:text-gray-300">
                                                Actual Hours
                                            </Label>
                                            <Input
                                                id="actual_hours"
                                                type="number"
                                                placeholder="e.g., 150"
                                                value={data.actual_hours || ''}
                                                onChange={(e) => 
                                                    setData('actual_hours', e.target.value ? parseInt(e.target.value) : undefined)
                                                }
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        {/* Budget */}
                                        <div>
                                            <Label htmlFor="budget" className="text-gray-700 dark:text-gray-300">
                                                Project Budget
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <DollarSign className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="budget"
                                                    type="number"
                                                    min={0}
                                                    placeholder="e.g., 5000"
                                                    value={data.budget || ''}
                                                    onChange={(e) => 
                                                        setData('budget', e.target.value ? parseFloat(e.target.value) : undefined)
                                                    }
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Currency */}
                                        <div>
                                            <Label htmlFor="currency" className="text-gray-700 dark:text-gray-300">
                                                Currency
                                            </Label>
                                            <Select
                                                onValueChange={(e) => setData('currency', e)}
                                                defaultValue={data.currency}
                                            >
                                                <SelectTrigger className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                                                    <SelectValue placeholder="Select currency" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                                                    <SelectGroup>
                                                        <SelectLabel className="text-gray-700 dark:text-gray-300">
                                                            Available currencies
                                                        </SelectLabel>
                                                        {currencyOptions.map((currency, index) => (
                                                            <SelectItem
                                                                key={index}
                                                                value={currency}
                                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                                            >
                                                                {currency}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        
                                        {/* Progress */}
                                        <div className="md:col-span-2">
                                            <Label htmlFor="progress" className="text-gray-700 dark:text-gray-300">
                                                Project Progress
                                            </Label>
                                            <div className="mt-1 flex items-center justify-between">
                                                <Select
                                                    onValueChange={(e) => {
                                                        setData('progress', e);
                                                    }}
                                                    defaultValue={data.progress}
                                                >
                                                    <SelectTrigger className="w-[200px] bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                                                        <SelectValue placeholder="Select progress" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                                                        <SelectGroup>
                                                            <SelectLabel className="text-gray-700 dark:text-gray-300">
                                                                Available progress stages
                                                            </SelectLabel>
                                                            {progressOptions.map((option, index) => (
                                                                <SelectItem
                                                                    key={index}
                                                                    value={option}
                                                                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                                                >
                                                                    {option.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                                                </SelectItem>
                                                            ))}
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                                <Progress value={progressPercentage} className="w-64 h-3 bg-gray-200 dark:bg-gray-700" />
                                            </div>
                                            <div className="ml-[216px] text-sm text-gray-600 dark:text-gray-300">
                                                {progressPercentage}%
                                            </div>
                                        </div>
                                        
                                        {/* Notes */}
                                        <div className="md:col-span-2">
                                            <Label htmlFor="notes" className="text-gray-700 dark:text-gray-300">
                                                Project Notes
                                            </Label>
                                            <Textarea
                                                id="notes"
                                                value={data.notes}
                                                onChange={(e) =>
                                                    setData('notes', e.target.value)
                                                }
                                                rows={4}
                                                placeholder="Add any additional notes about the project..."
                                                className="mt-1 resize-y min-h-32 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="version" className="mt-0 space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Version Control System */}
                                        <div>
                                            <Label htmlFor="version_control" className="text-gray-700 dark:text-gray-300">
                                                Version Control System
                                            </Label>
                                            <Select
                                                onValueChange={(e) => setData('version_control', e)}
                                                defaultValue={data.version_control}
                                            >
                                                <SelectTrigger className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700">
                                                    <SelectValue placeholder="Select version control" />
                                                </SelectTrigger>
                                                <SelectContent className="bg-white dark:bg-gray-800 border dark:border-gray-700">
                                                    <SelectGroup>
                                                        <SelectLabel className="text-gray-700 dark:text-gray-300">
                                                            Available version control systems
                                                        </SelectLabel>
                                                        {versionControlOptions.map((vcs, index) => (
                                                            <SelectItem
                                                                key={index}
                                                                value={vcs}
                                                                className="hover:bg-gray-100 dark:hover:bg-gray-700"
                                                            >
                                                                {vcs}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </div>
                                        
                                        {/* Repository URL */}
                                        <div>
                                            <Label htmlFor="repo_url" className="text-gray-700 dark:text-gray-300">
                                                Repository URL
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <Link className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="repo_url"
                                                    type="url"
                                                    placeholder="https://github.com/your-username/your-repo.git"
                                                    value={data.repo_url || ''}
                                                    onChange={(e) =>
                                                        setData('repo_url', e.target.value)
                                                    }
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Commit Hash */}
                                        <div>
                                            <Label htmlFor="commit_hash" className="text-gray-700 dark:text-gray-300">
                                                Latest Commit Hash
                                            </Label>
                                            <Input
                                                id="commit_hash"
                                                type="text"
                                                placeholder="e.g., abc123def456"
                                                value={data.commit_hash || ''}
                                                onChange={(e) => setData('commit_hash', e.target.value)}
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        {/* Branch */}
                                        <div>
                                            <Label htmlFor="branch" className="text-gray-700 dark:text-gray-300">
                                                Current Branch
                                            </Label>
                                            <Input
                                                id="branch"
                                                type="text"
                                                placeholder="e.g., main, develop"
                                                value={data.branch || ''}
                                                onChange={(e) => setData('branch', e.target.value)}
                                                className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                            />
                                        </div>
                                        
                                        {/* API Docs URL */}
                                        <div>
                                            <Label htmlFor="api_docs_url" className="text-gray-700 dark:text-gray-300">
                                                API Documentation URL
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FileCode2 className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="api_docs_url"
                                                    type="url"
                                                    placeholder="https://your-project.com/api/docs"
                                                    value={data.api_docs_url || ''}
                                                    onChange={(e) =>
                                                        setData('api_docs_url', e.target.value)
                                                    }
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Design Docs URL */}
                                        <div>
                                            <Label htmlFor="design_docs_url" className="text-gray-700 dark:text-gray-300">
                                                Design Documentation URL
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FileCode2 className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="design_docs_url"
                                                    type="url"
                                                    placeholder="https://your-project.com/design/docs"
                                                    value={data.design_docs_url || ''}
                                                    onChange={(e) =>
                                                        setData('design_docs_url', e.target.value)
                                                    }
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* User Docs URL */}
                                        <div>
                                            <Label htmlFor="user_docs_url" className="text-gray-700 dark:text-gray-300">
                                                User Documentation URL
                                            </Label>
                                            <div className="relative mt-1">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <FileCode2 className="h-4 w-4 text-gray-400" />
                                                </div>
                                                <Input
                                                    id="user_docs_url"
                                                    type="url"
                                                    placeholder="https://your-project.com/user/docs"
                                                    value={data.user_docs_url || ''}
                                                    onChange={(e) =>
                                                        setData('user_docs_url', e.target.value)
                                                    }
                                                    className="pl-10 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        </div>
                                        
                                        {/* Has Tests */}
                                        <div className="flex items-center gap-2">
                                            <Switch
                                                id="has_tests"
                                                checked={data.has_tests}
                                                onCheckedChange={() => 
                                                    setData('has_tests', !data.has_tests)
                                                }
                                            />
                                            <Label 
                                                htmlFor="has_tests"
                                                className="text-gray-700 dark:text-gray-300 cursor-pointer select-none"
                                            >
                                                This project has tests
                                            </Label>
                                        </div>
                                        
                                        {data.has_tests && (
                                            <div className="mt-3">
                                                <Label htmlFor="test_coverage" className="text-gray-700 dark:text-gray-300">
                                                    Test Coverage
                                                </Label>
                                                <Input
                                                    id="test_coverage"
                                                    type="text"
                                                    placeholder="e.g., 85%"
                                                    value={data.test_coverage || ''}
                                                    onChange={(e) => setData('test_coverage', e.target.value)}
                                                    className="mt-1 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        )}
                                        
                                        {/* Is Secure */}
                                        <div className="flex items-center gap-2">
                                            <Switch
                                                id="is_secure"
                                                checked={data.is_secure}
                                                onCheckedChange={() => 
                                                    setData('is_secure', !data.is_secure)
                                                }
                                            />
                                            <Label 
                                                htmlFor="is_secure"
                                                className="text-gray-700 dark:text-gray-300 cursor-pointer select-none"
                                            >
                                                This project follows security best practices
                                            </Label>
                                        </div>
                                        
                                        {data.is_secure && (
                                            <div className="mt-3">
                                                <Label htmlFor="security_notes" className="text-gray-700 dark:text-gray-300">
                                                    Security Notes
                                                </Label>
                                                <Textarea
                                                    id="security_notes"
                                                    value={data.security_notes}
                                                    onChange={(e) =>
                                                        setData('security_notes', e.target.value)
                                                    }
                                                    rows={3}
                                                    placeholder="Describe the security measures implemented in the project..."
                                                    className="mt-1 resize-y min-h-32 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="preview" className="mt-0 space-y-6">
                                    <div className="p-6 border rounded-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                            Project Preview
                                        </h3>
                                        
                                        <div className="space-y-4">
                                            <div>
                                                <strong className="text-gray-600 dark:text-gray-300">Project Name:</strong> {data.name || 'Not provided'}
                                            </div>
                                            
                                            <div>
                                                <strong className="text-gray-600 dark:text-gray-300">Project Status:</strong>
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs ${getStatusColor(data.status)} text-white`}>
                                                    {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
                                                </span>
                                            </div>
                                            
                                            <div>
                                                <strong className="text-gray-600 dark:text-gray-300">Project Type:</strong> {data.project_type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                            </div>
                                            
                                            {data.client_name && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">Client Name:</strong> {data.client_name}
                                                </div>
                                            )}
                                            
                                            <div>
                                                <strong className="text-gray-600 dark:text-gray-300">Project Description:</strong>
                                                <p className="mt-2 text-gray-600 dark:text-gray-300">{data.description || 'No description provided'}</p>
                                            </div>
                                            
                                            {data.tags && data.tags.length > 0 && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">Tags:</strong>
                                                    <div className="mt-2 flex flex-wrap gap-2">
                                                        {data.tags.map((tag, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="secondary"
                                                                className="bg-indigo-100 text-indigo-800 hover:bg-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:hover:bg-indigo-800/40"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {data.technologies && data.technologies.length > 0 && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">Technologies:</strong>
                                                    <div className="mt-2 flex flex-wrap gap-2">
                                                        {data.technologies.map((tech, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="secondary"
                                                                className="bg-blue-100 text-blue-800 hover:bg-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-800/40"
                                                            >
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {data.github_url && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">GitHub Repository:</strong> <a href={data.github_url} className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300" target="_blank" rel="noopener noreferrer">{data.github_url}</a>
                                                </div>
                                            )}
                                            
                                            {data.website_url && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">Project Website:</strong> <a href={data.website_url} className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300" target="_blank" rel="noopener noreferrer">{data.website_url}</a>
                                                </div>
                                            )}
                                            
                                            {data.progress && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">Project Progress:</strong>
                                                    <div className="mt-2 flex items-center justify-between">
                                                        <span>{data.progress.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} - {progressPercentage}%</span>
                                                        <Progress value={progressPercentage} className="w-64 h-3 bg-gray-200 dark:bg-gray-700" />
                                                    </div>
                                                </div>
                                            )}
                                            
                                            {data.notes && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">Notes:</strong>
                                                    <p className="mt-2 text-gray-600 dark:text-gray-300">{data.notes}</p>
                                                </div>
                                            )}
                                            
                                            {data.isTeamProject && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">Team Project:</strong> Yes
                                                    {data.team_id && (
                                                        <div className="mt-2">
                                                            <strong className="text-gray-600 dark:text-gray-300">Team ID:</strong> {data.team_id}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            
                                            {data.has_tests && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">Tests:</strong> Yes
                                                    {data.test_coverage && (
                                                        <div className="mt-2">
                                                            <strong className="text-gray-600 dark:text-gray-300">Test Coverage:</strong> {data.test_coverage}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                            
                                            {data.is_secure && (
                                                <div>
                                                    <strong className="text-gray-600 dark:text-gray-300">Security:</strong> Follows best practices
                                                    {data.security_notes && (
                                                        <div className="mt-2">
                                                            <strong className="text-gray-600 dark:text-gray-300">Security Notes:</strong>
                                                            <p className="mt-2 text-gray-600 dark:text-gray-300">{data.security_notes}</p>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </TabsContent>
                            </CardContent>
                            
                            <CardFooter className="px-6 py-4">
                                <Button 
                                    type="submit" 
                                    className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-400"
                                    disabled={processing}
                                >
                                    {processing ? (
                                        <span className="flex items-center gap-2">
                                            <Loader2Icon className="w-4 h-4 animate-spin" /> 
                                            Saving Project...
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-2">
                                            <FileCode2 className="w-4 h-4" /> 
                                            Create Project
                                        </span>
                                    )}
                                </Button>
                            </CardFooter>
                        </form>
                    </Tabs>
                </Card>
            </div>
        </AppLayout>
    );
};

export default NewProject;