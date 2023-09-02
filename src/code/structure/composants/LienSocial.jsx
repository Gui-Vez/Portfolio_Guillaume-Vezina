import '../../style/composants/LienSocial.scss';
import defaultImage from '../../../images/Liens sociaux/default.png';
import textes       from '../../data/textes.json';
import validator    from 'validator';

export default function LienSocial(props)
{
    let grandeurImage = {transform: "scale(" + (props.titre !== undefined ? props.grandeur : 1.5 ) + ")"}

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
                imageSrc = require(`../../../images/Liens sociaux/${props.titre}${props.extension}`);
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
        <li className='LienSocial' id={"LienSocial-" + props.id}>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
                <div className='lien-social-image-contenant'>
                    <img className='lien-social-image'
                         src={imageSrc}
                         alt={props.titre || textes.liens_sociaux_titre_et_image_manquants}
                         style={grandeurImage} />
                </div>
                <h3 className='lien-social-titre'>
                    {props.titre || textes.liens_sociaux_titre_manquant}
                    <hr />
                </h3>
            </a>
        </li>
    )
}