import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Documentary = () => {
    
    const [list,setList] = useState([])
    
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/Documentary`)
        .then((res)=>{
            setList(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
return (
        <div>
        {
            list.map((films)=>(
                <div>
                    <p>{films.image}</p>
                    <p>{films.title}</p>
                </div>
            ))
        }
        </div>
    )
}

export default Documentary