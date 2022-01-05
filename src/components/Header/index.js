import React from 'react'
import {FaHome, FaSignInAlt, FaUserAlt} from 'react-icons/fa'
import { Nav } from './styled'

export default function index() {
    return (
        <Nav>
            <a href="">
                <FaHome size={24} />
                </a>
             
                <a href="">
                <FaUserAlt size={22} />
                </a>
                
                <a href="">
                <FaSignInAlt size={24} />
                </a>

                
        </Nav>
    )
}