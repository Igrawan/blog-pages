import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Laptop, Heart, Brain } from 'lucide-react';
import AdContainer from '../components/AdContainer';

export default function Home() {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of AI in Healthcare",
      excerpt: "Exploring how artificial intelligence is revolutionizing medical diagnosis and treatment.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
      category: "Technology"
    },
    {
      id: 2,
      title: "Digital Health Trends 2024",
      excerpt: "Key technological innovations shaping the healthcare industry this year.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800",
      category: "Healthcare"
    },
    {
      id: 3,
      title: "Cybersecurity in Medical Devices",
      excerpt: "Understanding the importance of security in connected medical devices.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800",
      category: "Security"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Where Technology Meets Healthcare
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Exploring innovations that shape the future of healthcare
            </p>
            <Link to="/blog" className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Articles <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Top Ad Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdContainer slot="home-top" />
      </div>

      {/* Featured Posts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mt-2 mb-3">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link to="/blog" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Middle Ad Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdContainer slot="home-middle" />
      </div>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <Laptop className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Technology</h3>
              <p className="text-gray-600">Latest tech trends and innovations in the digital health space</p>
            </div>
            <div className="text-center p-6">
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare</h3>
              <p className="text-gray-600">Medical advancements and healthcare solutions</p>
            </div>
            <div className="text-center p-6">
              <Brain className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Breakthrough research and innovative solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AdContainer slot="home-bottom" />
      </div>
    </div>
  );
}