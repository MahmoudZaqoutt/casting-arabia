import { IconButton, Menu, MenuItem } from "@mui/material";
import axios from "axios";
import * as React from "react";
import Option from "./Option/Option";
import { GrView } from "react-icons/gr";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IPropsCard } from "@/interfaces/props/IPropsCard";
import { useRouter } from "next/router";
import Link from "next/link";

const ITEM_HEIGHT = 48;

export default function Select(props: IPropsCard) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDelete = async (id: any) => {
    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(
        `http://casting-ec2-1307338951.us-east-2.elb.amazonaws.com:7001/opportunities/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res) {
        router.push(router.pathname);
      }
    } catch (error) {}
  };

  const handleEdit = async (id: any) => {
    router.push(`/creator/opportunities/${id}/edit/step-one`);
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
          <Link href={`/creator/opportunities/${props.Id}`}>
            <Option Icon={<GrView className="text-xl" />} content="View" />
          </Link>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <button onClick={() => handleEdit(props.Id)}>
            <Option
              Icon={<MdOutlineModeEditOutline className="text-xl" />}
              content="Edit"
            />{" "}
          </button>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <button onClick={() => handleDelete(props.Id)}>
            <Option
              Icon={<MdDeleteOutline className="text-xl" />}
              content="Delete"
            />{" "}
          </button>
        </MenuItem>
      </Menu>
    </div>
  );
}
