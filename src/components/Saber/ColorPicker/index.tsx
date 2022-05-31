import { useEffect, useState } from "react"

import Radio from '@mui/material/Radio';
import { colors } from "../../../lib/colors";
import { useSaber } from "../../../context/Saber";

export const ColorPicker = () => {
  const { selectedColor, handleChangeColor } = useSaber();
  // const availableGlows = [
  //   "#2e77d0",
  //   "rgb(172, 57, 193)",
  //   "#1ed760",
  //   "#cd1a2b",
  //   "rgb(253, 175, 33)",
  //   "#fff",
  // ]
  
  

  const controlProps = (item: any) => ({
    inputProps: { 'aria-label': item },
    name: 'color-radio-button-demo',
    checked: selectedColor === item,
    value: colors.indexOf(item),
    onChange: handleChangeColor,
  });
  
  return (
    <>
      <div>
        {colors.map((item, index) => {
          return (
            <Radio 
              key={item} 
              {...controlProps(colors[index])}
              sx={{
                color: item,
                '&.Mui-checked': {
                  color: item,
                },
              }}
            />
          )
        })}
      </div>
    </>      
  )
}
