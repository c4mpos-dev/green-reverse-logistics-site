"use client"

import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export function ModeToggle() {
	const { setTheme } = useTheme();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon" className="h-9 w-9">
					<FontAwesomeIcon icon={faSun} className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
					<FontAwesomeIcon icon={faMoon} className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")} className="hover:cursor-pointer">Claro</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")} className="hover:cursor-pointer">Escuro</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")} className="hover:cursor-pointer">Sistema</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
