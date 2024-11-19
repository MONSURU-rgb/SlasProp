import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const ManageContent = () => {
  return (
    <>
      <Box sx={{ minHeight: 500 }}>
        <Box
          sx={{
            marginLeft: "25%",
            mt: 4,
            borderBottom: "1px solid lightgray",
            pb: 2,
            display: "flex",
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            Manage Contents & Attributes
          </Typography>

          <Button
            component={Link}
            to="/dashboard/new-content"
            sx={{
              backgroundColor: "#26a69a",
              color: "white",
              borderRadius: "0px",
              ml: 2,
              p: 2,
              textTransform: "capitalize",
              "&:hover": { backgroundColor: "#26a69a" },
            }}
          >
            <AddIcon /> &nbsp;Add New Content
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "25%",
            mt: 4,
          }}
        >
          <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginRight: 2 }}
            >
              Location
            </Typography>

            <MoreVertIcon sx={{ color: "orange" }} />
          </Box>

          <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
            <Typography
              sx={{ fontWeight: "bold", fontSize: "13px", marginRight: 2 }}
            >
              Zones
            </Typography>

            <MoreVertIcon sx={{ color: "orange" }} />
          </Box>

          <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
            <Button
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                marginRight: 2,
                color: "black",
                textTransform: "capitalize",
              }}
              component={Link}
              to="/dashboard/edit-taxation-rules"
            >
              Taxation Rules
            </Button>

            <MoreVertIcon sx={{ color: "orange" }} />
          </Box>

          <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
            <Button
              sx={{
                fontWeight: "bold",
                fontSize: "13px",
                marginRight: 2,
                color: "black",
                textTransform: "capitalize",
              }}
              component={Link}
              to="/dashboard/edit-registration-rules"
            >
              Registration Rules
            </Button>

            <MoreVertIcon sx={{ color: "orange" }} />
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ManageContent;
