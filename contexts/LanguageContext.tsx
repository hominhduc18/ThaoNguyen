"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "vi" | "en";

const LangContext = createContext<{
  lang: Lang;
  toggle: () => void;
}>({ lang: "vi", toggle: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("vi");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as Lang | null;
    if (saved === "vi" || saved === "en") setLang(saved);
  }, []);

  const toggle = () =>
    setLang((l) => {
      const next = l === "vi" ? "en" : "vi";
      localStorage.setItem("lang", next);
      return next;
    });

  return (
    <LangContext.Provider value={{ lang, toggle }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
