import React from 'react';
import { Church } from 'lucide-react';

export default function ChurchFinderPage() {
  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-6">
            <Church className="w-12 h-12 text-patriot-red" />
            <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy">
              Find Your Church
            </h1>
          </div>
          <p className="text-xl text-patriot-blue mb-8 max-w-3xl">
            Coming soon: Find and connect with churches in your area.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
            <Church className="w-16 h-16 text-patriot-red mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-patriot-navy mb-4">Church Finder Coming Soon</h2>
            <p className="text-patriot-blue max-w-2xl mx-auto">
              We're working on making it easier for you to find and connect with churches in your area. 
              Check back soon for our interactive church finder feature.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}