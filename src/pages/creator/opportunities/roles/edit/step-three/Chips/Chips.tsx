import * as React from "react";
import Chip from "@mui/material/Chip";
import { IPropsModal } from "@/interfaces/props/IPropsModal";

interface ChipData {
  key: number;
  label: string;
}

export default function Chips(props: IPropsModal) {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };

  return (
    <div className="flex items-center gap-5 !w-[500px] ">
      {chipData.map((data) => {
        return (
          <div key={data.key}>
            <Chip label={data.label} onDelete={handleDelete(data)} />
          </div>
        );
      })}
    </div>
  );
}
