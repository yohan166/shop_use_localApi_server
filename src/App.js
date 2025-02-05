import { useEffect } from "react"
// import { listAction } from "./redux/action/listAction"
import { useDispatch, useSelector } from "react-redux";
import { getlist } from "./redux/reducer/listslice";
import { Route,Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Header from "./component/Header";
import Contents from "./page/Contents";
import Prodetail from "./page/Prodetail";
import Login from "./page/Login";


import './App.css'

function App() {
    const dispatch = useDispatch();
    const login_ok = useSelector(state=>state.List.login);


    useEffect(() => {
        dispatch(getlist());
    }, [dispatch])

    const Prod = ()=>{
        return (
            login_ok===true ? <Prodetail/> : <Navigate to='/Login' />
        )
    }

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Contents />}></Route>
                <Route path="/Login" element={<Login />}></Route>
                <Route path="/prodetail/:id" element={<Prod/>}></Route>
            </Routes>
        </div>
    )
}

export default App
