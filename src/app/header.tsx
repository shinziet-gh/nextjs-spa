import { ColorModeIcon } from "./ColorModeIcon";
import { ColorModeToggle } from "./ColorModeToggle";

export function Header() {
    console.log("Header rendered");
    return (
        <header className="flex w-full items-center justify-between">
            <span className="text-lg font-bold">Header</span>
            <ColorModeToggle icon={<ColorModeIcon />} />
        </header>
    );
}