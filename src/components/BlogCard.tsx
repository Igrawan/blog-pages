import React from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
          <span className="text-gray-500 text-sm">{post.date}</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <Link 
          to={`/blog/${post.id}`} 
          className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}