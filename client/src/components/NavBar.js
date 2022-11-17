import axios from 'axios'
import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import filmlogo from '../images/filmlogo.png'

const NavBar = () => {
return (
    <div class="nav">

        <div className='heading-wrap last-nav-item'>
            <div className='logo-box'>
                <img src={filmlogo} alt="logo" className="logo"></img>
            </div>
            <div>
                <h1 className='header-primary'>Film Database</h1>
            </div>
        </div>

        <div className='nav-item'>
            <form className='search-bar' id="form"> 
                <input className='search-input' type="search" id="query" name="q" placeholder="Search..."/>
                <button className='button'>Search</button>
            </form>
        </div>


        <div className='links nav-item'>
        <NavLink to="/" className="m-3">Home </NavLink>|
        <NavLink to="/films" className="m-3">Database </NavLink>|
        <button className='button'>Logout</button>
        </div>

    </div>
)
}

export default NavBar