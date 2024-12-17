import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      
      <div className="prose prose-blue max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <p className="text-gray-600 mb-4">
            We collect information that you provide directly to us, including when you:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Subscribe to our newsletter</li>
            <li>Comment on our articles</li>
            <li>Contact us through our contact forms</li>
            <li>Interact with our website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="text-gray-600 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>Provide and maintain our services</li>
            <li>Send you updates and marketing communications</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze how you use our website</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookie Policy</h2>
          <p className="text-gray-600">
            We use cookies and similar tracking technologies to track activity on our website and hold certain information.
            Cookies are files with small amount of data which may include an anonymous unique identifier.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p className="text-gray-600">
            The security of your data is important to us, but remember that no method of transmission over
            the Internet, or method of electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-600">
            If you have any questions about this Privacy Policy, please contact us at solutionai.in@gmail.com
          </p>
        </section>
      </div>
    </div>
  );
}