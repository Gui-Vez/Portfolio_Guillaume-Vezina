import '../../style/composants/ListeProjets.scss';
import Projet from './Projet';

export default function ListeProjets(props)
{
    return (
        <section id='ListeProjets'>
            <h2 className='titre-section'>Projets</h2>

            <div className='Projets'>
                <Projet />
                <Projet />
                <Projet />
                <Projet />
                <Projet />
                <Projet />
            </div>
        </section>
    )
}