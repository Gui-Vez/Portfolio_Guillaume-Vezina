import '../../style/composants/Projet.scss';

export default function Projet(props)
{
    return (
        <div className='Projet'>
            <img className='image-projet' alt="Projet" src={require("../../Images/Projets/Projet - Dragon.gif")} />
            <div className='description-projet'>
                <h4 className='titre-projet'>Dragon</h4>
                <p>Mon premier jeu codé en Javascript</p>
            </div>
        </div>
    )
}