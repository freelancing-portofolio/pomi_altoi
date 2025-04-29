"use client";

import { createContext, ReactNode, useCallback } from "react";

type ScrollContextType = {
   handleScroll: (e: React.MouseEvent<HTMLElement>, label: string) => void;
};

export const ScrollContext = createContext<ScrollContextType>({
   handleScroll: () => {},
});

export function ScrollProvider({ children }: { children: ReactNode }) {
   const handleScroll = useCallback(
      (e: { preventDefault: () => void }, label: string) => {
         e.preventDefault();
         const id = label.toLowerCase().replace(/\s+/g, "");
         const el = document.getElementById(id);
         if (el && label == "Hero") {
            window.scrollTo({ top: 0, behavior: "smooth" });
         } else if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
         }
      },
      []
   );

   return (
      <ScrollContext.Provider value={{ handleScroll }}>
         {children}
      </ScrollContext.Provider>
   );
}
