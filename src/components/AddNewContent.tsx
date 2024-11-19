"use client";

import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import Footer from "./Footer";
import TextEditor from "./TextEditor";

const AddNewContent = () => {
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
            Add New Content
          </Typography>

          <Link
            href="/dashboard/manage-content"
            style={{
              backgroundColor: "#26a69a",
              color: "white",
              borderRadius: "0px",
              marginLeft: 2,
              padding: 2,
              textTransform: "capitalize",
            }}
          >
            Publish
          </Link>
        </Box>

        <Box sx={{ marginLeft: "25%", mt: 4, pb: 2 }}>
          <TextField
            label="Enter Page Name"
            fullWidth
            InputLabelProps={{
              style: {
                color: "black",
                fontSize: "14px",
              },
            }}
          />
        </Box>

        <Box sx={{ marginLeft: "25%", mt: 2, pb: 2 }}>
          <TextEditor />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default AddNewContent;
