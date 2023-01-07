import '../style/Main.scss';
import Presentation     from './composants/Presentation';
import ListeProjets     from './composants/ListeProjets';
import Vagues           from './composants/Vagues';
import VagueColoree     from '../Images/VagueColoree.svg';
import VagueNoire       from '../Images/VagueNoire.svg';
import BoutonScrollHaut from './composants/BoutonScrollHaut';

export default function Main(props)
{
    let imageFondColoree = {backgroundImage: "url(" + VagueColoree + ")"};
    let imageFondNoire   = {backgroundImage: "url(" + VagueNoire + ")"};
    let rotationFond     = {transform: "rotate(180deg)"};

    return (
        <main id='Main'>
            <Presentation />
            <div className='transition'>
                <Vagues imageFond={imageFondColoree} rotationFond={rotationFond} />
            </div>

            <ListeProjets />
            <div className='transition'>
                <BoutonScrollHaut />
                <Vagues imageFond={imageFondNoire} />
            </div>
        </main>
    )
}