import '../style/Appli.scss';
import Entete from './Entete';
import Main from './Main';
import Footer from './Footer';

function Appli()
{
    return (
        <div className="Appli">
            <Entete/>
            <Main />
            <Footer/>
        </div>
    );
}

export default Appli;