import {Navigate, Route, Routes} from "react-router-dom";
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
import {useEffect} from "react";
import {initializeAppTC} from "./store/reducers/app-reducer";
import Card from "./pages/Card/Card";

import UseAnimations from "react-useanimations";
import github from "react-useanimations/lib/github";
import {useSelector} from "react-redux";
import {Page404} from "./pages/404/Page404";
import {PATH} from "./enum/path";

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

                {status === "loading" && <LinearProgress color={"error"}/>}

                <div>
                    <Routes>
                        <Route path={'/*'} element={<Page404 />} />
                        <Route path="/" element={<Navigate to={PATH.HOME} />} />
                        <Route path={PATH.LOGIN} element={<Login />} />
                        <Route
                            path={PATH.HOME}
                            element={isLoggedIn ? <Home /> : <Navigate to={PATH.LOGIN} />}
                        />
                        <Route path={PATH.REGISTRATION} element={<Register />} />
                        <Route path={PATH.NEW_PASSWORD} element={<CreatePassword />}>
                            <Route path={PATH.TOKEN} element={<CreatePassword />} />
                        </Route>
                        <Route path={PATH.PAGE404} element={<Page404 />} />
                        <Route path={PATH.FORGOT_PASSWORD} element={<ForgotPassword />} />
                        <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
                        <Route
                            path={PATH.CARDS}
                            element={isLoggedIn ? <Card /> : <Navigate to={PATH.LOGIN} />}
                        >
                            <Route path={PATH.PACK_ID} element={<Card />} />
                        </Route>
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
