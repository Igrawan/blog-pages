import React from 'react';

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms and Conditions</h1>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Terms of Use</h2>
          <p className="text-gray-600">
            By accessing this website, you agree to be bound by these Terms and Conditions of Use, all applicable
            laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Content Usage</h2>
          <p className="text-gray-600 mb-4">
            All content provided on this website is for informational purposes only. The content is provided
            "as is," and we make no warranties about the completeness, reliability, or accuracy of this information.
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>You may not reproduce or distribute our content without permission</li>
            <li>You must attribute our content when sharing</li>
            <li>Commercial use of our content requires written permission</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Conduct</h2>
          <p className="text-gray-600">
            Users agree not to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Post harmful or malicious content</li>
            <li>Impersonate others</li>
            <li>Engage in unauthorized data collection</li>
            <li>Attempt to breach website security</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Disclaimer</h2>
          <p className="text-gray-600">
            The materials on TechCare Blog's website are provided on an 'as is' basis. TechCare Blog makes no
            warranties, expressed or implied, and hereby disclaims and negates all other warranties including,
            without limitation, implied warranties or conditions of merchantability, fitness for a particular
            purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact</h2>
          <p className="text-gray-600">
            For any questions regarding these terms, please contact us at solutionai.in@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}