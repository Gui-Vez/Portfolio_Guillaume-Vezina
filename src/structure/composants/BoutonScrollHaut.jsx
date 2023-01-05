import '../../style/composants/BoutonScrollHaut.scss'
import React, { useState, useEffect } from 'react';

export default function BoutonScrollHaut(props)
{
    ////////// Bouton haut de la page //////////
    const goToTop = () =>
    {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    ///////////////////////////////////////////

    return (
        <div className='BoutonScrollHaut' onClick={goToTop}>
            <h3>/\</h3>
        </div>
    )
}