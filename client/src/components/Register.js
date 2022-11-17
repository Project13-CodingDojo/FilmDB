import React,{useState} from 'react'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'


const Register = () => {

    const navigate = useNavigate()

    const [username,setUserName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [errors,setErrors] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post ('http://localhost:8000/api/register',{
            username,
            email,
            password,
            confirmPassword

        },{withCredentials:true,Credentials:'include'})
        .then((res)=>{
            navigate('/employees')
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors)

        })
    }

    return (

    <div className='main'>

        <div className='registration-form'>

            <div className='form-item'>
                <h1 className='header-secondary'>Please Register</h1>
                <Link to='/login' className='login-link'>Already have an Account?</Link>
            </div>


            <form onSubmit={submitHandler} >

                <div className='form-item'>
                <label className='form-label'>Username:</label>
                <input type="text" className='form-input'onChange={(e)=>setUserName(e.target.value)}></input>
                {errors.username ?<span className="text-danger">{errors.username.message}</span> : null}<br></br>
                </div>

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

                <div className='form-item'>
                <label className='form-label'>Confirm Password:</label>
                <input type="password" className='form-input'onChange={(e)=>setConfirmPassword(e.target.value)}></input>
                {errors.confirmPassword ?<span className="text-danger">{errors.confirmPassword.message}</span> : null}<br></br>
                </div>

                <button className='button'>Register</button>
            </form>
        </div>

    </div>
    )



}

export default Register