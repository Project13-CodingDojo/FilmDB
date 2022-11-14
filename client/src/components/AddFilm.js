import React, {useState} from 'react'
import axios from 'axios'




const AddFilm = () => {

    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [genre,setGenre] = useState('')
    const [yearReleased,setYearReleased] = useState('')
    const [cast,setCast] = useState('')
    const [factoids,setFactoids] = useState('')
    const [image,setImage] = useState('')

const submitHandler = (e) => {
    e.preventDefault()
    axios.post ('http://localhost:8000/api/addFilm', {
        title,
        director,
        genre,
        yearReleased,
        cast,
        factoids,
        image,
    }).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}


return (


    <div class="main">

        <div>
            <h2>Films by Genre:</h2>
        </div>
        <div>
            <h2>Add a Film:</h2>
            <form onSubmit={submitHandler} >
                <div class="main1">
                    <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                    <input type="text"  value={director} onChange={(e)=>setDirector(e.target.value)} placeholder="Director"/> 
                </div>
                <div class="main2">
                    <input type="number"  value={yearReleased} onChange={(e)=>setYearReleased(e.target.value)} placeholder="Year Released"/>
                    <select  value={genre} onChange={(e)=>setGenre(e.target.value)} >
                        <option>Select A Genre</option>
                        <option value="Comedy">Comedy</option>
                        <option value="Drama">Drama</option>
                        <option value="Horror">Horror</option>
                        <option value="Sci-fi">Sci-Fi</option>
                        <option value="Action">Action</option>
                        <option value="Family">Family</option>
                        <option value="Documentary">Documentary</option>
                        <option value="Romcomo">Romcomo</option>
                        <option value="Silent Movie">Silent Movie</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Crime Noir">Crime Noir</option>
                        <option value="French Cinema">French Cinema</option>
                        <option value="Horror/Comedy">Horror/Comedy</option>
                        <option value="Kung-fu">Kung-fu</option>
                        <option value="Bollywood">Bollywood</option>
                        <option value="Anime">Anime</option>
                    </select>
                </div>

                <div class="main3">
                    <input type="text" value={cast} onChange={(e)=>setCast(e.target.value)} placeholder="Cast Members"/>
                </div>

                <div class="main4">
                    <input type="text" value={factoids} onChange={(e)=>setFactoids(e.target.value)} placeholder="Fun facts..."/>
                </div>

                <div class="image">
                    <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Add film box-art"/>
                </div>

                <div class="button">
                    <button type='submit' className='btn btn-info mt-3'>Add Film</button>
                </div>
            </form>
        </div>
    </div>

)
}

export default AddFilm