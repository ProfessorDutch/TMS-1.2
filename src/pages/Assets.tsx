import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Layout } from 'lucide-react';

export default function Assets() {
  const pages = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/careers', label: 'Career Paths' },
    { path: '/support', label: 'Support' },
    { path: '/contact', label: 'Contact' },
    { path: '/donate', label: 'Donation' },
    { path: '/privacy', label: 'Privacy Policy' },
    { path: '/terms', label: 'Terms of Service' },
    { path: '/join-movement', label: 'Join Movement' },
    { path: '/business-support', label: 'Business Support' },
    { path: '/business-directory', label: 'Business Directory' },
    { path: '/claim-business', label: 'Claim Business' },
    { path: '/stories', label: 'Success Stories' }
  ];

  const forms = [
    { name: 'Ambassador Form', description: 'Form for becoming an ambassador' },
    { name: 'Business Claim Form', description: 'Form for claiming a business listing' },
    { name: 'Business Intake Form', description: 'Form for adding a new business' },
    { name: 'Donation Form', description: 'Form for making donations' },
    { name: 'Memory Share Form', description: 'Form for sharing memories' },
    { name: 'Verification Form', description: 'Form for business verification' }
  ];

  return (
    <main className="flex-1">
      <section className="py-12 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Layout className="w-12 h-12 text-patriot-red" />
            <h1 className="text-4xl font-bold text-patriot-navy">Site Assets</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pages */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">Pages</h2>
              <div className="space-y-2">
                {pages.map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="flex items-center gap-2 p-2 rounded-lg hover:bg-patriot-cream transition-colors"
                  >
                    <FileText className="w-5 h-5 text-patriot-red" />
                    <span className="text-patriot-blue">{page.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Forms */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-patriot-navy mb-4">Forms</h2>
              <div className="space-y-2">
                {forms.map((form) => (
                  <div
                    key={form.name}
                    className="p-3 rounded-lg border border-gray-200"
                  >
                    <h3 className="font-semibold text-patriot-navy">{form.name}</h3>
                    <p className="text-sm text-patriot-blue">{form.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}