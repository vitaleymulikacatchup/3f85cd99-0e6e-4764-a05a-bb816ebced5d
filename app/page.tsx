// Ensure the page component is correctly defined and includes error handling
import React from 'react';

const Page: React.FC = () => {
  try {
    // Your main page logic
    return <div>Hello, Next.js 15!</div>;
  } catch (error) {
    console.error('Error rendering page:', error);
    return <div>Something went wrong.</div>;
  }
};

export default Page;