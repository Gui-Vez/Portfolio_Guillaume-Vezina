import '../../style/composants/Projet.scss';

export default function Projet(props)
{
    let positionImage = {objectPosition: props.positionImage};

    return (
        <div className='Projet' id={"Projet-" + props.id}>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <img className='image-projet' alt="Projet" src={require("../../Images/Projets/Projet - " + props.titre + props.extension)} style={positionImage} />
                <div className='description-projet'>
                    <h3 className='titre'>{props.titre}</h3>
                    <h4 className='texte'>{props.description}</h4>
                </div>
            </a>
        </div>
    )
}