import '../../style/composants/Projet.scss';
import defaultImage from '../../../images/Projets/default.jpg';

export default function Projet(props)
{
    let positionImage = {objectPosition: props.positionImage};

    return (
        <div className='Projet' id={"Projet-" + props.id}>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img className='image-projet'
                 alt={"Projet - " + props.titre}
                 src={require("../../../images/Projets/" + props.titre + props.extension)} 
                 style={positionImage} />
                <div className='description-projet'>
                    <h4 className='description-projet-titre'>{props.titre}</h4>
                    <p className='description-projet-texte'>{props.description}</p>
                </div>
            </a>
        </div>
    )
}