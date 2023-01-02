import '../style/Entete.scss';
import Logo from './composants/Logo';
import Vagues from './composants/Vagues';
import BoutonScroll from './composants/BoutonScroll';

export default function Entete(props)
{
    return (
        <header className="Entete">
            <div className='contenu'>
                <Logo />
                <h1 className='titre-principal'>
                    <p>Guillaume</p>
                    <p>Vézina</p>
                </h1>
                <h2 className='sous-titre'>
                    <p>Développeur</p>
                    <p>front-end</p>
                </h2>
            </div>
            
            <div className='transition'>
                <BoutonScroll />
                <Vagues />
            </div>
        </header>
    )
}