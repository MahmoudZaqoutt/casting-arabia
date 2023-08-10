import * as React from "react";
import Dialog from "@mui/material/Dialog";
import { IPropsCard } from "@/interfaces/props/IPropsCard";
import TalentRegister from "@/components/TalentRegister/TalentRegister";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue?: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue ? selectedValue : "");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <TalentRegister />
    </Dialog>
  );
}

export default function SimpleDialogDemo(props: IPropsCard) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleClickOpen} className={props.className}>
        {props.content}
      </button>
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
}
