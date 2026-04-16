// Fretboard page for the Serenity Strings website.

import React from 'react'

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fretboard',
};

const FretboardPage = () => {
  return (
    <main className = "p-8 mt-10 max-w-6xl mx-auto border border-slate-300 bg-slate-800">
      <h1 className = "text-3xl font-bold mb-6"> Interactive Fretboard </h1>

      {/* Controls */}
      <section className = "bg-slate-800 p-6 items-end rounded-xl border border-slate-700 mb-6">
        <div className = "flex flex-wrap gap-4">

          {/* Key */}
          <label className = "text-sm text-slate-400"> Key </label>
          <select className = "w-42 bg-slate-700 p-2 rounded">
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

          {/* Scale */}
          <label className = "text-sm text-slate-400"> Scale </label>
          <select className = "w-42 bg-slate-700 p-2 rounded">
            <option> None </option>
            <option> Major </option>
            <option> Minor </option>
          </select>

          {/* Chord */}
          <label className = "text-sm text-slate-400"> Chord </label>
          <select className = "w-42 bg-slate-700 p-2 rounded">
            <option> I (Major) </option>
            <option> ii (Minor) </option>
            <option> iii (Minor) </option>
            <option> IV (Major) </option>
            <option> V (Major) </option>
            <option> vi (Minor) </option>
            <option> vii° (Diminished) </option>
            <option> Dm </option>
          </select>

          {/* Tuning */}
          <label className = "text-sm text-slate-400"> Tuning </label>
          <select className = "w-42 bg-slate-700 p-2 rounded">
            <option> Standard </option>
            <option> Drop D </option>
          </select>

          <button className="bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-400">
            Clear
          </button>
        </div>
      </section>

      {/* Fretboard Display */}

      {/* Main fretboard section container (the dark box) */}
      <section className = "bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">

        {/* This wraps all 6 string rows vertically */}
        <div className = "flex flex-col">
          {/* Loop 6 times to create 6 strings */}
          {
                                          // Current element value, current index 
            Array.from({ length: 6 }).map((_, rowIndex) => (
              
              // Each row represents ONE string
              <div
                key = {rowIndex} // Required by React to track elements efficiently
                className = "grid relative" // Grid layout for frets + spacing between cells
                
                // create a CSS Grid container with exactly 24 columns that are all equally sized, 
                // taking up the full width of the container.
                style = {{ gridTemplateColumns: "repeat(24, 1fr)" }}
              >
              <hr className = "absolute top-4 w-full border z-10"/>
              
                {/* Inner loop: creates 24 frets for each string */}
                {
                                                  // Current element value, current index 
                  Array.from({ length: 24 }).map((_, colIndex) => (

                    // Each cell represents ONE fret position
                    <div
                      key = {colIndex} // Unique key for each cell
                      className = "h-8 flex items-center justify-center border-l-3 border-r-3 border-gray-600"
                      // bg-slate-600 → visible cell color
                      // h-6 → cell height
                      // flex + items-center + justify-center → centers text inside
                      // text-xs → small font for numbers
                    >
                    </div>

                  ))
                }

              </div>
            ))
          }

        </div>
      </section>

      {/* Legend */}
      <section className = "bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
      <h2 className="font-semibold mb-2">Legend</h2>
        <div className = "flex gap-6 text-sm text-slate-400">
          <span>● Root Note</span>
          <span>○ Scale Note</span>
          <span>△ Chord Tone</span>
        </div>
        
      </section>
    </main>
  )
}

export default FretboardPage