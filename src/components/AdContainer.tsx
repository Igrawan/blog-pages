import React from 'react';

interface AdContainerProps {
  className?: string;
  slot?: string;
}

export default function AdContainer({ className = '', slot = 'default' }: AdContainerProps) {
  return (
    <div 
      className={`bg-gray-100 border border-gray-200 rounded-lg p-4 text-center ${className}`}
      data-ad-slot={slot}
      data-ad-client="ca-pub-placeholder"
      data-ad-format="auto"
      data-full-width-responsive="true"
    >
      {/* AdSense code will be injected here */}
      <div className="text-gray-400 text-sm">Advertisement</div>
    </div>
  );
}