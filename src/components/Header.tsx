import { NavLink } from "react-router-dom";

type RouteItem = {
    name: string;
    path: string;
};

export const Header = () => {
    const routes: RouteItem[] = [
        { name: "Início", path: "/" },
        { name: "Sobre Nós", path: "/sobre" },
        { name: "Serviços", path: "/servicos" },
        { name: "Como Funciona", path: "/faq" },
        { name: "Parceiros", path: "/parceiros" },
        { name: "Contato", path: "/contato" },
    ];

    return (
        <header className="w-full fixed top-0 left-0 bg-green-900 text-white shadow-md shadow-black/50 z-50">
            <div className="flex justify-between items-center px-8 py-5">
                <h1 className="text-xl font-bold">GRL</h1>
                <nav className="hidden md:flex gap-6">
                    {routes.map((route) => (
                        <NavLink
                            key={route.path}
                            to={route.path}
                        >
                            {route.name}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </header>
    );
};
