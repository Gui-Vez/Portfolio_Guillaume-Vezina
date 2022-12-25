import '../style/Main.scss';
import Presentation from './composants/Presentation';
import ListeProjets from './composants/ListeProjets';
import Vague from './composants/Vague'

export default function Main(props)
{
    return (
        <main className='Main'>
            <Presentation />
            <ListeProjets />
        </main>
    )
}