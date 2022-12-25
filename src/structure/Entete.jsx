import '../style/Entete.scss';
import Logo from './composants/Logo';

export default function Entete(props)
{
    return (
        <header className="Entete">
            <div className='contenu'>
                <Logo />
            
                <h1 className='titre-principal'>
                    <p className='prénom'>Guillaume</p>
                    <p className='famille'>Vézina</p>
                </h1>

                <h2 className='sous-titre'>Développeur front-end</h2>
            </div>
            <div className='palette-couleurs'>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </header>
    )
}