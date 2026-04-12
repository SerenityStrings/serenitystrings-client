// About page for the Serenity Strings website. 
// This page will provide information about the project, its goals, and the team behind it.

import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
};

const AboutPage = () => {
  return (
    <main className = "p-8 max-w-6xl mx-auto">
      
      {/* Hero Section */}
      <section className = "text-center mb-12">
        <h1 className = "text-6xl font-bold mb-4">
          About SerenityStrings
        </h1>
        <p className = "text-slate-400 text-lg mb-10 p-4 border-b border-gray-400">  
          SerenityStrings is an interactive platform designed
          to help guitarists practice, learn music theory,
          and improve their skills with real-time tools.
        </p>
        <h2 className = "text-4xl font-bold mb-4">
          Tools and Features
        </h2>
      </section>
    </main>
  )
}

export default AboutPage