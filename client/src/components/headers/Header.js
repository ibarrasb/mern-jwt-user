import React, {useContext} from 'react';
import {GlobalState} from '../../GlobalState'
import {Link} from 'react-router-dom'
import axios from 'axios';

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.UserAPI.isLogged
    const [isAdmin] = state.UserAPI.isAdmin


    const logoutUser = async () => {
        await axios.get('/user/logout')
        localStorage.clear()
        window.location.href = "/"
    }

    const adminRouter = () => {
        return(
            <div>
            <li><Link to="/create_product">Create Product</Link></li>
            <li><Link to="/category">Categories</Link></li>
            </div>
        )
    }
    const loggedRouter = () => {
        return(
            <div>
            <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </div>
        )
    }

    return (
    <header>

        <div className='logo'>
            <h1>
                    <Link to="/">{isAdmin ? 'Admin' : 'MERN JWT Template'}</Link>
            </h1>
        </div>

        <ul>
            <li><Link to="/">{isAdmin ? 'Admin' : 'Home'}</Link></li>

            {isAdmin && adminRouter()}
            
            {
                isLogged ? loggedRouter() :  <li><Link to="/login">Login</Link></li>
            } 

        </ul>   
    </header>
    );
}

export default Header;