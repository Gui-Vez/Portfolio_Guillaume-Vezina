import '../style/Footer.scss';
import textes from '../data/textes.json';
import liensSociaux from '../data/liens-sociaux.json';
import LienSocial from './composants/LienSocial.jsx';

export default function Footer(props)
{
    return (
        <footer id='Footer'>
            <div className='contenu'>
                <h2 className='titre-section'>{textes.titre_footer}</h2>
                <ul className='contenant-liens-sociaux'>
                    {
                        liensSociaux.map(unLienSocial => <LienSocial
                                                                    id={unLienSocial.id}
                                                                    key={unLienSocial.id}
                                                                    url={unLienSocial.url}
                                                                    titre={unLienSocial.titre}
                                                                    grandeur={unLienSocial.grandeur}
                                                                    extension={unLienSocial.extension} />)
                    }
                </ul>
                <div className='copyright'>
                    <h5 className='copyright-attribution'>{textes.copyright_1}</h5>
                    <h6 className='copyright-juridiction'>{textes.copyright_2}</h6>
                </div>
            </div>
        </footer>
    )
}