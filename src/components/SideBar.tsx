import React from "react";
import sampleImage from "../assets/profile-picture.png";

import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import {
  Avatar,
  Box,
  Button,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { useGetProfile } from "@/api/use-profile";

const SideBar = () => {
  const [username] = useLocalStorage<string>("username");
  const { data } = useGetProfile();
  console.log({ data });
  return (
    <Box
      sx={{
        overflow: "auto",
        maxWidth: 270,
        boxShadow: "10px 0px 10px rgba(108, 122, 137, 0.5)",
        left: "4%",
        position: "absolute",
      }}>
      <List>
        <Container sx={{ borderBottom: "1px solid grey" }}>
          <Box
            sx={{
              backgroundColor: "#26a69a",
              minHeight: "80px",
              ml: -3,
              mr: -3,
              mt: -1,
            }}
          />
          <Avatar
            src={sampleImage.src}
            sx={{ width: 80, height: 80, marginTop: -6 }}
          />
          <Box sx={{ display: "flex", my: 2 }}>
            <Box>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "18px", color: "black" }}>
                {username}
              </Typography>
              <Typography sx={{ fontSize: "12px" }}>
                User ID :#269d91
              </Typography>
            </Box>
            <Button
              size="small"
              sx={{
                color: "#26a69a",
                fontSize: "12px",
                border: "1px solid #26a69a",
                width: 70,
                my: 1,
                ml: 2,
                borderRadius: 4,
              }}>
              <EditOutlinedIcon
                sx={{ mr: 1, color: "#26a69a", fontSize: "large" }}
              />
              Edit
            </Button>
          </Box>
        </Container>

        <ListItem disablePadding>
          <ListItemButton
            sx={{ borderBottom: "1px solid lightgrey" }}
            component={Link}
            to="/dashboard">
            <ListItemText
              sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
              primaryTypographyProps={{ fontSize: "12px" }}
              primary="Dashboard"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{ borderBottom: "1px solid lightgrey" }}
            component={Link}
            to="/dashboard/manage-officers">
            <ListItemText
              sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
              primaryTypographyProps={{ fontSize: "12px" }}
              primary="Manage Officers"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{ borderBottom: "1px solid lightgrey" }}
            component={Link}
            to="/dashboard/manage-content">
            <ListItemText
              sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
              primaryTypographyProps={{ fontSize: "12px" }}
              primary="Manage Content"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{ borderBottom: "1px solid lightgrey" }}
            component={Link}
            to="/dashboard/user-roles">
            <ListItemText
              sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
              primaryTypographyProps={{ fontSize: "12px" }}
              primary="User Roles"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton
            sx={{ borderBottom: "1px solid lightgrey" }}
            component={Link}
            to="/dashboard/reports">
            <ListItemText
              sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
              primaryTypographyProps={{ fontSize: "12px" }}
              primary="Reports"
            />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton component={Link} to="/dashboard/notifications">
            <ListItemText
              sx={{ color: "#26a69a", textTransform: "uppercase", ml: 2 }}
              primaryTypographyProps={{ fontSize: "12px" }}
              primary="Notifications"
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
