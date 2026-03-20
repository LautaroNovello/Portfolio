import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@heroui/react";
import { Sun, Moon } from "lucide-react";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <Switch
            isSelected={theme === "dark"}
            size="lg"
            color="primary"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <Moon className={className} size={16} />
                ) : (
                    <Sun className={className} size={16} />
                )
            }
            onValueChange={(isSelected) => setTheme(isSelected ? "dark" : "light")}
        />
    );
}