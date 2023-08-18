// import React from "react";

// const Select = () => {
//   return <div>Select</div>;
// };

// export default Select;

import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { GrView } from "react-icons/gr";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import Option from "./Option/Option";

const ITEM_HEIGHT = 48;

export default function Select() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e: any) => {
    console.log(e);
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "15ch",
          },
        }}
        onChange={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Option Icon={<GrView className="text-xl" />} content="View" />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Option
            Icon={<MdOutlineModeEditOutline className="text-xl" />}
            content="Edit"
          />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Option
            Icon={<MdDeleteOutline className="text-xl" />}
            content="Delete"
          />
        </MenuItem>
      </Menu>
    </div>
  );
}
