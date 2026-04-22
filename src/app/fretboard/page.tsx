// Fretboard page for the Serenity Strings website.

import React from 'react'
import clsx from "clsx";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fretboard',
};

const FretboardPage = () => {
  return (
    <main className = "p-4 sm:p-6 lg:p-8 mt-10 max-w-6xl mx-auto border border-slate-300 bg-slate-800">
      <h1 className = "text-3xl font-bold mb-6"> Interactive Fretboard </h1>

      {/* Controls */}
      <section className = "bg-slate-800 items-end rounded-xl border border-slate-700 mb-6">
        <div className = "flex flex-wrap gap-6 items-center justify-center">

            {/* Key */}
          <div className = "flex flex-col m-6">
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

            {/* Scale */}
          <div className = "flex flex-col m-6">
            <label className = "text-sm text-slate-400"> Scale </label>
            <select className = "w-full sm:w-40 bg-slate-700 p-2 rounded">
              <option> None </option>
              <option> Major </option>
              <option> Minor </option>
            </select>
          </div>

            {/* Chord */}
          <div className = "flex flex-col m-6">
            <label className = "text-sm text-slate-400"> Chord </label>
            <select className = "w-full sm:w-40 bg-slate-700 p-2 rounded">
              <option> I (Major) </option>
              <option> ii (Minor) </option>
              <option> iii (Minor) </option>
              <option> IV (Major) </option>
              <option> V (Major) </option>
              <option> vi (Minor) </option>
              <option> vii° (Diminished) </option>
              <option> Dm </option>
            </select>
          </div>

            {/* Tuning */}
          <div className = "flex flex-col m-6">
            <label className = "text-sm text-slate-400"> Tuning </label>
            <select className = "w-full sm:w-40 bg-slate-700 p-2 rounded">
              <option> Standard </option>
              <option> Drop D </option>
            </select>
          </div>

          <div className = "flex flex-col m-6">
            <button className="bg-indigo-500 px-4 mt-5 py-2 rounded hover:bg-indigo-400">
              Clear
            </button>
          </div>
        </div>
      </section>

      {/* Fretboard Display */}

      {/* Main fretboard section container (the dark box) */}

      {
      // TODO: Add different spacing between each fret (Big -> Smaller -> Small)

      // TODO: Add fret numbers at the bottom of the fretboard (maybe only for frets 3, 5, 7, 9, 12)
      }

      {/* Fretboard Display */}
      <section className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">

        <div className="relative flex flex-col items-center">

          <h2 className="font-semibold mb-4 text-center text-2xl">
            Fretboard
          </h2>

          {/* 🎯 FRETBOARD BOX */}
          <div className="relative w-full max-w-5xl aspect-[4/1]">

            {/* 🎯 FRETS LAYER (BACKGROUND GRID) */}

            {/* Nut */}
            <div className="absolute left-0 top-0 h-full bg-black z-10 w-[5px] sm:w-[7px] md:w-[9px]" />

            <div
              className="absolute inset-0 grid"
              style={{ gridTemplateColumns: "repeat(24, 1fr)" }}
            >

              {Array.from({ length: 24 }).map((_, colIndex) => (
                <div
                  key={colIndex}
                  className={clsx(
                    "border-gray-600 border-r-2 h-full"
                  )}
                />
              ))}
            </div>

            {/* 🎯 STRINGS LAYER (REAL POSITIONING) */}
            <div className="absolute inset-0 z-0">

              {Array.from({ length: 6 }).map((_, rowIndex) => {

                const totalStrings = 6;
                const spacing = 100 / totalStrings;

                let topValue = spacing / 2 + rowIndex * spacing;

                return (
                  <div
                    key={rowIndex}
                    className={clsx(
                      "absolute border-gray-300",
                      rowIndex === 0 && "border",
                      rowIndex === 1 && "border-[1.6px]",
                      rowIndex === 2 && "border-[2px]",
                      rowIndex === 3 && "border-[2.4px]",
                      rowIndex === 4 && "border-[2.8px]",
                      rowIndex === 5 && "border-[3.7px]"
                    )}
                    style={{
                      top: `${topValue}%`,
                      left: "6px",
                      width: "calc(100% - 6px)",
                      transform: "translateY(-4px)"
                    }}
                  />
                );
              })}

            </div>

          </div>

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