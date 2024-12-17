import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">About</h3>
            <p className="text-gray-600">Exploring the intersection of technology and healthcare through insightful articles and analysis.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: solutionai.in@gmail.com</li>
              <li className="text-gray-600">Follow us on social media</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600 flex items-center justify-center">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> by TechCare Blog
          </p>
        </div>
      </div>
    </footer>
  );
}