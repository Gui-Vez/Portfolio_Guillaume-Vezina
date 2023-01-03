import '../../style/composants/BoutonScroll.scss'
import React, { useState, useEffect } from 'react';

export default function BoutonScroll(props)
{
    ////////// Bouton haut de la page //////////
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    ///////////////////////////////////////////
    

    return (
        <div className='BoutonScroll' onClick={goToTop}>
            <h3>V</h3>
        </div>
    )
}