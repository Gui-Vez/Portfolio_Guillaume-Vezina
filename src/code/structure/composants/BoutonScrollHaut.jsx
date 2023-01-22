import '../../style/composants/BoutonScrollHaut.scss'

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
            <h3>V</h3>
        </div>
    )
}