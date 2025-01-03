import AddIcon from "@mui/icons-material/Add";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Footer from "./Footer";

const ManageContent = () => {
  return (
    <>
      <Box sx={{ minHeight: 500, flex: 1 }}>
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

          <Link
            href="/dashboard/new-content"
            style={{
              backgroundColor: "#26a69a",
              color: "white",
              borderRadius: "0px",
              marginLeft: 8,
              padding: 8,
              textTransform: "capitalize",
            }}
          >
            <AddIcon /> &nbsp;Add New Content
          </Link>
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
            <Link
              style={{
                fontWeight: "bold",
                fontSize: "13px",
                marginRight: 2,
                color: "black",
                textTransform: "capitalize",
              }}
              href="/dashboard/edit-taxation-rules"
            >
              Taxation Rules
            </Link>

            <MoreVertIcon sx={{ color: "orange" }} />
          </Box>

          <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
            <Link
              style={{
                fontWeight: "bold",
                fontSize: "13px",
                marginRight: 2,
                color: "black",
                textTransform: "capitalize",
              }}
              href="/dashboard/edit-registration-rules"
            >
              Registration Rules
            </Link>

            <MoreVertIcon sx={{ color: "orange" }} />
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default ManageContent;
