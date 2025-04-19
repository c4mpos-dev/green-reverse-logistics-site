import { NavLink } from "react-router-dom";
import { Menu } from "./Menu";

type RouteItem = {
    name: string;
    path: string;
};

type SidebarMenuProps = {
    isOpen: boolean;
    onClose: () => void;
    routes: RouteItem[];
};

export function SidebarMenu({ isOpen, onClose, routes }: SidebarMenuProps) {
    return (
        <div>
            {/* Fundo escuro (overlay) */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={onClose}
            />

            {/* Menu lateral */}
            <div
                className={`fixed top-0 right-0 w-3/5 h-full bg-neutral-200 z-40 shadow-lg shadow-black transform transition-transform duration-300 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-xl font-bold text-black">Navegação</h2>
                        <Menu checked={isOpen} onChange={onClose} />
                    </div>

                    {routes.map((route) => (
                        <NavLink
                            key={route.path}
                            to={route.path}
                            className="py-3 text-neutral-900 font-medium border-b border-neutral-300"
                            onClick={onClose}
                        >
                            {route.name}
                        </NavLink>
                    ))}
                    <span className="mt-auto text-xs text-gray-400">
                        © 2025 GRL
                    </span>
                </div>
            </div>
        </div>
    );
}
