import {useSelector} from "react-redux";
import {AppStateType} from "../../store/store";
import {Navigate} from "react-router-dom";


export const Home = () => {
    const isLoggedIn = useSelector<AppStateType, boolean>(state => state.loginReducer.isLoggedIn)

    if (!isLoggedIn) {
        return <Navigate to={"/login"} />
    }

    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

// types
