import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { ArrowLeft, Clock, User } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === Number(id));

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Post not found</h1>
          <button
            onClick={() => navigate('/blog')}
            className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Blog
          </button>
        </div>
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <button
        onClick={() => navigate('/blog')}
        className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" /> Back to Blog
      </button>

      <img
        src={post.image}
        alt={post.title}
        className="w-full h-[400px] object-cover rounded-lg mb-8"
      />

      <div className="mb-8">
        <span className="text-blue-600 font-semibold">{post.category}</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">{post.title}</h1>
        
        <div className="flex items-center text-gray-600 space-x-4">
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 mr-2" />
            <span>{post.readTime}</span>
          </div>
          <span>{post.date}</span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </article>
  );
}