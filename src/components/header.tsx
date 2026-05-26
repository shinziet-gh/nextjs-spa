// @/ is an import path alias for the src folder
import { ColorModeIcon } from "@/app/ColorModeIcon";
import { ColorModeToggle } from "@/app/ColorModeToggle";

export function Header() {
    console.log("Header rendered");
    return (
        <header className="flex w-full items-center justify-between">
            <span className="text-lg font-bold">Header</span>
            <ColorModeToggle icon={<ColorModeIcon />} />
        </header>
    );
}