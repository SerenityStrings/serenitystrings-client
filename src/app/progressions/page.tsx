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
    <main className = "p-4 sm:p-6 lg:p-8 md:mt-5 max-w-5xl mx-auto border border-slate-300 bg-slate-800">
      
      {/* Controls */}
      <section className = "bg-slate-800 p-2 rounded-xl border border-slate-700 mb-4">
        <div className = "flex flex-wrap gap-2 md:gap-6 items-center justify-center">

          {/* Key */}
          <div className = "flex flex-col m-2 md:m-3">
            <label className = "text-sm text-slate-400"> Key </label>
            <select className = "w-full sm:w-40 bg-slate-700 p-2 rounded">
              <option> C </option>
              <option> C# </option>
              <option> D </option>
              <option> D# </option>
              <option> E </option>
              <option> F </option>
              <option> F# </option>
              <option> G </option>
              <option> G# </option>
              <option> A </option>
              <option> A# </option>
              <option> B </option>
            </select>
          </div>

          {/* Mode */}
          <div className = "flex flex-col m-2 md:m-3">
            <label className = "text-sm text-slate-400"> Mode </label>
            <select className = "w-full sm:w-40 bg-slate-700 p-2 rounded">
              <option> Major </option>
              <option> Minor </option>
            </select>
          </div>

          {/* Mood */}
          <div className = "flex flex-col m-2 md:m-3">
            <label className = "text-sm text-slate-400"> Mood </label>
            <select className = "w-full sm:w-40 bg-slate-700 p-2 rounded">
              <option> Happy </option>
              <option> Sad </option>
              <option> Excited </option>
              <option> Inspired </option>
              <option> Silly </option>
            </select>
          </div>

          <div className = "flex flex-col m-2 md:m-3">
            <button className="bg-indigo-500 px-4 mt-5 py-2 rounded hover:bg-indigo-400">
              Generate Progression
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-4">

        <h1 className = "text-m md:text-xl font-bold mb-3"> Chords: </h1>
        <h1 className = "text-m md:text-xl font-bold mb-3"> Roman Numerals: </h1>

        <div className = "flex m-2 md:m-3">
          <button className="bg-indigo-500 px-4 mt-5 py-2 rounded hover:bg-indigo-400">
            Play
          </button>
        </div>

      </section>

      <section className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-4">
        <h1 className = "text-m md:text-xl font-bold mb-3"> Suggested Scale: </h1>
      </section>

    </main>
  )
}

export default ProgressionsPage