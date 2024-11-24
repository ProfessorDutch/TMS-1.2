import React from 'react';
import { BookOpen, Code, Wrench, Heart, GraduationCap, Briefcase, Sprout } from 'lucide-react';
import JourneyAhead from '../components/JourneyAhead';

const careerPaths = [
  {
    title: 'Technology',
    icon: <Code className="w-8 h-8 text-patriot-red" />,
    description: 'Digital skills for the modern workplace',
    paths: [
      'Web & Mobile Development',
      'IT Support & Networking',
      'Digital Marketing',
      'Data Analytics',
      'Cybersecurity Fundamentals'
    ]
  },
  {
    title: 'Trades',
    icon: <Wrench className="w-8 h-8 text-patriot-red" />,
    description: 'Hands-on skilled labor training',
    paths: [
      'Electrical & Electronics',
      'HVAC & Plumbing',
      'Automotive Service',
      'Construction Skills',
      'Welding Fundamentals'
    ]
  },
  {
    title: 'Service Industry',
    icon: <Heart className="w-8 h-8 text-patriot-red" />,
    description: 'Customer-focused career preparation',
    paths: [
      'Healthcare Services',
      'Hospitality Management',
      'Retail Operations',
      'Food Service',
      'Customer Service Excellence'
    ]
  },
  {
    title: 'Life Skills',
    icon: <GraduationCap className="w-8 h-8 text-patriot-red" />,
    description: 'Essential skills for personal success',
    paths: [
      'Financial Literacy',
      'Communication Skills',
      'Time Management',
      'Personal Development',
      'Health & Wellness'
    ]
  },
  {
    title: 'First Steps',
    icon: <Sprout className="w-8 h-8 text-patriot-red" />,
    description: 'Foundation for career exploration',
    paths: [
      'Career Discovery',
      'Resume Building',
      'Interview Preparation',
      'Professional Etiquette',
      'Workplace Ethics'
    ]
  },
  {
    title: 'Sponsored Jobs',
    icon: <Briefcase className="w-8 h-8 text-patriot-red" />,
    description: 'Direct paths to employment',
    paths: [
      'Apprenticeship Programs',
      'Entry-level Positions',
      'Internship Opportunities',
      'On-the-job Training',
      'Partner Company Placements'
    ]
  }
];

export default function CareerPaths() {
  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <BookOpen className="w-12 h-12 text-patriot-red" />
            <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy">
              Future Career Paths
            </h1>
          </div>
          <div className="max-w-3xl">
            <p className="text-xl text-patriot-blue mb-4">
              Coming soon: Comprehensive career development programs to help you discover and pursue your calling.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-patriot-navy">
                <span className="font-semibold">Stage 1 Goal:</span> These programs will be unlocked when we reach 1,000 monthly subscribers. Current progress: 0/1000
              </p>
              <div className="mt-2 h-2 bg-gray-200 rounded-full">
                <div className="h-full bg-patriot-red rounded-full" style={{ width: '0%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((path, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    {path.icon}
                    <h3 className="text-xl font-bold text-patriot-navy">{path.title}</h3>
                  </div>
                  <p className="text-patriot-blue">{path.description}</p>
                </div>
                <div className="p-6">
                  <ul className="space-y-3">
                    {path.paths.map((item, pathIndex) => (
                      <li key={pathIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-patriot-red" />
                        <span className="text-patriot-gray">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button 
                    disabled
                    className="w-full mt-6 bg-gray-100 text-gray-500 py-3 rounded-full font-semibold cursor-not-allowed"
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-patriot-cream">
        <div className="max-w-6xl mx-auto px-4">
          <JourneyAhead />
        </div>
      </section>
    </main>
  );
}