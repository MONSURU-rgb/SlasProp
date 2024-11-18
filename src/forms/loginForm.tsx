"use client";

import { useForm, yupResolver } from "@mantine/form";
import {
  Button,
  Container,
  FormLabel,
  InputAdornment,
  TextField,
  IconButton,
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Link from "next/link";
import { object, string } from "yup";

import { useLocalStorage } from "@/hooks/use-local-storage";
import { useLogin } from "../api/use-login";
import { showToast } from "@/utils/toast-style";
import { useRouter } from "next/navigation";

const schema = object({
  username: string().required(),
  password: string()
    .required()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /(?=.*[a-z])(?=.*[A-Z])/,
      "Password must contain at least one uppercase and one lowercase letter"
    ),
});

const LoginForm = () => {
  const { mutate: login } = useLogin();
  const [, setToken] = useLocalStorage<string>("token");
  const [, setUsername] = useLocalStorage<string>("username");
  const { push } = useRouter();

  const form = useForm({
    initialValues: {
      username: "",
      password: "",
      type: "admin",
      showPassword: false,
    },
    validate: yupResolver(schema),
  });

  async function handleSubmit({ showPassword, ...values }: typeof form.values) {
    login(values, {
      onSuccess: (response) => {
        setToken(response.data.access_token);
        showToast("success", <p>Login Successful! {response.message}</p>);
        setUsername(response.data.username);
        push("/dashboard");
      },
      onError: () => {
        showToast("error", <p> Login Failed! Please try again.</p>);
      },
    });
  }

  return (
    <Box
      width={500}
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 0px 2px 2px lightgrey",
        borderRadius: "16px",
        py: 4,
        mt: 6,
        ml: 3,
        mb: 6,
      }}>
      <Typography
        sx={{
          fontFamily: "monospace",
          fontSize: 17,
          fontWeight: "bold",
          mb: 1,
          px: 3,
        }}>
        Login
      </Typography>

      <Divider sx={{ maxWidth: "100%" }} />

      <Box
        component="form"
        onSubmit={form.onSubmit(handleSubmit)}
        sx={{ display: "flex", flexDirection: "column", px: 4 }}>
        <p style={{ color: "#26a69a", fontSize: 15 }}>
          Enter your login details to sign in.
        </p>
        <FormLabel sx={{ fontSize: 13 }}>User ID</FormLabel>
        <TextField
          {...form.getInputProps("username")}
          size="small"
          margin="normal"
          sx={{ color: "grey", mb: 1.5 }}
          error={Boolean(form.errors.username)}
          helperText={form.errors.username}
        />
        <FormLabel sx={{ fontSize: 13 }}>Password</FormLabel>
        <TextField
          type={form.values.showPassword ? "text" : "password"}
          {...form.getInputProps("password")}
          size="small"
          margin="normal"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => {
                    form.setFieldValue(
                      "showPassword",
                      !form.values.showPassword
                    );
                  }}>
                  {form.values.showPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={Boolean(form.errors.password)}
          helperText={form.errors.password}
        />

        <Link
          href="#"
          style={{
            textDecoration: "none",
            color: "red",
            fontWeight: "bold",
            marginLeft: "auto",
          }}>
          Forgot Password?
        </Link>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            type="submit"
            variant="contained"
            size="medium"
            sx={{
              mt: 2,
              backgroundColor: "#26a69a",
              "&:hover": { backgroundColor: "#26a69a" },
              borderRadius: "16px",
              boxShadow: "10px 10px 5px #269d91 inset",
              width: "150px",
            }}>
            Login
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default LoginForm;
