import '../../style/composants/LienSocial.scss';

export default function LienSocial(props)
{
    let grandeurImage = {transform: "scale(" + props.grandeur +")"};

    return (
        <li className='LienSocial' id={"LienSocial-" + props.id}>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <div className='lien-social-image-contenant'>
                    <img className='lien-social-image' src={require("../../Images/Liens sociaux/" + props.titre + props.extension)} alt={props.titre} style={grandeurImage} />
                </div>
                <h3 className='lien-social-titre'>
                    {props.titre}
                    <hr />
                </h3>
            </a>
        </li>
    )
}