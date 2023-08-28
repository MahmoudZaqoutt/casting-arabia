import * as React from "react";
import Chip from "@mui/material/Chip";
import { IPropsModal } from "@/interfaces/props/IPropsModal";

interface ChipData {
  key: number;
  label: string;
}

export default function Chips(props: IPropsModal) {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([]);
  const [date, setDate] = React.useState<any>();

  React.useEffect(() => {
    const date = localStorage.getItem("date");
    setDate(date ? date : date);
  }, []);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips: any) =>
      chips.filter((chip: any) => chip !== chipToDelete)
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
