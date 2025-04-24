import { Routes, Route } from "react-router-dom"

import { DefaultLayout } from "./layouts/DefaultLayout.tsx";

import { Home } from "./pages/Home.tsx";
import { Faq } from "./pages/Faq.tsx";
import { Contact } from "./pages/Contact.tsx";
import { About } from "./pages/About.tsx";
import { Partners } from "./pages/Partners.tsx";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/parceiros" element={<Partners />} />
                <Route path="/faq" element={<Faq />}/>
                <Route path="/contato" element={<Contact />}/>
            </Route>
        </Routes>
    );
}