// Fretboard page for the Serenity Strings website.

import React from 'react'
import clsx from "clsx";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fretboard',
};

const FretboardPage = () => {

  const totalFrets = 24;
  const stringHeights = [1, 1.6, 2, 2.4, 2.8, 3.7]; // Thickness of each string in pixels
  const fretWidth = 2;

  const tunings = {
    standard: ["E","B","G","D","A","E"],
    dropD: ["D","B","G","D","A","E"]
  }

  const markedFrets = [3, 5, 7, 9, 12];
  
  const activeTuning = tunings.standard;
  const totalStrings = activeTuning.length;
  const nutWidth = 9;
  const stringLabelOffset = -16;
  // const startingFretWidth = 100 - nutWidth;

  const getStringPosition = (rowIndex: number) =>
    ((rowIndex + 0.5) / totalStrings) * 100;

  const getFretPosition = (fretNumber: number) =>
    ((fretNumber) / totalFrets)

  const getFretCenterPosition = (fretNumber: number) =>
    ((fretNumber - 0.5) / totalFrets)

  return (
    <main className = "p-4 sm:p-6 lg:p-8 md:mt-5 max-w-5xl mx-auto border border-slate-300 bg-slate-800">
      <h1 className = "text-2xl md:text-3xl font-bold mb-3"> Interactive Fretboard </h1>

      {/* Controls */}
      <section className = "bg-slate-800 items-end rounded-xl border border-slate-700 m-2 mb-4 md:m-3">
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

          {/* Scale */}
          <div className = "flex flex-col m-2 md:m-3">
            <label className = "text-sm text-slate-400"> Scale </label>
            <select className = "w-full sm:w-40 bg-slate-700 p-2 rounded">
              <option> None </option>
              <option> Major </option>
              <option> Minor </option>
            </select>
          </div>

          {/* Chord */}
          <div className = "flex flex-col m-2 md:m-3">
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
          <div className = "flex flex-col m-2 md:m-3">
            <label className = "text-sm text-slate-400"> Tuning </label>
            <select className = "w-full sm:w-40 bg-slate-700 p-2 rounded">
              <option> Standard </option>
              <option> Drop D </option>
            </select>
          </div>

          <div className = "flex flex-col m-2 md:m-3">
            <button className="bg-indigo-500 px-4 mt-5 py-2 rounded hover:bg-indigo-400">
              Clear
            </button>
          </div>
        </div>
      </section>

      {/* Fretboard Display */}

      {/* Main fretboard section container (the dark box) */}

      {/* Fretboard Display */}
      <section className="bg-slate-800 p-6 rounded-xl border border-slate-700 mb-4">

        <div className="relative flex flex-col items-center">

          <h2 className="font-semibold mb-4 text-center text-xl md:text-2xl">
            Fretboard
          </h2>

          {/* 🎯 FRETBOARD BOX */}
          <div className="relative w-full max-w-4xl aspect-[4/2] md:aspect-[4/1]">

            {/* 🎯 FRETS LAYER (BACKGROUND GRID) */}

            {/* Nut */}
            <div className="absolute left-0 top-0 h-full bg-black z-10 w-[9px] sm:w-[7px] md:w-[9px]" />

            {/* Frets */}
            <div
              className="absolute inset-0 z-0"
              style={{ gridTemplateColumns: "repeat(24, 1fr)" }}
            >

              {Array.from({ length: totalFrets }, (_, i) => i + 1).map((fretNumber) => (
                <div
                  key={fretNumber}
                  className={
                    "bg-gray-600 absolute"
                  }
                  style={{
                    left: `calc(${nutWidth}px + ((100% - ${nutWidth}px) * ${getFretPosition(fretNumber)}))`,
                    width: `${fretWidth}px`,
                    height: "100%",
                    transform: "translateX(-100%)"
                  }}
                />
              ))}
            </div>

            {/* Fret Dots */}
            <div className="absolute inset-0 z-20">

              {markedFrets.map((fretWithDot) =>
                fretWithDot === 12 ? (
                  <React.Fragment key={fretWithDot}>
                    
                    <div
                      className="md:h-[25px] md:w-[25px] h-[8px] w-[8px] md:top-[27.6%] top-[31%] -translate-x-[0.5px] rounded-full bg-white absolute"
                      style={{
                        left: `calc(${nutWidth}px + ((100% - ${nutWidth}px) * ${getFretCenterPosition(fretWithDot)}))`,
                        transform: "translateX(-53%)",
                      }}
                    />

                    <div
                      className="md:h-[25px] md:w-[25px] h-[8px] w-[8px] md:top-[61.2%] top-[64.5%] -translate-x-[0.5px] rounded-full bg-white absolute"
                      style={{
                        left: `calc(${nutWidth}px + ((100% - ${nutWidth}px) * ${getFretCenterPosition(fretWithDot)}))`,
                        transform: "translateX(-53%)",
                      }}
                    />

                  </React.Fragment>
                ) :
                <div
                  key={fretWithDot}
                  className={
                    "md:h-[25px] md:w-[25px] h-[8px] w-[8px] md:top-[44.5%] top-[47.5%] -translate-x-[0.5px] rounded-full bg-white absolute"
                  }
                  style={{
                    left: `calc(${nutWidth}px + ((100% - ${nutWidth}px) * ${getFretCenterPosition(fretWithDot)}))`,
                    transform: "translateX(-53%)"
                  }}
                />
              )}
            </div>

            {/* Strings */}
            <div className="absolute inset-0 z-10">

              {stringHeights.map((heightOfString, rowIndex) => {

                return (
                  <div
                    key={rowIndex}
                    className={
                      "absolute bg-gray-300"
                    }
                    style={{
                      top: `${getStringPosition(rowIndex)}%`,
                      left: `${nutWidth}px`,
                      width: `calc(100% - ${nutWidth}px)`,
                      transform: "translateY(-50%)",
                      height: `${heightOfString}px`
                    }}
                  />
                );
              })}

            </div>

            {/* String Labels */}
            <div className="absolute inset-0 z-30">

              {activeTuning.map((note, rowIndex) => {

                return (
                  <div
                    key={rowIndex}
                    className={"absolute border-gray-300"}
                    style={{
                      top: `${getStringPosition(rowIndex)}%`,
                      left: `${stringLabelOffset}px`,
                      transform: "translateY(-50%)"
                    }}
                  >
                    {note}
                    
                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* Legend */}
      <section className = "bg-slate-800 p-4 md:p-5 rounded-xl border border-slate-700 ">
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