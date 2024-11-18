import React from "react";

import { Box, Typography, Button } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import Footer from "./Footer";
import TransactionTable from "./TransactionTable";

const TaxPaymentReport = () => {
  return (
    <>
      <Box sx={{ minHeight: 500, marginLeft: "25%" }}>
        <Box
          sx={{
            mt: 4,
            borderBottom: "1px solid lightgray",
            pb: 2,
            display: "flex",
          }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", flexGrow: 1 }}>
            Tax Payment By End Users
          </Typography>

          <Button
            sx={{
              color: "#26a69a",
              border: "1px solid #26a69a",
              borderRadius: "0px",
              p: 2,
              textTransform: "capitalize",
            }}>
            <ExitToAppIcon /> &nbsp;Export
          </Button>
        </Box>

        <Box sx={{ display: "flex", mt: 2 }}>
          <Typography
            sx={{
              color: "#26a69a",
              fontSize: "14px",
              mr: 4,
              fontWeight: "bold",
            }}>
            Select Date Range
          </Typography>
        </Box>

        <Box sx={{ mt: 2, mb: 2 }}>
          <Typography sx={{ fontWeight: "bold" }}>
            Recent Transactions
          </Typography>
          <TransactionTable />
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default TaxPaymentReport;
