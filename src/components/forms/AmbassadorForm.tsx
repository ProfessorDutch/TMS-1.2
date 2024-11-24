import React, { useState } from 'react';
import { Heart, Share2, Users, ArrowRight, X, Star, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import BusinessQuestionnaire from './BusinessQuestionnaire';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  socialLinks: {
    facebook: string;
    instagram: string;
    twitter: string;
    youtube: string;
  };
}

export default function AmbassadorForm({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    socialLinks: {
      facebook: '',
      instagram: '',
      twitter: '',
      youtube: ''
    }
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleQuestionnaireComplete = (answers: Record<string, string[]>) => {
    setStep(3); // Move to enrollment form after questionnaire
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const socialPlatforms = [
    { name: 'facebook', icon: <Facebook className="w-6 h-6" />, label: 'Facebook' },
    { name: 'instagram', icon: <Instagram className="w-6 h-6" />, label: 'Instagram' },
    { name: 'twitter', icon: <Twitter className="w-6 h-6" />, label: 'Twitter' },
    { name: 'youtube', icon: <Youtube className="w-6 h-6" />, label: 'YouTube' }
  ];

  if (showSuccess) {
    return (
      <div className="text-center py-8">
        <h3 className="text-2xl font-bold text-patriot-navy mb-6">
          Congratulations, Ambassador! 🌟
        </h3>
        <p className="text-patriot-blue mb-4">
          Welcome to The Mustard Seed Movement! You've officially stepped into the role of an Ambassador, and we couldn't be more excited to have you on this journey.
        </p>
        <p className="text-patriot-blue mb-4">
          Your actions—every like, share, and repost—are planting seeds of faith, hope, and opportunity that will grow into something extraordinary. You are the heart of this mission, spreading the message far and wide and helping us reach more lives than we ever could alone.
        </p>
        <p className="text-patriot-blue mb-6">
          Thank you for answering the call and stepping forward as a leader. Together, we're building a future where no young person feels lost or without hope.
        </p>
        <p className="text-xl font-semibold text-patriot-navy mb-4">
          Let's get to work and move mountains—one share at a time. Welcome to the team! 💪
        </p>
        <p className="text-lg italic text-patriot-red">
          "Faith in Action: Changing Lives, One Seed at a Time."
        </p>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-patriot-cream rounded-2xl max-w-4xl w-full mx-auto p-8 mt-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-patriot-navy">Become an Ambassador</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-patriot-navy mb-6">What Are You Signing Up For?</h3>
              <p className="text-patriot-blue mb-8">
                This is a free app designed for kindhearted people who believe in making a difference.
              </p>

              <div className="grid grid-cols-1 gap-6">
                <div className="bg-patriot-cream rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Share2 className="w-8 h-8 text-patriot-red" />
                    <h4 className="text-lg font-semibold text-patriot-navy">Sharing Posts</h4>
                  </div>
                  <p className="text-patriot-gray">Repost inspiring content and earn 3 Mustard Seeds for every share.</p>
                </div>

                <div className="bg-patriot-cream rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Heart className="w-8 h-8 text-patriot-red" />
                    <h4 className="text-lg font-semibold text-patriot-navy">Liking Content</h4>
                  </div>
                  <p className="text-patriot-gray">Show support and earn 1 Mustard Seed for every like.</p>
                </div>

                <div className="bg-patriot-cream rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Star className="w-8 h-8 text-patriot-red" />
                    <h4 className="text-lg font-semibold text-patriot-navy">QR Code Sharing</h4>
                  </div>
                  <p className="text-patriot-gray">Share your unique QR code and earn 5 Mustard Seeds per scan.</p>
                </div>

                <div className="bg-patriot-cream rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-patriot-red" />
                    <h4 className="text-lg font-semibold text-patriot-navy">Growing Impact</h4>
                  </div>
                  <p className="text-patriot-gray">Track your seeds and see your impact grow over time.</p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-2 bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
                >
                  Continue <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <BusinessQuestionnaire
            onComplete={handleQuestionnaireComplete}
            onBack={handleBack}
            onClose={onClose}
          />
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-patriot-navy mb-6">Ambassador Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                  />
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-patriot-navy mb-4">Connect Your Social Media</h4>
                <p className="text-patriot-gray mb-4">Link your social media accounts to track your impact</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {socialPlatforms.map((platform) => (
                    <div key={platform.name} className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-patriot-cream flex items-center justify-center">
                        {platform.icon}
                      </div>
                      <input
                        type="url"
                        placeholder={`Your ${platform.label} URL`}
                        value={formData.socialLinks[platform.name as keyof typeof formData.socialLinks]}
                        onChange={(e) => setFormData({
                          ...formData,
                          socialLinks: {
                            ...formData.socialLinks,
                            [platform.name]: e.target.value
                          }
                        })}
                        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-patriot-red focus:border-transparent"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button
                  type="button"
                  onClick={handleBack}
                  className="px-6 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-patriot-red text-white px-8 py-3 rounded-full hover:bg-patriot-crimson transition-colors"
                >
                  Complete Registration <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}