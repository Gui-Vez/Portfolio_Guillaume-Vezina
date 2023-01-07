import '../style/Footer.scss';
import textes from '../data/textes.json';

export default function Footer(props)
{
    return (
        <footer id='Footer'>
            <div className='contenu'>
                <h2 className='titre-section'>{textes.titre_footer}</h2>
                <div className='contenant-copyright'>
                    <h5>{textes.copyright_1}</h5>
                    <h6>{textes.copyright_2}</h6>
                </div>
            </div>
        </footer>
    )
}