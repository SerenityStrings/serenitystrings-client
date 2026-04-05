// Header component for the SerenityStrings application. 
// It includes a navigation bar with links to different sections of the app, 
// such as Home, Fretboard, Progressions, Metronome, Tuner, and About. 
// The header is styled using Tailwind CSS classes for layout and design.

import Link from "next/link";

const Header = () => {
    return(
        <header className = "flex justify-between items-center p-4 border-b border-gray-400">
            <div className = "flex gap-3 items-center">
                <img src = "/SerenityStrings.png" alt = "SerenityStrings Logo" width = "60"/>
                <h1 className = "text-4xl"> SerenityStrings </h1>
            </div>
            <nav className = "flex gap-5">
                <Link href = "/"> Home </Link>
                <Link href = "/fretboard"> Fretboard </Link>
                <Link href = "/progressions"> Progressions </Link>
                <Link href = "/metronome"> Metronome </Link>
                <Link href = "/tuner"> Tuner </Link>
                <Link href = "/about"> About </Link>
            </nav>
        </header>
    );
}

export default Header
