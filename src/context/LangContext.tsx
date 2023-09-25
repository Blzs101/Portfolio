"use client"
import { useContext, createContext, useState, useEffect } from "react";

type Language = "EN" | "HUN";


type Context = {
    language: Language,
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export const langContext = createContext<Context | null>(null);


export default function LangContextProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("EN");

    return (
        <langContext.Provider value={{ language, setLanguage }}>
            {children}
        </langContext.Provider>
    )
}

export function useLangContext() {
    const context = useContext(langContext);
    if (!context) {
        throw new Error("useAppContext must be used within a AppContextProvider")
    }
    return context;
}