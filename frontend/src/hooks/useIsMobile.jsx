import { useEffect, useState } from "react";

export function useIsMobile(MOBILE_BREAKPOINT = 768) {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth < MOBILE_BREAKPOINT);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    const handler = (event) => setIsMobile(event.matches);

    // Añade listener para cambios
    mediaQuery.addEventListener("change", handler);

    // Limpieza
    return () => mediaQuery.removeEventListener("change", handler);
  }, [MOBILE_BREAKPOINT]);

  return isMobile;
}
