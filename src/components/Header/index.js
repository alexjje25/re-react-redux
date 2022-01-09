import React from 'react';
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import { Nav } from './styled'

export default function index() {
    return (
        <Nav>
            <Link to="/">
                <FaHome size={24} />
                </Link>
             
                <Link to="/Register">
                <FaUserAlt size={22} />
                </Link>
                
                <Link to="/Login">
                <FaSignInAlt size={24} />
                </Link>

                
        </Nav>
    );
}
