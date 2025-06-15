import React from 'react';
import { RootLayout } from '@/layouts/root/RootLayout';
import { Shield, Clock, Award, TrendingUp, Users } from 'lucide-react';

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-200">
        <img 
          src={`/api/placeholder/300/300`}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="font-semibold text-lg">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
};

const ValueCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center p-6 bg-white rounded-lg shadow-sm">
      <div className="bg-blue-100 p-3 rounded-full">
        <Icon className="text-blue-600" size={24} />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const AboutPage = () => {
  const teamMembers = [
    { name: "Sarah Johnson", role: "CEO & Founder", image: "/api/placeholder/300/300" },
    { name: "Michael Chen", role: "CTO", image: "/api/placeholder/300/300" },
    { name: "Aisha Patel", role: "Head of Design", image: "/api/placeholder/300/300" },
    { name: "James Wilson", role: "Lead Developer", image: "/api/placeholder/300/300" },
  ];

  const companyValues = [
    {
      icon: Shield,
      title: "Reliability",
      description: "We build tools you can depend on, day in and day out. Our platform maintains 99.9% uptime and enterprise-grade security."
    },
    {
      icon: Clock,
      title: "Efficiency",
      description: "Our solutions are designed to save you time and streamline workflows, eliminating bottlenecks and reducing overhead."
    },
    {
      icon: Award,
      title: "Quality",
      description: "We never compromise on quality, delivering thoughtfully designed and thoroughly tested features you'll love using."
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We're constantly evolving our platform based on user feedback and emerging best practices in project management."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teams working together seamlessly, which is reflected in every feature we build."
    }
  ];

  return (
    <RootLayout>
      <div className="bg-gradient-to-b from-blue-50 to-white">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to make project management simple, intuitive, and effective for teams of all sizes.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2020, our company emerged from a simple frustration: existing project management tools were either too complex or too simplistic for modern teams.
              </p>
              <p className="text-gray-600 mb-4">
                Our founder, Sarah Johnson, experienced firsthand the challenges of coordinating distributed teams across multiple projects. Determined to create a better solution, she assembled a team of industry experts and veteran developers.
              </p>
              <p className="text-gray-600">
                Today, we serve thousands of teams worldwide, from startups to Fortune 500 companies, all with the same mission: to make project management more efficient, transparent, and enjoyable.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/api/placeholder/600/400" 
                alt="Team working together" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyValues.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Meet the Team Section */}
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
              />
            ))}
          </div>
        </div>

        {/* Join Us CTA Section */}
        <div className="bg-blue-600 text-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-lg mb-6 max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for creating exceptional tools that make work better.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 font-medium py-2 px-6 rounded-md hover:bg-blue-50 transition-colors">
                View Open Positions
              </button>
              <button className="bg-transparent border border-white text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default AboutPage;