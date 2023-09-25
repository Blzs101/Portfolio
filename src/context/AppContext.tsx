"use client"
import { useContext, createContext, useState, useEffect } from "react";

type Language = "EN" | "HUN";


type Context = {
    language: Language,
    setLanguage: React.Dispatch<React.SetStateAction<Language>>;
}

export const appContext = createContext<Context | null>(null);


export default function AppContextProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("EN");

    return (
        <appContext.Provider value={{ language, setLanguage }}>
            {children}
        </appContext.Provider>
    )
}

export function useAppContext() {
    const context = useContext(appContext);
    if (!context) {
        throw new Error("useAppContext must be used within a AppContextProvider")
    }
    return context;
}