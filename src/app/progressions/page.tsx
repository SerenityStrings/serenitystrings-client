// Progressions page for the Serenity Strings website.

import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Progressions',
};

const ProgressionsPage = () => {

  const keys = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
  ];

  const chords = [
    "Major",
    "Minor",
    "Dominant 7",
    "Major 7",
    "Minor 7",
  ];

  const scales = [
    "Major",
    "Minor",
    "Major Pentatonic",
    "Minor Pentatonic",
  ];

  const moods = ["happy", "sad", "dark", "uplifting", "jazzy", "dreamy", "tense"];

  const commonProgressions = {
    major: [
      ["I", "V", "vi", "IV"],
      ["I", "IV", "V"],
      ["ii", "V", "I"],
      ["I", "vi", "IV", "V"],
    ],
  
    minor: [
      ["i", "VI", "III", "VII"],
      ["i", "iv", "v"],
      ["ii°", "V", "i"],
    ],
  };

  const romanNumeralMap = {
    major: [
      "I",
      "ii",
      "iii",
      "IV",
      "V",
      "vi",
      "vii°",
    ],
  
    minor: [
      "i",
      "ii°",
      "III",
      "iv",
      "v",
      "VI",
      "VII",
    ],
  };


  // const getScaleNotes = () => {};

  // const generateChords = () => {};

  const getSuggestedScales = () => {};

  return (
    <main className = "">
      Progressions Page
    </main>
  )
}

export default ProgressionsPage