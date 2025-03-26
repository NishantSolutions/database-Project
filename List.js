import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './list.css';

function List () {

    const [data,setData] = useState([]);
    const navigate = useNavigate();

    function getAPIData(){
       try {

            axios.get("http://localhost:3333/Student").then((getData)=>{

                console.log(getData.data)
                setData(getData.data)
            })

       } catch(error) {
        console.log(error)
       }
    
    }

    useEffect(()=>{
        getAPIData()
    },[])

    const handleDelete = (getId) =>{
        console.log(getId)

        const getResult = axios.delete(`http://localhost:3333/Student/${getId}`)
        console.log("getResult :",getResult)
        navigate(0)
    }
   function handleClick(){
    navigate("/add-new")
    }

    return (
        <>
            <h1>All Entries</h1>
            <center>
                <table border="1px" className="table">
                    <tr>
                        <th className="th">S.No</th>
                        {/* <th>ID</th> */}
                        <th className="th">Name</th>
                        <th className="th">Email</th>
                        <th className="th" colSpan={3}>Action</th>
                    </tr>

                    {
                        data?.map((itemList,itemIndex) => {
                            return (
                                <>
                                    <tr key={itemIndex} >

                                        <td>{itemIndex+1}</td>
                                        {/* <td>{itemList.id}</td> */}
                                        <td className="th">{itemList.StudentName}</td>
                                        <td className="th">{itemList.StudentEmail}</td>

                                        <td className="th">
                                            <Link to={`/view/${itemList.id}`}>View</Link>
                                        </td>

                                        <td className="th">
                                            <Link to={`/edit/${itemList.id}`}>Edit</Link>
                                        </td >

                                        <td className="th">
                                            <button className = "btns" onClick={(e)=>handleDelete(itemList.id)}>Delete</button>
                                        </td>
                                    </tr>
                                </>
                            )
                        })
                    }   
                                     
                </table>
            </center>
                        <br></br><br></br>
            <button className="butn" onClick={()=>handleClick()}>Back</button>
        </>
    )
}
export default List