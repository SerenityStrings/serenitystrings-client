// Fretboard page for the Serenity Strings website.

import React from 'react'
import clsx from "clsx";

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
        <div className = "mr-6 -mt-3">
          <h2 className = "font-semibold mb-4 text-center text-2xl"> Fretboard </h2>
          {/* Loop 6 times to create 6 strings */}
          {
                                          // Current element value, current index 
            Array.from({ length: 6 }).map((_, rowIndex) => (
              
              // Each row represents ONE string
              <div
                key = {rowIndex} // Required by React to track elements efficiently
                className = "grid relative items-center justify-items-center" // Grid layout for frets + spacing between cells
                
                // create a CSS Grid container with exactly 24 columns that are all equally sized, 
                // taking up the full width of the container.
                style = {{ gridTemplateColumns: "repeat(25, 1fr)" }}
              >
                
                <hr
                className={clsx(
                  "absolute w-full z-10 border-gray-200 ml-8",
                  rowIndex === 0 && "border-[1px]",
                  rowIndex === 1 && "border-[1.4px]",
                  rowIndex === 2 && "border-[1.8px]",
                  rowIndex === 3 && "border-[2.2px]",
                  rowIndex === 4 && "border-[2.6px]",
                  rowIndex === 5 && "border-[3.5px]",
                )}
              />
              
                {/* Inner loop: creates 24 frets for each string */}
                {
                                                  // Current element value, current index 
                  Array.from({ length: 25 }).map((_, colIndex) => (

                    // TODO: Add different spacing between each fret (Big -> Smaller -> Small)

                    // TODO: Add fret numbers at the bottom of the fretboard (maybe only for frets 3, 5, 7, 9, 12)

                    // Each cell represents ONE fret position
                    <div
                      key = {colIndex} // Unique key for each cell
                      className = {clsx(
                        "h-14 flex items-center justify-center border-r",
                        colIndex === 0 && "border-r-8 border-black",
                        colIndex === 1 && "border-r-2 border-gray-600",
                        colIndex === 2 && "border-r-2 border-gray-600",
                        colIndex === 3 && "border-r-2 border-gray-600",
                        colIndex === 4 && "border-r-2 border-gray-600",

                        colIndex === 5 && "border-r-2 border-gray-600",
                        colIndex === 6 && "border-r-2 border-gray-600",
                        colIndex === 7 && "border-r-2 border-gray-600",
                        colIndex === 8 && "border-r-2 border-gray-600",
                        colIndex === 9 && "border-r-2 border-gray-600",

                        colIndex === 10 && "border-r-2 border-gray-600",
                        colIndex === 11 && "border-r-2 border-gray-600",
                        colIndex === 12 && "border-r-2 border-gray-600",
                        colIndex === 13 && "border-r-2 border-gray-600",
                        colIndex === 14 && "border-r-2 border-gray-600",

                        colIndex === 15 && "border-r-2 border-gray-600",
                        colIndex === 16 && "border-r-2 border-gray-600",
                        colIndex === 17 && "border-r-2 border-gray-600",
                        colIndex === 18 && "border-r-2 border-gray-600",
                        colIndex === 19 && "border-r-2 border-gray-600",

                        colIndex === 20 && "border-r-2 border-gray-600",
                        colIndex === 21 && "border-r-2 border-gray-600",
                        colIndex === 22 && "border-r-2 border-gray-600",
                        colIndex === 23 && "border-r-2 border-gray-600",
                        colIndex === 24 && "border-r-2 border-gray-600",
                      )}
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