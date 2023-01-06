import '../style/Main.scss';
import Presentation     from './composants/Presentation';
import ListeProjets     from './composants/ListeProjets';
import Vagues           from './composants/Vagues';
import VaguesNoires     from './composants/VaguesNoires';
import BoutonScrollHaut from './composants/BoutonScrollHaut';


export default function Main(props)
{
    return (
        <main id='Main'>
            <Presentation />
            <Vagues />
            <ListeProjets />
            <div className='transition'>
                <BoutonScrollHaut />
                <VaguesNoires />
            </div>
        </main>
    )
}