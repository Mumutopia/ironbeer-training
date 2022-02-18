import './HomeBar.css'

import React from 'react'
import { Link } from 'react-router-dom'

export default function HomeBar() {
    return (
        <div className='homebar-container' >
            <Link className='homebar-container' to="/" ><img className='home-logo' src="./img/home128.png" alt="home" /></Link>
        </div>
    )
}
