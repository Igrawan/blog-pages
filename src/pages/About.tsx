import React from 'react';
import { Users, Target, Award } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About TechCare Blog</h1>
          <p className="text-xl max-w-3xl mx-auto">
            We're dedicated to bringing you the latest insights at the intersection of technology and healthcare.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Team</h3>
              <p className="text-gray-600">
                A diverse group of technology experts, healthcare professionals, and writers.
              </p>
            </div>
            <div className="text-center p-6">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To bridge the gap between technology and healthcare through informative content.
              </p>
            </div>
            <div className="text-center p-6">
              <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
              <p className="text-gray-600">
                Accuracy, integrity, and innovation in everything we publish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2024, TechCare Blog emerged from a vision to create a platform where technology
              and healthcare converge. We recognized the need for reliable, accessible information about
              the rapidly evolving landscape of digital health and medical technology.
            </p>
            <p className="text-gray-600">
              Today, we're proud to serve readers worldwide, providing them with insights, analysis,
              and updates about the latest developments in healthcare technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}