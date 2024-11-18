import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ManageRolesDrawer from "./ManageRolesDrawer";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Officer } from "@/builder/types/officer";

interface OfficerProps {
  officer: Officer;
}
const DropDownMenu = (props: OfficerProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: Record<string, any>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="div">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}>
        <MoreVertIcon sx={{ color: "lightgrey" }} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem>
          <ManageRolesDrawer officer={props.officer} />
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to={`/dashboard/officer-details/${props.officer.officerID}`}
          state={{ officer: props.officer }}>
          Details
        </MenuItem>
        <MenuItem onClick={handleClose}>Delete</MenuItem>
      </Menu>
    </Box>
  );
};

export default DropDownMenu;
