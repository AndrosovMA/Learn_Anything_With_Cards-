import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {NavLink, Route, Routes} from "react-router-dom";
import {Register} from "./pages/Register/Register";
import {Login} from "./pages/Login/Login";
import styled from "styled-components";
import { ForgotPassword } from "./pages/RecoveryPassword/ForgotPassword";
import {CheckEmail} from "./pages/CheckEmail/CheckEmail";
import {CreatePassword} from "./pages/RecoveryPassword/CreatePassword";
import NotFound from "./pages/404/404";

function App() {
    return (
        <Header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        <Navigation>
                            <NavLink to="/login">Login</NavLink>
                            <NavLink to="/register">Register</NavLink>
                            <NavLink to="/password">ForgotPassword</NavLink>
                            <NavLink to="/createPassword">CreatePassword</NavLink>
                            <NavLink to="/checkEmail">CheckEmail</NavLink>
                        </Navigation>
                    </Typography>
                </Toolbar>

            </AppBar>

            <WrapContainer>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='login' element={<Login/>}/>
                    <Route path='register' element={<Register/>}/>
                    <Route path='password' element={<ForgotPassword/>}/>
                    <Route path='createPassword' element={<CreatePassword/>}/>
                    <Route path='checkEmail' element={<CheckEmail/>}/>
                    <Route path='/404' element={<h1>404 PAGE NOT FOUND</h1>}/>
                    {/*<Route path='*' element={<Navigate to='/404'/>}/>*/}
                    <Route path='*' element={<NotFound />}/>
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
const Navigation = styled.nav`
  a {
    text-decoration: none;
    color: white;
    
    :not(:first-child) {
      margin-left: 50px;
    }
  }
`

