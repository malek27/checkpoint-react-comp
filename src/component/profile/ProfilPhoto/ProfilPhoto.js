import React from 'react';
import Photo from './ProfilPhoto.jpg'
import './ProfilPhoto.css';
function ProfilPhoto() {
    return (
        <div>
            <h1>My Profile</h1>
            <img src={Photo} alt='ProfilPhoto'/>
        </div>
    );
}

export default ProfilPhoto;
