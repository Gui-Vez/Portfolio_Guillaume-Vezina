import '../../style/composants/Entete.scss';
import Navigation from './Navigation';


export default function Entete(props)
{
    return (
        <header className="Entete">
            <Navigation />
            
            <h1>Guillaume Vézina</h1>
            <h2>Mon p'ti portfolio !</h2>

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