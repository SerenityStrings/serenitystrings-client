// Default page component for the application. 
// This component is rendered when the user navigates to the root URL of the application. 
// It currently displays a simple message "page". You can customize this component to 
// include more content or functionality as needed.

// rafce Shortcut: React Arrow Function Component with Export default.

import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | SerenityStrings',
};

const HomePage = () => {
  return (
    <div>Home Page</div>
  )
}

export default HomePage