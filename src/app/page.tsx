// Default page component for the application. 
// This component is rendered when the user navigates to the root URL of the application. 
// It currently displays a simple message "page". You can customize this component to 
// include more content or functionality as needed.

// rafce Shortcut: React Arrow Function Component with Export default.

import React from 'react'
import ToolCard from '@/components/ui/ToolCard';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | SerenityStrings',
};

const HomePage = () => {
  return (
    <main className = "p-8 max-w-6xl mx-auto grow">
      
      {/* Hero Section */}
      <section className = "text-center mb-12">
        <h1 className = "text-6xl font-bold mb-4">
          SerenityStrings
        </h1>
        <p className = "text-slate-400 text-lg mb-20">
          Welcome to SerenityStrings, your ultimate companion for guitar practice! Whether you're a beginner or an experienced guitarist, our suite of tools is designed to help you improve your skills and enjoy the journey of learning the guitar. From interactive fretboards to customizable metronomes and tuners, SerenityStrings offers everything you need to enhance your practice sessions and achieve your musical goals. Explore our features and start your musical journey with us today!
        </p>
      </section>

      {/* Tool Cards Section */}
      <section className = "grid grid-cols-1 md:grid-cols-2 gap-6">

      <ToolCard
        title = "Interactive Fretboard"
        description = "Visualize scales and notes across the guitar neck."
        href = "/fretboard"
      />

      <ToolCard
        title = "Chord Progressions"
        description = "Generate chord progressions and explore harmony."
        href = "/progressions"
      />

      <ToolCard
        title = "Metronome"
        description = "Keep time with adjustable tempo and subdivisions."
        href = "/metronome"
      />

      <ToolCard
        title = "Guitar Tuner"
        description = "Tune your guitar with real-time pitch detection."
        href = "/tuner"
      />

      </section>
    </main>
  )
}

export default HomePage