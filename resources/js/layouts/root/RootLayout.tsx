/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { Link, usePage } from '@inertiajs/react';
import React from 'react';

export function RootLayout({ children }) {
    const { auth } = usePage().props;

    return (
        <div className="flex min-h-screen flex-col bg-[#FDFDFC] text-[#1b1b18] dark:bg-[#0a0a0a] dark:text-[#EDEDEC]">
            {/* Navbar */}
            <header className="sticky top-0 z-30 w-full border-b border-gray-100 bg-[#FDFDFC]/80 backdrop-blur dark:border-gray-800 dark:bg-[#0a0a0a]/80">
                <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center">
                            <h1 className="text-xl font-bold tracking-tight">
                                Manage<span className="text-blue-600 dark:text-blue-400">It</span>
                            </h1>
                        </Link>
                        <nav className="hidden md:flex items-center space-x-6">
                            <Link href={route('features')} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                                Features
                            </Link>
                            {/*<Link href="#how-it-works" className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                                How It Works
                            </Link>*/}
                            <Link href={route('about')} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                                About
                            </Link>
                            <Link href={route('contact')} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400">
                                Contact
                            </Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            
                            {auth?.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        href={route('register')}
                                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                                    >
                                        Sign up
                                    </Link>
                                </>
                            )}
                            {/* Mobile menu button */}
                            <button className="md:hidden rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-white py-12 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                        <div className="col-span-2 lg:col-span-1">
                            <h2 className="text-xl font-bold tracking-tight">
                                Manage<span className="text-blue-600 dark:text-blue-400">It</span>
                            </h2>
                            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                                Project management built for developers.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Product</h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <Link href="/features" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/pricing" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                        Pricing
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/integrations" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                        Integrations
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Company</h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <Link href="/about" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                        About
                                    </Link>
                                </li>
                                {/* <li>
                                    <Link href="/blog" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                        Blog
                                    </Link>
                                </li> */}
                                <li>
                                    <Link href="/contact" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-400">Resources</h3>
                            <ul className="mt-4 space-y-4">
                                <li>
                                    <Link href="/docs" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                        Documentation
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/help" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/api" className="text-sm text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400">
                                        API
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-700">
                        <p className="text-center text-sm text-gray-400">
                            &copy; {new Date().getFullYear()} ManageIt. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default RootLayout;