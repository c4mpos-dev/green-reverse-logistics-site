import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GRLSimbol from "../assets/simbol.png";
import { Menu } from "./Menu";
import { SidebarMenu } from "./SidebarMenu";

type RouteItem = {
    name: string;
    path: string;
};

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    const routes: RouteItem[] = [
        { name: "Início", path: "/" },
        { name: "Como funciona?", path: "/#como-funciona" },
        { name: "Sobre nós", path: "/sobre" },
        { name: "Parceiros", path: "/parceiros" },
        { name: "FAQ", path: "/faq" },
        { name: "Contato", path: "/contato" },
    ];

    const handleScroll = (path: string) => {
        const [basePath, hash] = path.split("#");

        if (window.location.pathname === basePath) {
            // Se estiver na mesma página, faz a rolagem suave
            if (hash) {
                const targetElement = document.getElementById(hash);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 68,
                        behavior: "smooth",
                    });
                }
            } else {
                // Se não tiver hash, rola até o topo
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            }
        } else {
            // Navega para a nova página normalmente
            navigate(path);
        }
    };

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
                            <NavLink
                                key={route.path}
                                to={route.path}
                                onClick={() => handleScroll(route.path)} // Navegação suave
                                className="rounded-lg cursor-pointer transition-all duration-200 hover:scale-105 hover:bg-green-800 px-2 py-2"
                            > 
                                {route.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            <SidebarMenu
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
                routes={routes}
            />
        </>
    );
}