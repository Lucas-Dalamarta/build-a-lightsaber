import Image from "next/image"

import { useSaber } from "../../context/Saber";
import { ColorPicker } from "./ColorPicker"
import { HiltPicker } from "./HiltPicker"

export const Saber = () => {
  const { selectedColor, selectedHilt } = useSaber();

  return (
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: "32px"}}>
        <div
          style={{
            height: "392px",
            width: "12px",
            borderRadius: "8px",
            boxShadow: `0 0 16px 1px ${selectedColor}`,
            backgroundColor: `#fff`,
            transform: "translateY(5%)",
          }}
        />
        <div>
          <Image src={selectedHilt} alt="" />
        </div>
      </div>

      <div style={{ display: "flex", gap: "12px", flexDirection: "column"}}>
        <HiltPicker />
        <ColorPicker />
      </div>
    </div>
  )
}