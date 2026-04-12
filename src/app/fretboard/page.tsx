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
        <select className = "bg-slate-700 p-2 rounded">
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
        <select className = "bg-slate-700 p-2 rounded">
          <option> Major </option>
          <option> Minor </option>
        </select>

        {/* Chord */}
        <label className = "text-sm text-slate-400"> Chord </label>
        <select className = "bg-slate-700 p-2 rounded">
          <option> I (Major) </option>
          <option> ii (Minor) </option>
          <option> iii (Minor) </option>
          <option> IV (Major) </option>
          <option> V (Major) </option>
          <option> vi (Minor) </option>
          <option> vii° (Diminished) </option>
          <option> Dm </option>
        </select>

        <label className = "text-sm text-slate-400"> Tuning </label>
        <select className = "bg-slate-700 p-2 rounded">
          <option> Standard </option>
          <option> Drop D </option>
        </select>

        <button className="bg-indigo-500 px-4 py-2 rounded hover:bg-indigo-400">
          Clear
        </button>
      </div>

      </section>

      {/* Fretboard Display */}
      <section className=  "bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
        
      </section>

      {/* Legend */}
      <section className = "bg-slate-800 p-6 rounded-xl border border-slate-700 mb-6">
        
      </section>
    </main>
  )
}

export default FretboardPage