import '../style/Main.scss';
import Presentation from './composants/Presentation';
import ListeProjets from './composants/ListeProjets';
import Vagues from './composants/Vagues'
import VaguesNoires from './composants/VaguesNoires'

export default function Main(props)
{
    return (
        <main className='Main'>
            <Presentation />
            <Vagues />
            <ListeProjets />
            <VaguesNoires />
        </main>
    )
}