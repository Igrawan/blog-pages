import React, { useState } from 'react';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import AdContainer from '../components/AdContainer';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Top Ad Container */}
      <AdContainer className="mb-8" slot="blog-top" />

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.slice(0, 3).map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Middle Ad Container */}
      <div className="my-8">
        <AdContainer slot="blog-middle" />
      </div>

      {/* Remaining Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.slice(3).map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Bottom Ad Container */}
      <div className="mt-8">
        <AdContainer slot="blog-bottom" />
      </div>
    </div>
  );
}