import './App.css';
import TextField from '@mui/material/TextField';
import {Avatar, Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, Typography} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Join from "./components/join"

export default function App() {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{m: 1, bgcolor: 'primary.main'}}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component={"h1"} variant={"h5"}>
                    Sign in
                </Typography>
            </Box>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address or ID"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />

            <FormControlLabel
                control={<Checkbox value="remember" color="primary"/>}
                label="Remember me"
            />
            <Button type="submit"
                    fullWidth
                    variant="contained"
                    sx={{mt: 3, mb: 2}}
            >
                Sign IN
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link>로그인 정보 찾기</Link>
                </Grid>
                <Grid item>
                    <Link>회원가입</Link>
                </Grid>
            </Grid>
        </Container>

    );
}
