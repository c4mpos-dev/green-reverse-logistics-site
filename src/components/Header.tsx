import { useState } from "react";
import { NavLink } from "react-router-dom";

import GRLSimbol from "../assets/simbol.png";
import { Menu } from "./Menu"; // botão de hambúrguer
import { SidebarMenu } from "./SidebarMenu"; // novo componente que vamos criar

type RouteItem = {
    name: string;
    path: string;
};

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const routes: RouteItem[] = [
        { name: "Início", path: "/" },
        { name: "Sobre Nós", path: "/sobre" },
        { name: "Serviços", path: "/servicos" },
        { name: "Como Funciona", path: "/faq" },
        { name: "Parceiros", path: "/parceiros" },
        { name: "Contato", path: "/contato" },
    ];

    return (
        <>
            <header className="w-full fixed h-[68px] top-0 left-0 bg-green-700 text-white shadow-md shadow-black/50 z-30">
                <div className="flex h-full md:justify-between items-center px-6 py-6">
                    <div className="flex items-center gap-3">
                        <img src={GRLSimbol} className="h-10 object-cover" />
                        <h1 className="text-xl font-bold mt-1">GRL</h1>
                    </div>

                    <div className="flex md:hidden items-center ml-auto">
                        <button onClick={() => setIsMenuOpen(true)}>
                            <Menu checked={isMenuOpen} onChange={() => setIsMenuOpen(!isMenuOpen)} />
                        </button>
                    </div>

                    <nav className="hidden md:flex gap-6">
                        {routes.map((route) => (
                            <NavLink key={route.path} to={route.path}>
                                {route.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            {/* Sidebar para mobile */}
            <SidebarMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                routes={routes}
            />
        </>
    );
}
