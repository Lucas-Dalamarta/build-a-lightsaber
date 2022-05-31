import React, { createContext, useContext, useState } from "react";
import { colors } from "../../lib/colors";
import { hilts } from "../../lib/hilts";

type SaberContextType = {
  selectedColor: typeof colors[0];
  selectedHilt: typeof hilts[0];
  handleChangeColor: (event: any) => void;
  handleChangeHilt: (event: any) => void;
};

const SaberContext = createContext({} as SaberContextType);

export const SaberProvider = ({ children }: any) => {
  const [selectedHilt, setSelectedHilt] = useState(hilts[0])
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const handleChangeHilt = (event: any) => setSelectedHilt(hilts[event.target.value])
  const handleChangeColor = (event: any) => setSelectedColor(colors[event.target.value])

  return (
    <SaberContext.Provider value={{ 
      selectedColor, 
      selectedHilt,
      handleChangeColor,
      handleChangeHilt,
    }}>
      {children}
    </SaberContext.Provider>
  )
};

export const useSaber = () => useContext(SaberContext);
