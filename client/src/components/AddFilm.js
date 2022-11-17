import React, {useState} from 'react'
import axios from 'axios'
import { Link } from "react-router-dom"
import {useNavigate} from 'react-router-dom'


const AddFilm = () => {

    const [title,setTitle] = useState('')
    const [director,setDirector] = useState('')
    const [genre,setGenre] = useState('')
    const [yearReleased,setYearReleased] = useState('')
    const [cast,setCast] = useState('')
    const [factoids,setFactoids] = useState('')
    const [image,setImage] = useState('')

    const navigate = useNavigate()


    const submitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/addFilm',{
            title,
            director,
            genre,
            yearReleased,
            cast,
            factoids,
            image
        }).then((res)=>{
            console.log(res)
            navigate('/')
        }).catch((err)=>{
            console.log(err)
        })
    }



return (


    <div class="main">


            <div className='film-categories'>
                <h2 className='header-secondary'>Films by Genre:</h2>
                <Link to="/films/Comedy">Comedy</Link><br></br>
                <Link to="/films/Drama">Drama</Link><br></br>
                <Link to="/films/Horror">Horror</Link><br></br>
                <Link to="/films/Sci_fi">Sci-fi</Link><br></br>
                <Link to="/films/Action">Action</Link><br></br>
                <Link to="/films/Family">Family</Link><br></br>
                <Link to="/films/Documentary">Documentary</Link><br></br>
                <Link to="/films/Romcom">Romcom</Link><br></br>
                <Link to="/films/Silent_Movie">Silent Movie</Link><br></br>
                <Link to="/films/Thriller">Thriller</Link><br></br>
                <Link to="/films/Crime_Noir">Crime Noir</Link><br></br>
                <Link to="/films/French_Cinema">French Cinema</Link><br></br>
                <Link to="/films/Horror_Comedy">Horror Comedy</Link><br></br>
                <Link to="/films/Kung_fu">Kung-fu</Link><br></br>
                <Link to="/films/Bollywood">Bollywood</Link><br></br>
                <Link to="/films/anime">Anime</Link>
            </div>




            <div className='film-form'>
                    <h2 className='header-secondary'>Add a Film:</h2>
                    <form onSubmit={submitHandler}>
                        <div class="form-item">
                            <input className='form-input' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                            <input className='form-input'type="text"  value={director} onChange={(e)=>setDirector(e.target.value)} placeholder="Director"/> 
                        </div>
                        <div class="form-item">
                            <input className='form-input' type="number"  value={yearReleased} onChange={(e)=>setYearReleased(e.target.value)} placeholder="Year Released"/>
                            <select  className='form-input' value={genre} onChange={(e)=>setGenre(e.target.value)} >
                                <option>Select A Genre</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                                <option value="Sci-Fi">Sci-Fi</option>
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

                        <div class="form-item">
                            <input className='form-input' type="text" value={cast} onChange={(e)=>setCast(e.target.value)} placeholder="Cast Members"/>
                        </div>

                        <div class="form-item">
                            <input className='form-input' type="text" value={factoids} onChange={(e)=>setFactoids(e.target.value)} placeholder="Fun facts..."/>
                        </div>

                        <div class="form-item">
                    <input type="text" value={image} onChange={(e)=>setImage(e.target.value)} placeholder="Film poster"/>
                </div>

                        <div>
                        <button type='submit' className='button'>Add Film</button>
                        </div>
                </form>

        <div className='film-categories'>
            <h2 className='header-secondary'>Films by Genre:</h2>
        </div>




        <div className='film-form'>
            <h2 className='header-secondary'>Add a Film:</h2>
            <div class="form-item">
                <input className='form-input' type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Title"/>
                <input className='form-input'type="text"  value={director} onChange={(e)=>setDirector(e.target.value)} placeholder="Director"/> 
            </div>
            <div class="form-item">
                <input className='form-input' type="number"  value={yearReleased} onChange={(e)=>setYearReleased(e.target.value)} placeholder="Year Released"/>
                <select  className='form-input' value={genre} onChange={(e)=>setGenre(e.target.value)} >
                    <option>Select A Genre</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Horror">Horror</option>
                    <option value="Sci-Fi">Sci-Fi</option>
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

            <div class="form-item">
                <input className='form-input' type="text" value={cast} onChange={(e)=>setCast(e.target.value)} placeholder="Cast Members"/>
            </div>

            <div class="form-item">
                <input className='form-input' type="text" value={factoids} onChange={(e)=>setFactoids(e.target.value)} placeholder="Fun facts..."/>
            </div>

            <div>
            <button type='submit' className='button'>Add Film</button>
            </div>
    </div>

)
}

export default AddFilm