import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate } from "react-router-dom";


const Horror_Comedy = () => {
    
    const [list,setList] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/HorrorComedy`)
        .then((res)=>{
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
    return (
        <div>
        {
            list.map((film, index)=> { return (
                <div key={film._id}>
                    <p>{film.image}</p>
                    <p><Link to={`/film/${film._id}`}>{film.title}</Link></p>
                </div>
            );})
        }
        </div>
    )
}

export default Horror_Comedy