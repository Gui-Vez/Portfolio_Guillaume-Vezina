import '../style/Entete.scss';
import textes       from '../data/textes.json';
import Logo         from './composants/Logo.jsx';
import Vagues       from './composants/Vagues.jsx';
import VagueColoree from '../Images/VagueColoree.svg';
import BoutonScroll from './composants/BoutonScroll.jsx';

export default function Entete(props)
{
    let imageFondColoree = {backgroundImage: "url(" + VagueColoree + ")"};

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
                <BoutonScroll />
                <Vagues imageFond={imageFondColoree} />
            </div>
        </header>
    )
}