import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Box,
  Typography,
  Paper,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login submitted");
    // Call your login API here
    console.log("Logging in:", { username, password });
  };

  return (
    <Box
      sx={{
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg,rgb(255, 231, 224) 0%, #f8fafc 100%)",
      }}
    >
      <Container maxWidth="sm">
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 4,
            boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.15)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mb: 2,
            }}
          >
            <LockOutlinedIcon sx={{ fontSize: 48, color: "#6366f1", mb: 1 }} />
            <Typography
              variant="h5"
              gutterBottom
              align="center"
              sx={{ fontWeight: 600 }}
            >
              Login
            </Typography>
          </Box>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 2,
                background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
                color: "#fff",
                fontWeight: 600,
                boxShadow: "0 2px 8px rgba(99,102,241,0.15)",
                "&:hover": {
                  background:
                    "linear-gradient(90deg, #818cf8 0%, #6366f1 100%)",
                },
              }}
            >
              Log In
            </Button>
            <Typography
              variant="body2"
              align="right"
              sx={{ mt: 1, color: "#6366f1", cursor: "pointer" }}
            >
              Forgot password?
            </Typography>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                style={{
                  color: "#6366f1",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
              >
                Sign Up
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Login;
