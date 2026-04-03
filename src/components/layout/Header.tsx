// Header component for the SerenityStrings application. 
// It includes a navigation bar with links to different sections of the app, 
// such as Home, Fretboard, Progressions, Metronome, Tuner, and About. 
// The header is styled using Tailwind CSS classes for layout and design.

import Link from "next/link";

const Header = () => {
    return(
        <header className = "flex justify-between items-center p-4 border-b border-gray-700">
            <h1 className = "text-xl font-bold"> SerenityStrings </h1>

            <nav className = "flex gap-4">
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
