import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {NavLink, Route, Routes} from "react-router-dom";
import {Register} from "./pages/Register/Register";
import {Login} from "./pages/Login/Login";
import styled from "styled-components";
import {ForgotPassword} from "./pages/RecoveryPassword/ForgotPassword";
import {CheckEmail} from "./pages/CheckEmail/CheckEmail";
import {CreatePassword} from "./pages/RecoveryPassword/CreatePassword";
import {Home} from "./pages/Home/Home";
import {AppStateType, useAppDispatch, useAppSelector} from "./store/store";
import {Box, CircularProgress, LinearProgress} from "@mui/material";
import {ErrorSnackbar} from "./components/ErrorSnackbar";
import {useEffect, useState} from "react";
import {initializeAppTC} from "./store/reducers/app-reducer";
import Card from "./pages/Card/Card";

import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import {useSelector} from "react-redux";

function App() {
    const dispatch = useAppDispatch()

    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.loginReducer.isLoggedIn)
    const status = useAppSelector(state => state.appReducer.status)
    const isInitialized = useAppSelector(state => state.appReducer.isInitialized)


    useEffect(() => {

        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <Box
            sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress color={"primary"} size={80} thickness={3.6}/>
        </Box>
    }

    return (
        <>
            <div>

                <ErrorSnackbar/>
                {/*<AppBar position="static">*/}
                {/*    <Toolbar>*/}
                {/*        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>*/}
                {/*            <Navigation>*/}
                {/*                <NavLink to="/login">Login</NavLink>*/}
                {/*                <NavLink to="/register">Register</NavLink>*/}
                {/*                <NavLink to="/password">ForgotPassword</NavLink>*/}
                {/*                <NavLink to="/set-new-password">CreatePassword</NavLink>*/}
                {/*                <NavLink to="/checkEmail">CheckEmail</NavLink>*/}
                {/*                <NavLink to="/home">Home</NavLink>*/}
                {/*            </Navigation>*/}
                {/*        </Typography>*/}
                {/*    </Toolbar>*/}

                {/*</AppBar>*/}

                {status === "loading" && <LinearProgress color={"error"}/>}


                <div>
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route path='home' element={<Home/>}/>
                        <Route path='/cards/:packId' element={<Card/>}/>
                        <Route path='login' element={<Login/>}/>
                        <Route path='register' element={<Register/>}/>
                        <Route path='password' element={<ForgotPassword/>}/>
                        <Route path='set-new-password/:token' element={<CreatePassword/>}/>
                        <Route path='checkEmail' element={<CheckEmail/>}/>
                        <Route path='/404' element={<h1>404 PAGE NOT FOUND</h1>}/>

                    </Routes>
                </div>

                {!isLoggedIn &&
                    <Social>
                        <h2>Github</h2>
                        <a href="https://github.com/AndrosovMA/learn_anything_with_cards"
                           target="_blank"
                        >
                            <UseAnimations
                                size={40}
                                animation={github}
                                wrapperStyle={{
                                    opacity: 0.7,
                                    cursor: "pointer"
                                }}
                            />
                        </a>
                    </Social>
                }

            </div>
        </>
    );
}

export default App;

const Social = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    opacity: 0.7;
  }

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
