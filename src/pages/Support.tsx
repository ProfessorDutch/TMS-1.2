import React from 'react';
import MonthlyBlessingCircle from '../components/subscription/MonthlyBlessingCircle';
import ImpactDashboard from '../components/subscription/ImpactDashboard';
import CareerPathsPreview from '../components/CareerPathsPreview';

const mockMetrics = {
  totalSeeds: 1234,
  studentsSupported: 89,
  coursesEnabled: 45,
  communityMembers: 567
};

export default function Support() {
  return (
    <main className="flex-1">
      <section className="py-16 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-patriot-navy mb-6">
            Support Our Youth
          </h1>
          <p className="text-xl text-patriot-blue mb-8 max-w-3xl">
            Join us in nurturing young hearts and minds through Christ-centered education and mentorship.
          </p>
        </div>
      </section>

      <MonthlyBlessingCircle />
      
      <ImpactDashboard metrics={mockMetrics} />

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <CareerPathsPreview />
        </div>
      </section>
    </main>
  );
}