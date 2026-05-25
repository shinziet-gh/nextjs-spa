'use client';
import { ColorModeIcon } from "./ColorModeIcon";
import { useState, useEffect, ReactNode } from 'react';

export function ColorModeToggle({
    icon,
}: {
    icon: ReactNode;
}) {
    console.log('Does ColorModeToggle run on server or client?');

    const [colorMode, setColorMode] = useState<'dark' | 'light'>("light");

    function handleClick() {
        const newColorMode = colorMode === "light" ? "dark" : "light";
        setColorMode(newColorMode);
    }

    useEffect(() => {
        if (colorMode === 'dark') {
            document.body.classList.add('dark');
            document.documentElement.style.setProperty('--background', '#0a0a0a');
            document.documentElement.style.setProperty('--foreground', '#ededed');
        }
        else {
            document.body.classList.remove('dark');
            document.documentElement.style.setProperty('--background', '#ffffff');
            document.documentElement.style.setProperty('--foreground', '#171717');
        }
    }, [colorMode]);

    // Default the color mode to what is specified in the OS or browser
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setColorMode(mediaQuery.matches ? 'dark' : 'light');
    }, []);

    return (
        <button onClick={handleClick} className="flex items-center gap-2 rounded bg-blue-500 px-4 py-2 text-white">
            {icon}
            {colorMode === 'light' ? 'Dark' : 'Light'}
        </button>
    );
}