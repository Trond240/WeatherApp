import React from 'react';
import '/Users/trondmakonese/mod_3/weatherApp/weatherapp/src/navBar/navBar.css';

export const NavBar = (props) => {
    console.log(props)
    return(
        <nav className='navbar'>
            <h1 className='heading'>Welcome! {props.currentLocation.name}'s Forcast</h1> 
            <input className='search-input' type='search' placeholder='enter city name'></input>
            <button type='submit' className='search-button'>search</button>
        </nav>      
    )
}