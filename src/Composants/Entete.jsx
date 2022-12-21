import '../Style/composants/Entete.scss';
import Navigation from './Navigation';


export default function Entete(props)
{
    return (
        <header className="Entete">
            <Navigation />
            <h1>Portfolio - Guillaume Vézina</h1>
        </header>
    )
}