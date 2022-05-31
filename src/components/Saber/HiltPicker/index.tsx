import { MenuItem, Select } from "@mui/material";
import { useSaber } from "../../../context/Saber";
import { hilts } from "../../../lib/hilts";

export const HiltPicker = () => {
  const { selectedHilt, handleChangeHilt } = useSaber();

  return (
    <Select
      labelId="demo-simple-select-helper-label"
      id="demo-simple-select-helper"
      value={hilts.indexOf(selectedHilt)}
      onChange={handleChangeHilt}
    >
      <MenuItem value={0}>Anakin</MenuItem>
      <MenuItem value={1}>Leia</MenuItem>
      <MenuItem value={2}>Luke</MenuItem>
      <MenuItem value={3}>Mace Windu</MenuItem>
      <MenuItem value={4}>Rey</MenuItem>
      <MenuItem value={5}>Darth Vader</MenuItem>
    </Select>
  )
}