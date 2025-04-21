"use client";
import React, { createContext, useMemo, useState } from 'react'

export const HeaderVisibilityContext = createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([true, () => { }]);

const HeaderVisibilityContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [headerVisibility, setheaderVisibility] = useState<boolean>(true);
  const value: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useMemo(
    () => [headerVisibility, setheaderVisibility],
    [headerVisibility]
  );

  return (
    <HeaderVisibilityContext.Provider value={value}>
      {children}
    </HeaderVisibilityContext.Provider>
  )
}

export default HeaderVisibilityContextProvider