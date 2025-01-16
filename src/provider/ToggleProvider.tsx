import { useState } from "react";
import { ToggleContext } from "../context/ToggleContext"

export const ToggleProvider = ({children}: { children: Readonly<React.ReactNode>}) => {
const [toggle, setToggle] = useState<boolean>(false);

  return (
    <ToggleContext.Provider value={{toggle, setToggle}}>
      {children}
    </ToggleContext.Provider>
  )
}
export default ToggleProvider