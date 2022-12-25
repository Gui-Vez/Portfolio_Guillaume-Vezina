import '../../style/composants/Navigation.scss';
import Logo from './Logo'
import Burger from './Burger'

export default function Entete(props)
{
    return (
        <nav className='Navigation'>
            <Logo />
            <Burger />
        </nav>
    )
}