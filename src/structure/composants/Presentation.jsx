import '../../style/composants/Presentation.scss';
import textes from '../../data/textes.json';

export default function Presentation(props)
{
    return (
        <section id='Presentation'>
            <div className='contenu'>
                <h2 className='titre-section'>{textes.titre_section_1}</h2>

                <div className='contenu-grille'>
                    <div className='contenant-image-profil'>
                        <div className='image-profil' />
                        <div className='vide' />
                    </div>

                    <div className='contenant-description'>
                        <div className='vide' />
                        <div className='description'>
                            <p>
                                < >{textes.presentation_1} </>
                                <b>{textes.presentation_2}</b>
                            </p>
                            <p>
                                < >{textes.presentation_3} </>
                                <b>{textes.presentation_4} </b>
                            </p>
                            <p>
                                < >{textes.presentation_5} </>
                                <b>{textes.presentation_6} </b>
                                < >{textes.presentation_7} </>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}