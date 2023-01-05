import '../../style/composants/Presentation.scss';

export default function Presentation(props)
{
    return (
        <section id='Presentation'>
            <div className='contenu'>
                <h2 className='titre-section'>Présentation</h2>

                <div className='contenu-grille'>
                    <div className='image-profil' />
                    <div className='description'>
                        <p>Je suis un jeune étudiant <b>inspiré</b>.</p>
                        <p>Passionné de design graphique et de programmation front-end, je suis quelqu'un qui adore <b>collaborer</b> en équipe.</p>
                        <p>Je suis fier d'avoir gagné en 2019 le <b>premier prix</b> de modélisation 3D de la région de Vaudreuil-Soulanges.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}