"use client";

import React, {useState, createContext} from 'react';

const OptionContext = createContext<[string, React.Dispatch<React.SetStateAction<string>>]>(["", () => {}]);

const OptionContextProvider = ({children}: {children:React.ReactNode}) => {
    const [option, setoption] = useState<string>("");
  return (
    <OptionContext.Provider value={[option, setoption]}>
        {children}
    </OptionContext.Provider>
  )
}

export default OptionContextProvider;