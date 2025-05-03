import React from 'react';
import { RootLayout } from '@/components/RootLayout';
import { CheckCircle, Clock, Calendar, Users, PieChart, Bell, FileText, RefreshCw } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-start transition-all hover:shadow-lg">
      <div className="bg-blue-100 p-3 rounded-full mb-4">
        <Icon className="text-blue-600" size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const FeaturesPage = () => {
  const features = [
    {
      icon: Clock,
      title: "Time Tracking",
      description: "Track time spent on tasks and projects with simple start/stop controls and manual time entry options."
    },
    {
      icon: Calendar,
      title: "Project Planning",
      description: "Create and manage project timelines, set milestones, and visualize project progress with interactive Gantt charts."
    },
    {
      icon: Users,
      title: "Team Management",
      description: "Assign team members to projects, monitor workloads, and manage resource allocation efficiently."
    },
    {
      icon: PieChart,
      title: "Analytics Dashboard",
      description: "Get insights into project progress, time distribution, and team productivity with customizable reports."
    },
    {
      icon: Bell,
      title: "Notifications & Reminders",
      description: "Stay updated with automated alerts for deadlines, milestones, and important project changes."
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Store and manage project documents, share files, and keep all project-related information in one place."
    },
    {
      icon: CheckCircle,
      title: "Task Management",
      description: "Create, assign, and track tasks with priority levels, deadlines, and progress tracking."
    },
    {
      icon: RefreshCw,
      title: "Automated Workflows",
      description: "Create custom workflows to automate repetitive tasks and processes across your projects."
    }
  ];

  return (
    <RootLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features to Manage Your Projects</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive toolset helps teams of all sizes plan, track, and deliver projects with ease and efficiency.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <FeatureCard 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-blue-600 text-white rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to streamline your project management?</h2>
            <p className="mb-6">Start using our platform today and experience the difference.</p>
            <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-md hover:bg-blue-50 transition-colors">
              Get Started Free
            </button>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default FeaturesPage;