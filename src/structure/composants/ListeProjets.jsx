import '../../style/composants/ListeProjets.scss';
import textes from '../../data/textes.json';
import Projet from './Projet';
import lesProjets from '../../data/projets.json';

export default function ListeProjets(props)
{
    return (
        <section id='ListeProjets'>
            <h2 className='titre-section'>{textes.titre_section_2}</h2>

            <div className='Projets'>
                {
                    lesProjets.map(unProjet =>
                                    <Projet
                                        id={unProjet.id}
                                        key={unProjet.id}
                                        url={unProjet.url}
                                        titre={unProjet.titre}
                                        extension={unProjet.extension}
                                        description={unProjet.description}
                                        positionImage={unProjet.positionImage} />)
                }
            </div>
        </section>
    )
}