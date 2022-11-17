import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


const Login = () => {

    const navigate = useNavigate()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errors,setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post ('http://localhost:8000/api/login',{
            email,
            password,
        
        },{withCredentials:true,Credentials:'include'})
        .then((res)=>{
            navigate('/films')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)

        })
    }

    return (

        <div className='registration-form'>
            <h1>Please Login</h1>
            <Link to='/'>Need an account?</Link>
            <form onSubmit={submitHandler} className='col-3 mx-auto'>
            <div className='form-item'>
                <label className='form-label'>Email:</label>
                <input type="text" className='form-input'onChange={(e)=>setEmail(e.target.value)}></input>
                {errors.email ?<span className="text-danger">{errors.email.message}</span> : null}<br></br>
                </div>

                <div className='form-item'>
                <label className='form-label'>Password:</label>
                <input type="password" className='form-input'onChange={(e)=>setPassword(e.target.value)}></input>
                {errors.password ?<span className="text-danger">{errors.password.message}</span> : null}<br></br>
                </div>

                <button type='submit' className='button'>Login</button>            </form>
        </div>
    )



}

export default Login