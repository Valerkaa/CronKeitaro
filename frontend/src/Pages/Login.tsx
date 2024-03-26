import { LockOutlined } from "@mui/icons-material";
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const LoginToMain = async () => {
        if (!email || !password) {
            alert('Please enter both email and password.');
            return;
        }

        try {
            const data = {
                email,
                password,
            };

            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            };

            const response = await fetch('/login', options);

            if (response.ok) {
                const responseData = await response.json();

                if (responseData.success || responseData.loggedIn) {
                    console.log('Login successful!');
                    navigate('/main');
                } else {
                    alert('Login failed: ' + responseData.message || 'Invalid credentials');
                }
            } else {
                console.error('Login error:', response.statusText);
                alert('Login failed. Please check your network connection or try again later.');
            }
        } catch (error) {
            console.error('Unexpected error:', error);
            alert('An unexpected error occurred. Please try again later.');
        }
    };

    return (
        <>
            <Container maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        mt: 20,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.light" }}>
                        <LockOutlined />
                    </Avatar>
                    <Typography variant="h5">Login</Typography>
                    <Box sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="password"
                            name="password"
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />

                        <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={LoginToMain}
                        >
                            Login
                        </Button>

                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default Login;