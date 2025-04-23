// src/components/ScrollManager.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollManager() {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        if (hash) {
            const targetId = hash.replace("#", "");
            const el = document.getElementById(targetId);
            if (el) {
                window.scrollTo({
                    top: el.offsetTop - 68, // ajusta pro header fixo
                    behavior: "smooth",
                });
            }
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return null;
}
