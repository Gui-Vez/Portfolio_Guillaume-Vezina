import '../../style/composants/Presentation.scss';
import BoutonScroll from './BoutonScroll';

export default function Presentation(props)
{
    return (
        <section className='Presentation'>
            <div className='contenu'>
                <h2 className='titre-section'>Présentation</h2>

                <div className='contenu-grille'>
                    {/* <img className='image-profil' src={require("../../Images/Profil.jpg")} alt='Profil' /> */}
                    <div className='description'>
                        <p>Je suis un jeune étudiant inspiré.</p>
                        <br />
                        <p>Passionné de design graphique et de programmation front-end, je suis quelqu'un qui adore collaborer en équipe.</p>
                        <br />
                        <p>Je suis fier d'avoir gagné en 2019 le premier prix de modélisation 3D de la région de Vaudreuil-Soulanges.</p>
                    </div>
                </div>
            </div>

            <div className='bouton-scroll'>
                <BoutonScroll />
            </div>
        </section>
    )
}