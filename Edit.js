import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate, useParams } from "react-router-dom";
import './edit.css';

function Edit () {

    const navigate = useNavigate();
    const {id} =useParams();
    console.log("id :",id)

    const params = useParams();
    console.log("params :",params)

    const [getData,setData] = useState({
        StudentName : " ",
        StudentEmail : " "
    })

    useEffect(() =>{
      async function fetchSpecificAPIdata(){
        
        const getPostResult = await axios.get(`http://localhost:3333/Student/${id}`);
        console.log("getPostResult :",getPostResult)
        setData(getPostResult.data)
       }
       fetchSpecificAPIdata()

    },[id])

    function onChangeUpdateFunc(e){
        // setData(e.target.value) 

        setData({
            // [e.target.name] : e.target.value
            ...getData,
            [e.target.name] : e.target.value
        })

        console.log(e.target.value)
        console.log("useState Data ",getData)
    }

    async function onUpdate(e){
        console.log("OnUpdate")
        try {

            e.preventDefault();
            const getUpdateResult = await axios.put(`http://localhost:3333/Student/${id}`,getData)
            console.log("getUpdateResult :",getUpdateResult)
        } catch (error) {
            console.log(error)
        }
        navigate("/List")
    }

   function handleClick (){
    navigate("/List")
   }

    return (
        <>
            <h3>Edit Data</h3>
            <form>
                <input className="name" type="text" name="StudentName" placeholder="Update Name" value={getData.StudentName} onChange={(e)=>onChangeUpdateFunc(e)}/><br></br><br></br>
                <input  className="name"type="text" name="StudentEmail" placeholder="Update Email" value={getData.StudentEmail} onChange={(e)=>onChangeUpdateFunc(e)}/><br></br><br></br>
                <button className="butn" onClick={(e)=>onUpdate(e)}>Update</button><br></br><br></br>
            </form>
            <button className="butns" onClick={()=>handleClick()}>Back To Entered Data</button>

        </>
    )
}
export default Edit