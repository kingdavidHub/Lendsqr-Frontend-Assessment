import { createContext, useState, ReactNode } from "react";

interface ToggleContextType {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ToggleContext = createContext<ToggleContextType | undefined>(undefined);