import '../../style/composants/Navigation.scss';
// import Logo from '../../svg/Logo.svg';
import {ReactComponent as Logo} from '../../svg/Logo.svg';

export default function Entete(props)
{
    return (
        <nav className='Navigation'>
            <Logo />
        </nav>
    )
}