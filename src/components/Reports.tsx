import React from "react";

import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Reports = () => {
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
            Reports
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "25%",
            mt: 4,
          }}>
          <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
            <Button
              sx={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "black",
                textTransform: "capitalize",
              }}
              component={Link}
              to="/dashboard/tax-payment-report">
              Tax Payment By End Users
            </Button>
          </Box>

          <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
            <Button
              sx={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "black",
                textTransform: "capitalize",
              }}
              component={Link}
              to="/dashboard/tax-payment-report">
              Queries From End Users
            </Button>
          </Box>

          <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
            <Button
              sx={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "black",
                textTransform: "capitalize",
              }}
              component={Link}
              to="/dashboard/tax-payment-report">
              Field Tasks
            </Button>
          </Box>

          <Box sx={{ border: "1px solid lightgrey", p: 3, display: "flex" }}>
            <Button
              sx={{
                fontWeight: "bold",
                fontSize: "12px",
                color: "black",
                textTransform: "capitalize",
              }}
              component={Link}
              to="/dashboard/tax-payment-report">
              Certificate of Occupancy
            </Button>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default Reports;
