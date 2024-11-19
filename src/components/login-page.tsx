import Logo from "../assets/Logo.png";
import LoginImage from "../assets/login-image.png";

import Footer from "@/components/Footer";
import { Box } from "@mui/material";
import LoginForm from "../forms/loginForm";

const Login = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        flex: 1,
      }}
    >
      <div style={{ display: "flex", flex: 1, maxHeight: 50, paddingLeft: 20 }}>
        <Box
          component="img"
          sx={{
            maxHeight: 50,
          }}
          alt="Your logo."
          src={Logo.src}
        />
      </div>

      <Box
        sx={{
          display: "flex",
          backgroundColor: "#F8F8F8",
          mt: 2,
          pl: 4,
          justifyContent: "space-between",
        }}
      >
        <LoginForm />
        <Box
          component="img"
          sx={{
            ml: 10,
            maxHeight: 400,
            mt: 2,
          }}
          alt="Your logo."
          src={LoginImage.src}
        />
      </Box>
      <div
        style={{
          flex: 1,
          backgroundColor: "#F8F8F8",
        }}
      />

      <Footer />
    </div>
  );
};

export default Login;
