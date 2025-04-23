import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { ScrollManager } from "./components/ScrollManager";

export function App() {
    return (
        <BrowserRouter>
            <ScrollManager />
            <Router />
        </BrowserRouter>
    )
}