import React from 'react'
import { usePage, Link } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, Project} from '@/types';
import { cn, formatCurrency, formatDate, getStatusBadge, getTypeStyle } from "@/lib/utils";
import {Badge} from '@/components/ui/badge'

const projectDetails = () => {


	const {project} = usePage<{project:Project}>().props
      const mainimage = project.banner_url || 'images/image1.png'

		const breads:BreadcrumbItem[]=[
			{
				title: 'Projects',
				href: '/projects'
			},
			{
				title: project.name,
				href: '#'
			}
		];


	return (
		<AppLayout breadcrumbs={breads}>
			<div className="container p-5 mx-auto">
				<div className="relative">
	                  <img
	                      src={mainimage}
	                      alt={project.name}
	                      className="w-full h-48 md:min-h-[500px] object-cover"
	                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 dark:from-slate-700/90 to-transparent dark:to-slate-600/10 " />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                      <Badge 
                          variant="outline" 
                          className={cn(getStatusBadge(project.status))}
                      >
                          {project.status}
                      </Badge>
                  </div>
              </div>
              <div className="flex gap-4 flex-col py-4 ">
              	<h1 className="text-2xl md:text-4xl font-bold leading-10">
              		{project.name}
              	</h1>
              	<p className="border-l-4 rounded-l-sm bg-gradient-to-r py-7 from-slate-700/60 to-slate-700/45 border-l-emerald-400 min-h-12 flex items-center p-4"> 
              		{project.description}
              	</p>
              </div>
			</div>
			
		</AppLayout>
	)
}

export default projectDetails