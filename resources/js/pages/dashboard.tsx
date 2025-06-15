import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import {ClipboardCheck, DollarSignIcon, ArrowUp10, CheckCircle} from 'lucide-react'

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
                    <div className="statcard text-emerald-400 dark:text-white">
                        <div className="statleft">
                            <h3>Total projects</h3>
                            <p>
                                20
                            </p>
                        </div>
                        <div className="staticon">
                            <ClipboardCheck size={20} />
                        </div>
                    </div>
                    <div className="statcard text-blue-900 dark:text-white">
                        <div className="statleft">
                            <h3>Ongoing Projects</h3>
                            <p>
                                20
                            </p>
                        </div>
                        <div className="staticon">
                            <ArrowUp10 size={20} />
                        </div>
                    </div>
                    <div className="statcard">
                        <div className="statleft">
                            <h3>Completed projects</h3>
                            <p>
                                20
                            </p>
                        </div>
                        <div className="staticon">
                            <CheckCircle size={20} />
                        </div>
                    </div>
                    <div className="statcard text-purple-600 dark:text-white">
                        <div className="statleft">
                            <h3 className="stattitle">Pricing Plan</h3>
                            <p>
                                free
                            </p>
                        </div>
                        <div className="staticon">
                            <DollarSignIcon size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
