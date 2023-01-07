import '../style/Entete.scss';
import textes from '../data/textes.json';
import Logo from './composants/Logo';
import Vagues from './composants/Vagues';
import BoutonScrollPresentation from './composants/BoutonScrollPresentation';

export default function Entete(props)
{
    return (
        <header id="Entete">
            <div className='contenu'>
                <Logo />
                <h1 className='titre-principal'>
                    <p>{textes.prénom}</p>
                    <p>{textes.nom}</p>
                </h1>
                <h2 className='sous-titre'>
                    <p>{textes.sousTitre_1}</p>
                    <p>{textes.sousTitre_2}</p>
                </h2>
            </div>
            
            <div className='transition'>
                <BoutonScrollPresentation />
                <Vagues />
            </div>
        </header>
    )
}