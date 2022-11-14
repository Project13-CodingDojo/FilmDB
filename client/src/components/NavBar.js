import axios from 'axios'
import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'

const NavBar = () => {
return (
    <div class="nav">
        <div>
            <h1>Film Database</h1>
        </div>

        <div>
            <form id="form"> 
                <input type="search" id="query" name="q" placeholder="Search..."/>
                <button>Search</button>
            </form>
        </div>   


        <div>
        <NavLink to="/" className="m-3">Home </NavLink>|
        <NavLink to="/" className="m-3">About </NavLink>|
        <NavLink to="/" className="m-3">My Favorites </NavLink>
        <button >Logout</button>
            
        </div>
    </div>
)
}

export default NavBar