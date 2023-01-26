import '../../style/composants/Projet.scss';
import defaultImage from '../../../images/Projets/default.png';
import textes       from '../../data/textes.json';
import validator from 'validator';

export default function Projet(props)
{
    let positionImage = {objectPosition: props.positionImage};

    let imageSrc = null;


    async function checkUrl(url)
    {
        try
        {
            const response = await fetch(url);

            if (response.ok)
            {
                return true;
            }
            
            else
            {
                return false;
            }
        }
        
        catch (error)
        {
            return false;
        }
    }


    function checkPattern(str)
    {
        const pattern = new RegExp(
            '^([a-zA-Z]+:\\/\\/)?' + // protocol
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
            '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
            '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
            '(\\#[-a-z\\d_]*)?$', // fragment locator
            'i'
        );
        return pattern.test(str);
    }


    try
    {
        if (props.imgUrl !== undefined && validator.isURL(props.imgUrl) && checkUrl(props.imgUrl) && checkPattern(props.imgUrl))
        {
            imageSrc = props.imgUrl;
        }
        
        else
        {
            try
            {
                imageSrc = require(`../../../images/Projets/${props.titre}${props.extension}`);
            }
            
            catch (err)
            {
                imageSrc = defaultImage;
            }
        }
    }
    
    catch (err)
    {
        console.log(err);
    }
      

    return (
        <div className='Projet' id={"Projet-" + props.id}>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            <img className='image-projet'
                 alt={"Projet - " + (props.titre || textes.projet_titre_et_image_manquants)}
                 src={imageSrc} 
                 style={positionImage} />
                <div className='description-projet'>
                    <h4 className='description-projet-titre'>{props.titre || textes.projet_titre_manquant}</h4>
                    <p className='description-projet-texte'>{props.description || textes.projet_description_manquante}</p>
                </div>
            </a>
        </div>
    )
}