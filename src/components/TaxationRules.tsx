import React from "react";
import TextEditor from "./TextEditor";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import Footer from "./Footer";

const TaxationRules = () => {
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
          }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            Taxation Rules
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
            }}>
            Update Content
          </Link>
        </Box>

        <Box sx={{ marginLeft: "25%", mt: 4, pb: 2 }}>
          <TextEditor />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default TaxationRules;
