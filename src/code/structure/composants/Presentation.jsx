import '../../style/composants/Presentation.scss';
import textes       from '../../data/textes.json';
import validator    from 'validator';
import avatarsStatiques from '../../data/avatars.json';
import { useState, useEffect } from 'react';
import { db } from '../../data/firebase/config.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import defaultImage from '../../../images/Avatars/default.png';

export default function Presentation(props)
{
    const imageSrcDefaut = defaultImage;
    const tailleImageDefaut = "200%";
    const positionImageDefaut = "50% 40%";

    const [loading, setLoading] = useState(true);
    const [textesDynamiques, setTextes] = useState({});
    const [imageSrc, setImageSrc] = useState(imageSrcDefaut);
    const [tailleImage, setTailleImage] = useState(tailleImageDefaut);
    const [positionImage, setPositionImage] = useState(positionImageDefaut);

    useEffect(() =>
    {
        const chercherAvatarsDynamiques = async () =>
        {
            try
            {
                const avatarsRef = collection(db, 'avatars');
                const avatarsClasses = query(avatarsRef, orderBy('id', 'asc'))

                const data = await getDocs(avatarsClasses);
                const avatarsDynamiques = data.docs.map((doc) => doc.data());

                let avatarChoisi = null;


                for (let i = avatarsDynamiques.length - 1; i >= 0; i--)
                {
                    const avatar = avatarsDynamiques[i];

                    if (avatar.imgUrl &&
                        validator.isURL(avatar.imgUrl) &&
                        checkUrl(avatar.imgUrl) &&
                        checkPattern(avatar.imgUrl))
                    {
                        avatarChoisi = avatar;
                        break;
                    }
                }

                if (avatarChoisi)
                {
                    setImageSrc(avatarChoisi.imgUrl);
                    setTailleImage(avatarChoisi.tailleImage || "100%");
                    setPositionImage(avatarChoisi.positionImage || '50% 50%');
                }
                
                else
                {
                    setImageSrc(imageSrcDefaut);
                    setTailleImage(tailleImageDefaut);
                    setPositionImage(positionImageDefaut);
                }
            }

            catch (err)
            {
                console.log(err);

                let avatarChoisi = null;

                for (let i = avatarsStatiques.length - 1; i >= 0; i--)
                {
                    const avatar = avatarsStatiques[i];

                    if (avatar.imgUrl &&
                        validator.isURL(avatar.imgUrl) &&
                        checkUrl(avatar.imgUrl) &&
                        checkPattern(avatar.imgUrl))
                    {
                        avatarChoisi = avatar;
                        break;
                    }
                }

                if (avatarChoisi)
                {
                    setImageSrc(avatarChoisi.imgUrl);
                    setTailleImage(avatarChoisi.tailleImage || '100%');
                    setPositionImage(avatarChoisi.positionImage || '50% 50%');
                }
                
                else
                {
                    setImageSrc(imageSrcDefaut);
                    setTailleImage(tailleImageDefaut);
                    setPositionImage(positionImageDefaut);
                }
            }
        }

        const chercherTextesDynamiques = async () =>
        {
            try
            {
                const textesRef = collection(db, 'textes');
                const data = await getDocs(textesRef);
                setTextes(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
            }
            
            catch (error)
            {
                console.log(error)
            }
            
            finally
            {
                setLoading(false);
            }
        };

        chercherAvatarsDynamiques();
        chercherTextesDynamiques();

    }, [imageSrcDefaut]);


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

    function RendreTexteGras({ texte })
    {
        if (texte)
        {
            const parts = texte.split(/\*([^*]+)\*/);
      
            const elements = [];
          
            for (let i = 0; i < parts.length; i++)
            {
                if (i % 2 === 0)
                    elements.push(parts[i]);
                
                else
                    elements.push(<strong key={i}>{parts[i]}</strong>);
            }

            return <>{elements}</>;
        }
        
        else
            return <></>;
    }


    return (
        <section id='Presentation'>
            <div className='contenu'>
                <h2 className='titre-section'>{loading ? textes[1].titre_section_1 : textesDynamiques[1].titre_section_1 || textes.titre_section_1}</h2>

                <div className='contenu-grille'>
                    <div className='contenant-image-profil'>
                        <div className='image-profil' style={{
                                                                backgroundImage: `url(${imageSrc || imageSrcDefaut})`,
                                                                backgroundSize: tailleImage || tailleImageDefaut,
                                                                backgroundPosition: positionImage || positionImageDefaut
                                                            }} />
                        <div className='vide' />
                    </div>

                    <div className='contenant-description'>
                        <div className='vide' />
                        {
                            loading ?
                                <div className='description'>
                                    <p className='loading'>Chargement...</p>
                                </div> :
                                <div className='description'>
                                    <p><RendreTexteGras texte={textesDynamiques[1].presentation_1 || textes[1].presentation_1} /></p>
                                    <p><RendreTexteGras texte={textesDynamiques[1].presentation_2 || textes[1].presentation_2} /></p>
                                    <p><RendreTexteGras texte={textesDynamiques[1].presentation_3 || textes[1].presentation_3} /></p>
                                    <p><RendreTexteGras texte={textesDynamiques[1].presentation_4} /></p>
                                    <p><RendreTexteGras texte={textesDynamiques[1].presentation_5} /></p>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}