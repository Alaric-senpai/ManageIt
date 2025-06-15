import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Project {
    id: number;
    name: string;
    description: string;
    created_at: string;
    tags: any;
    banner_url: string;
    status: string;
    project_type: string;
    isTeamProject: boolean;
    team_id?: string;
    github_url?: string;
    website_url?: string;
    technologies?: any;
    database_type?: string;
    programming_language?: string;
    framework?: string;
    server_os?: string;
    deployment_environment?: string;
    has_backend?: boolean;
    has_frontend?: boolean;
    has_database?: boolean;
    start_date?: string;
    end_date?: string;
    estimated_hours?: number;
    actual_hours?: number;
    budget?: number;
    currency?: string;
    progress?: string;
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
}

