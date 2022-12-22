import '../../style/composants/Main.scss';
import Presentation from './Presentation';
import ListeProjets from './ListeProjets';

export default function Main(props)
{
    return (
        <main className='Main'>
            <Presentation />
            <ListeProjets />
        </main>
    )
}