import React from 'react';
import { Building2, Heart } from 'lucide-react';
import BusinessSponsorshipForm from '../components/BusinessSponsorshipForm';

export default function BusinessSupport() {
  return (
    <main className="flex-1">
      <section className="py-8 bg-gradient-to-br from-patriot-cream to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-4">
            <Building2 className="w-12 h-12 text-patriot-red" />
            <h1 className="text-4xl font-bold text-patriot-navy">
              Business Partnership
            </h1>
          </div>
          <p className="text-xl text-patriot-blue max-w-3xl">
            Join a community of businesses committed to making a difference in young lives through faith and purpose.
          </p>
        </div>
      </section>

      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <BusinessSponsorshipForm />
        </div>
      </section>
    </main>
  );
}