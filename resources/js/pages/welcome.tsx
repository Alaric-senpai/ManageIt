import { Head, Link, usePage } from '@inertiajs/react';
import type { SharedData } from '@/types';
import {RootLayout} from '@/components/RootLayout'
export default function Welcome() {

    return (
        <>
        <RootLayout>
            <Head title="Welcome - ManageIt">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600,700" rel="stylesheet" />
            </Head>

            <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">

                {/* Hero Section */}
                <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 dark:from-gray-900 dark:to-[#0a0a0a]">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                                <span className="block">Project Management</span>
                                <span className="block mt-1 text-blue-600 dark:text-blue-400">Built for Developers</span>
                            </h1>
                            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                ManageIt streamlines your development workflow with powerful task tracking, 
                                team collaboration, and Git integration. Keep your projects on track without 
                                sacrificing development time.
                            </p>
                            <div className="mx-auto mt-8 flex max-w-lg flex-col justify-center gap-4 sm:flex-row">
                                <Link
                                    href={route('register')}
                                    className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                >
                                    Start Free Trial
                                </Link>
                                <Link
                                    href="#how-it-works"
                                    className="rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 dark:focus:ring-offset-gray-900"
                                >
                                    See How It Works
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="mt-16 flex justify-center">
                        <div className="relative w-full max-w-5xl rounded-lg border border-gray-200 bg-white p-2 shadow-lg dark:border-gray-700 dark:bg-gray-800 overflow-hidden">
                            {/* Browser mockup */}
                            <div className="flex h-6 items-center space-x-2 border-b border-gray-200 bg-gray-50 px-4 dark:border-gray-700 dark:bg-gray-900">
                                <div className="h-2 w-2 rounded-full bg-red-500"></div>
                                <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <div className="ml-2 h-3 w-3/4 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                            </div>
                            {/* Dashboard screenshot mockup */}
                            <div className="bg-white dark:bg-gray-800 h-[350px] sm:h-[450px] overflow-hidden">
                                <div className="flex h-full">
                                    {/* Sidebar */}
                                    <div className="hidden w-56 border-r border-gray-200 bg-gray-50 p-4 dark:border-gray-700 dark:bg-gray-900 sm:block">
                                        <div className="mb-4 h-8 w-32 rounded-md bg-gray-200 dark:bg-gray-700"></div>
                                        <div className="space-y-2">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="flex items-center space-x-2">
                                                    <div className="h-4 w-4 rounded-sm bg-blue-200 dark:bg-blue-900"></div>
                                                    <div className="h-4 w-24 rounded-md bg-gray-200 dark:bg-gray-700"></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {/* Main content */}
                                    <div className="flex-1 p-4">
                                        <div className="mb-4 flex items-center justify-between">
                                            <div className="h-6 w-48 rounded-md bg-gray-200 dark:bg-gray-700"></div>
                                            <div className="h-8 w-24 rounded-md bg-blue-500"></div>
                                        </div>
                                        <div className="mb-4 grid grid-cols-3 gap-4">
                                            {[...Array(3)].map((_, i) => (
                                                <div key={i} className="h-24 rounded-md bg-gray-100 p-3 dark:bg-gray-700">
                                                    <div className="mb-2 h-4 w-20 rounded-sm bg-gray-200 dark:bg-gray-600"></div>
                                                    <div className="h-4 w-full rounded-sm bg-gray-200 dark:bg-gray-600"></div>
                                                    <div className="mt-2 h-4 w-2/3 rounded-sm bg-gray-200 dark:bg-gray-600"></div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="rounded-md border border-gray-200 dark:border-gray-700">
                                            <div className="border-b border-gray-200 bg-gray-50 p-2 dark:border-gray-700 dark:bg-gray-900">
                                                <div className="h-4 w-32 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                            </div>
                                            <div className="p-4">
                                                {[...Array(4)].map((_, i) => (
                                                    <div key={i} className="mb-3 flex items-center justify-between rounded-md bg-white p-2 shadow-sm dark:bg-gray-800">
                                                        <div className="flex items-center space-x-3">
                                                            <div className="h-6 w-6 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                                            <div className="h-4 w-40 rounded-sm bg-gray-200 dark:bg-gray-700"></div>
                                                        </div>
                                                        <div className="h-6 w-20 rounded-full bg-green-100 dark:bg-green-900"></div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Features</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Everything developers need to manage projects
                            </p>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                Built by developers, for developers. ManageIt integrates seamlessly with your workflow.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Feature 1 */}
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-medium">Project Management</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Create and manage projects with customizable workflows, milestones, and deadlines. Track progress with visual dashboards.
                                </p>
                            </div>

                            {/* Feature 2 */}
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-medium">Task Management</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Create, assign, and track tasks with priority levels, estimates, and dependencies. Filter and search tasks with powerful queries.
                                </p>
                            </div>

                            {/* Feature 3 */}
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-medium">Team Collaboration</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Add team members, assign roles, and collaborate in real-time with comments, @mentions, and notifications.
                                </p>
                            </div>

                            {/* Feature 4 */}
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-medium">Deadline Tracking</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Set deadlines, receive reminders, and visualize project timelines with Gantt charts and calendar views.
                                </p>
                            </div>

                            {/* Feature 5 */}
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-medium">Git Integration</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Connect your GitHub, GitLab, or Bitbucket repositories. Link commits and PRs to tasks automatically.
                                </p>
                            </div>

                            {/* Feature 6 */}
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-700 dark:bg-gray-800">
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-lg font-medium">Performance Analytics</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Monitor project health, team velocity, and resource allocation with customizable reports and charts.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* How It Works */}
                <section id="how-it-works" className="bg-gray-50 py-16 dark:bg-gray-900">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">How It Works</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Simple workflow, powerful results
                            </p>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                ManageIt adapts to your team's workflow, not the other way around.
                            </p>
                        </div>

                        <div className="mt-16">
                            <div className="grid gap-12 lg:grid-cols-3">
                                {/* Step 1 */}
                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                        <span className="text-xl font-bold">1</span>
                                    </div>
                                    <h3 className="mb-3 text-xl font-medium">Create Your Project</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Set up your project with a name, description, and optional repository links. 
                                        Choose from templates or start from scratch.
                                    </p>
                                </div>

                                {/* Step 2 */}
                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                        <span className="text-xl font-bold">2</span>
                                    </div>
                                    <h3 className="mb-3 text-xl font-medium">Build Your Team</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Invite team members and assign roles. Set up teams, departments, 
                                        or custom groups to manage access permissions.
                                    </p>
                                </div>

                                {/* Step 3 */}
                                <div className="text-center">
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-200">
                                        <span className="text-xl font-bold">3</span>
                                    </div>
                                    <h3 className="mb-3 text-xl font-medium">Track & Deliver</h3>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Create tasks, set deadlines, and monitor progress. 
                                        Use board, list, or calendar views to visualize your workflow.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-16 flex justify-center">
                                <Link
                                    href={route('register')}
                                    className="rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                >
                                    Start Your Free Trial
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing */}
                <section id="pricing" className="py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Pricing</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Simple, transparent pricing
                            </p>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                No hidden fees, no contracts. Choose the plan that fits your team's needs.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-8 lg:grid-cols-3">
                            {/* Free Plan */}
                            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Free</h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Perfect for solo developers or small side projects.</p>
                                <p className="mt-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$0</p>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Forever free</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">1 GB storage</span>
                                    </li>
                                </ul>

                                <div className="mt-8">
                                    <Link
                                        href={route('register')}
                                        className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
                                    >
                                        Get Started
                                    </Link>
                                </div>
                            </div>

                            {/* Pro Plan */}
                            <div className="relative rounded-lg border border-blue-600 bg-white p-8 shadow-lg dark:bg-gray-800">
                                <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-blue-600 py-1 text-center text-xs font-semibold uppercase tracking-wide text-white">
                                    Most Popular
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Pro</h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">For growing development teams and businesses.</p>
                                <p className="mt-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">$19</p>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">per user / month</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">Unlimited projects</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">Unlimited team members</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">Advanced task management</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">Git integration</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">50 GB storage</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">Priority support</span>
                                    </li>
                                </ul>

                                <div className="mt-8">
                                    <Link
                                        href={route('register')}
                                        className="block w-full rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700"
                                    >
                                        Start Free Trial
                                    </Link>
                                </div>
                            </div>

                            {/* Enterprise Plan */}
                            <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">Enterprise</h3>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">For large teams and organizations with custom needs.</p>
                                <p className="mt-8 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">Custom</p>
                                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">Contact sales for pricing</p>

                                <ul className="mt-8 space-y-4 text-sm">
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">Everything in Pro</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">Custom integrations</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">Unlimited storage</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">Dedicated account manager</span>
                                    </li>
                                    <li className="flex items-center">
                                        <svg className="h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="ml-2 text-gray-600 dark:text-gray-300">SLA guarantees</span>
                                    </li>
                                </ul>

                                <div className="mt-8">
                                    <Link
                                        href="/contact"
                                        className="block w-full rounded-md border border-blue-600 bg-white px-4 py-2 text-center text-sm font-medium text-blue-600 hover:bg-blue-50 dark:bg-transparent dark:hover:bg-blue-900/10"
                                    >
                                        Contact Sales
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-gray-50 py-16 dark:bg-gray-900">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">Testimonials</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Loved by developers
                            </p>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                See what our users have to say about ManageIt.
                            </p>
                        </div>

                        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {/* Testimonial 1 */}
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium">Sarah Chen</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Frontend Lead at Acme Inc.</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    "ManageIt has transformed how our team tracks projects. The Git integration is seamless, 
                                    and the task management features are intuitive. We've seen a 30% increase in on-time delivery."
                                </p>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium">Miguel Rodriguez</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">CTO at TechLaunch</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    "As a tech startup, we needed a flexible project management tool that wouldn't 
                                    slow us down. ManageIt has been perfect - it's developer-friendly and scales with our team."
                                </p>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-full bg-gray-200 dark:bg-gray-700"></div>
                                    <div className="ml-3">
                                        <h3 className="text-sm font-medium">Alex Thompson</h3>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">Developer at CodeCraft</p>
                                    </div>
                                </div>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    "I've tried every project management tool out there, and ManageIt is the only one that 
                                    feels like it was built by developers who understand our workflow."
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">FAQ</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                                Frequently asked questions
                            </p>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                                Find answers to common questions about ManageIt.
                            </p>
                        </div>

                        <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-gray-700">
                            {/* Question 1 */}
                            <div className="py-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    How is ManageIt different from other project management tools?
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-gray-300">
                                    ManageIt is built specifically for developers, with native Git integration, 
                                    customizable workflows that match agile methodologies, and a clean, distraction-free 
                                    interface that helps teams stay focused and ship on time.
                                </p>
                            </div>

                            {/* Question 2 */}
                            <div className="py-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    Can I import projects from other tools?
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-gray-300">
                                    Yes! ManageIt provides importers for popular tools like Jira, Asana, Trello, and 
                                    GitHub Projects. Our migration wizards make it easy to bring over your existing 
                                    projects, tasks, and team structure.
                                </p>
                            </div>

                            {/* Question 3 */}
                            <div className="py-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    Is ManageIt secure?
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-gray-300">
                                    Absolutely. We use industry-standard encryption for all data, both in transit and at rest. 
                                    We're SOC 2 compliant and conduct regular security audits. Your code and data are never 
                                    shared with third parties.
                                </p>
                            </div>

                            {/* Question 4 */}
                            <div className="py-6">
                                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                    Do you offer discounts for startups or open source projects?
                                </h3>
                                <p className="mt-3 text-gray-600 dark:text-gray-300">
                                    Yes, we offer special pricing for early-stage startups and free accounts for 
                                    qualifying open source projects. Contact our sales team to learn more about 
                                    our startup and open source programs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="bg-blue-600 py-16 dark:bg-blue-800">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="mx-auto max-w-2xl text-center">
                            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Ready to ship faster?
                            </h2>
                            <p className="mx-auto mt-6 max-w-xl text-lg text-blue-100">
                                Join thousands of developers who are using ManageIt to build better software, faster.
                            </p>
                            <div className="mt-10 flex justify-center gap-x-6">
                                <Link
                                    href={route('register')}
                                    className="rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                                >
                                    Get Started
                                </Link>
                                <Link
                                    href="/contact"
                                    className="rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
                                >
                                    Contact Sales
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>


            </div>
        </RootLayout>
        </>
    );
}