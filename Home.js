import React from "react";
import './home.css';
import { useNavigate } from "react-router-dom";
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

function Home () {
const navigate = useNavigate();

function handleClick(){
    navigate("/add-new")
}

    return (
        <>
            <h1>Registration Page</h1>
           <button class="btn" onClick={()=>handleClick()}> <AppRegistrationIcon class="icon"/>Register</button>
        </>
    )
}
export default Home