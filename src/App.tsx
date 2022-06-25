import {AppBar, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from '@mui/icons-material';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {Register} from "./pages/Register/Register";
import {Login} from "./pages/Login/Login";
import {Home} from "./pages/Home";
import styled from "styled-components";

function App() {
    return (
        <Header>
            {/*Header App bar with burger menu*/}
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr: 2}}
                    >
                        <Menu/>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <nav>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Register</NavLink>
                        </nav>
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>


            </AppBar>

            <WrapContainer>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='/404' element={<h1>404 PAGE NOT FOUND</h1>}/>
                    <Route path='*' element={<Navigate to='/404'/>}/>
                </Routes>
            </WrapContainer>
        </Header>
    );
}

export default App;


const Header = styled.div`
`

const WrapContainer = styled.div`
  height: 100vh;
  background: linear-gradient(180deg, #E6D4DE 0%, #9890C7 100%);
`
