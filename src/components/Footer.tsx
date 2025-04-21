import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faLocationDot,
    faCode
} from "@fortawesome/free-solid-svg-icons";

export function Footer() {
    return (
        <footer className="bg-green-700 text-white w-full z-10 mt-auto">
            <div className="flex justify-center items-center sm:justify-between w-full">
                <div className="flex flex-col sm:w-full sm:flex-row sm:justify-between gap-8 px-8 py-6 ">
                    {/* Desenvolvedor */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2 mb-2">
                            <FontAwesomeIcon icon={faCode} />
                            <p>Desenvolvido por <a href="https://github.com/c4mpos-dev" className="underline hover:cursor-pointer">Cauã Campos</a></p>
                        </div>
                        
                        <p className="text-xs text-white/80">© {new Date().getFullYear()} Green Reverse Logistics. Todos os direitos reservados.</p>
                    </div>

                    {/* Contato */}
                    <div className="flex flex-col">
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faPhone} className="w-4 h-4"/>
                                (24) 99922-7588
                            </li>
                            <li className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faLocationDot} className="w-4 h-4"/>
                                Piraí, Rio de Janeiro
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
