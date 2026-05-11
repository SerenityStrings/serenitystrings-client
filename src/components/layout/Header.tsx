// Header component for the SerenityStrings application. 
// It includes a navigation bar with links to different sections of the app, 
// such as Home, Fretboard, Progressions, Metronome, Tuner, and About. 
// The header is styled using Tailwind CSS classes for layout and design.

import Link from "next/link";

const Header = () => {
    return(
        <header className="flex flex-col md:flex-row md:justify-between items-center p-4 border-b border-gray-400 gap-4">

        <div className="flex items-center w-20">
            <img
                src="/SerenityStrings.png"
                alt="SerenityStrings Logo"
            />
        </div>

        <nav className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-3xl">
            <Link href="/">Home</Link>
            <Link href="/fretboard">Fretboard</Link>
            <Link href="/progressions">Progressions</Link>
            <Link href="/metronome">Metronome</Link>
            <Link href="/tuner">Tuner</Link>
            <Link href="/about">About</Link>
        </nav>

        </header>
    );
}

export default Header
