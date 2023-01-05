import '../../style/composants/BoutonScrollPresentation.scss'
// import React, { useState, useEffect } from 'react';

export default function BoutonScrollPresentation(props)
{
    ////////// Bouton section Présentation //////////
    const scrollDown = () =>
    {
        window.scrollTo({
            top: document.getElementById("Presentation").offsetTop,
            behavior: 'smooth',
        });
    }
    /////////////////////////////////////////////////

    return (
        <div className='BoutonScrollPresentation' onClick={scrollDown}>
            <h3>V</h3>
        </div>
    )
}