import React from 'react';
import Link from 'next/link';
import {
  APPLICATION,
  APPLICATION_AUTH,
} from '@/utils/constants/page_constants';

export default function NavBar() {
  return (
    <div className="flex flex-col h-screen w-64 bg-gray-800 text-white">
      <div className="p-5">
        <h1 className="text-2xl font-bold">Aerostock</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-2 py-4">
          {Object.values(APPLICATION).map((item, index) => (
            <li key={index}>
              <Link
                href={item.isDisabled ? '#' : item.href}
                className={`flex items-center hover:bg-gray-700 px-4 py-2 ${item.isDisabled ? 'cursor-not-allowed' : ''}`}
              >
                {item.icon}
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        {Object.values(APPLICATION_AUTH).map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center hover:bg-gray-700 px-4 py-2"
          >
            {item.icon}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
