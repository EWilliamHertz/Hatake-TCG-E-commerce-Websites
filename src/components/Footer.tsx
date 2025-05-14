import React from 'react';
import { FacebookIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
export const Footer: React.FC = () => {
  return <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              &copy; 2025 Hatake TCG. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon className="h-5 w-5 hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </footer>;
};