import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './view.css';

function View () {

    
    const [details,setDetails] = useState([])
    const params = useParams()
    console.log("params :",params)
    const {id} = useParams();
    const navigate = useNavigate();
    // console.log(id)


    async function getStudentDetails () {
       
        try {

            const getStudentRecords = await axios.get(`http://localhost:3333/Student/${id}`);
            console.log("getStudentRecords :",getStudentRecords.data)
    
            setDetails(getStudentRecords.data)


        }catch(error)
        {
            console.log(error)
        }
    }

    useEffect(()=>{
        getStudentDetails()
    },[])


   function handleClick() {
    navigate("/List")
   }

    return (
        <>
           <h3>Entered Details</h3>
            <center>
                <table border="1px" className="table">
                    <tr>
                        <th className="th">ID</th>
                        <th className="th">Name</th>
                        <th className="th">Email</th>
                    </tr>

                    {
                        <tr>
                            <>

                                <td className="th">{details.id}</td>
                                <td className="th">{details.StudentName}</td>
                                <td className="th">{details.StudentEmail}</td> 
                                
                            </>
                        </tr>
                    }

                </table>
            </center>
            <br></br><br></br>
            <button className="butns" onClick={()=>handleClick()}>Back To Entered Data</button>

        </>
    )
}
export default View