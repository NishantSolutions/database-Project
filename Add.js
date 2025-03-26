import axios from "axios";
import './add.css';
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add () {
        
        const navigate = useNavigate()
        const [getData,setData] = useState({
        
            StudentName : " ",
            StudentEmail : " "

        })

        async function onsubmit (e) {
            console.log("onsubmit")
            // e.preventDefault();
            navigate("/List")
            try {

                const getPostResult = await axios.post("http://localhost:3333/Student",getData)
                console.log("getPostResult :",getPostResult)

            } catch (error) {
                console.log(error)
            }
       }

    function onChangeFunc (e) {

        // console.log("showData :",e.target.value)
        setData ({
            // [e.target.name] : e.target.value
            ...getData,
            [e.target.name] : e.target.value
        })
        // console.log(e.target.value)
        console.log("useStateData ",getData)
    }

    return (
        <>
            <h1>Make Entries</h1> <br></br>
            <form>
                <input className="name" type="text" name="StudentName" placeholder="Enter Your Name" onChange={(e)=>onChangeFunc(e)}/><br></br><br></br>
                <input className="name" type="text" name="StudentEmail" placeholder="Enter Your Email" onChange={(e)=>onChangeFunc(e)}/><br></br><br></br>
                <button className="butn" onClick={(e)=>onsubmit(e)}>Submit</button>
            </form>
        </>
    )
}
export default Add