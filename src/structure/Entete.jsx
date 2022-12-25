import '../style/Entete.scss';
import Logo from './composants/Logo';
import Vague from './composants/Vague';
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
                <h2 className='sous-titre'>Développeur front-end</h2>
            </div>
            
            <div className='transition'>
                <BoutonScroll />
                <Vague />
            </div>
        </header>
    )
}