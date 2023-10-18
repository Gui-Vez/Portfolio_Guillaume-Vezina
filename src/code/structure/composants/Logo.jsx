import '../../style/composants/Logo.scss';
import validator    from 'validator';
import logosStatiques from '../../data/logos.json';
import { useState, useEffect } from 'react';
import { db } from '../../data/firebase/config.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import LogoSVG  from "../../../images/Logos/default.svg";

export default function Logo(props)
{
    const imageSrcDefaut = LogoSVG;
    const altImageDefaut = "Logo";
    const extensionDefaut = null;
    const largeurImageDefaut = "auto";
    const hauteurImageDefaut = "auto";
    const coinsArondisDefaut = "0%";

    const [logoChoisi, setLogoChoisi] = useState(null);
    const [imageSrc, setImageSrc] = useState(imageSrcDefaut);
    const [altImage, setAltImage] = useState(altImageDefaut);
    const [extension, setExtension] = useState(extensionDefaut);
    const [largeurImage, setLargeurImage] = useState(largeurImageDefaut);
    const [hauteurImage, setHauteurImage] = useState(hauteurImageDefaut);
    const [coinsArondis, setCoinsArondis] = useState(coinsArondisDefaut);

    
    useEffect(() =>
    {
        const chercherLogosDynamiques = async () =>
        {
            try
            {
                const logosRef = collection(db, 'logos');
                const logosClasses = query(logosRef, orderBy('id', 'asc'))

                const data = await getDocs(logosClasses);
                const logosDynamiques = data.docs.map((doc) => doc.data());

                let logoChoisi = null;


                for (let i = logosDynamiques.length - 1; i >= 0; i--)
                {
                    const logo = logosDynamiques[i];

                    if (logo.imgUrl &&
                        validator.isURL(logo.imgUrl) &&
                        checkUrl(logo.imgUrl) &&
                        checkPattern(logo.imgUrl))
                    {
                        logoChoisi = logo;
                        break;
                    }
                }

                if (logoChoisi)
                {
                    setImageSrc(logoChoisi.imgUrl || imageSrcDefaut);
                    setAltImage(logoChoisi.titre || altImageDefaut);
                    setLargeurImage(logoChoisi.largeurImage || largeurImageDefaut);
                    setHauteurImage(logoChoisi.hauteurImage || hauteurImageDefaut);
                    setCoinsArondis(logoChoisi.coinsArondis || coinsArondisDefaut);
                    
                    if (logoChoisi.extension === ".svg")
                        setLogoChoisi(logoChoisi);

                    else
                        setExtension(logoChoisi.extension || extensionDefaut);
                }

                else
                {
                    setImageSrc(imageSrcDefaut);
                    setAltImage(altImageDefaut);
                    setExtension(extensionDefaut);
                    setLargeurImage(largeurImageDefaut);
                    setHauteurImage(hauteurImageDefaut);
                    setCoinsArondis(coinsArondisDefaut);
                }
            }

            catch (err)
            {
                console.log(err);

                let logoChoisi = null;

                for (let i = logosStatiques.length - 1; i >= 0; i--)
                {
                    const logo = logosStatiques[i];

                    if (logo.imgUrl &&
                        validator.isURL(logo.imgUrl) &&
                        checkUrl(logo.imgUrl) &&
                        checkPattern(logo.imgUrl))
                    {
                        logoChoisi = logo;
                        break;
                    }
                }

                if (logoChoisi)
                {
                    setImageSrc(logoChoisi.imgUrl || imageSrcDefaut);
                    setAltImage(logoChoisi.titre || altImageDefaut);
                    setLargeurImage(logoChoisi.largeurImage || largeurImageDefaut);
                    setHauteurImage(logoChoisi.hauteurImage || hauteurImageDefaut);
                    setCoinsArondis(logoChoisi.coinsArondis || coinsArondisDefaut);
                    
                    if (logoChoisi.extension === ".svg")
                        setLogoChoisi(logoChoisi);

                    else
                        setExtension(logoChoisi.extension || extensionDefaut);
                }

                else
                {
                    setImageSrc(imageSrcDefaut);
                    setAltImage(altImageDefaut);
                    setExtension(extensionDefaut);
                    setLargeurImage(largeurImageDefaut);
                    setHauteurImage(hauteurImageDefaut);
                    setCoinsArondis(coinsArondisDefaut);
                }
            }
        }

        chercherLogosDynamiques();

    }, []);


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

    return (
        <div className='Logo'>
            <img
                className='logo-profil'
                alt={altImage || altImageDefaut}
                src={imageSrc || imageSrcDefaut}
                extension={extension || null}
                style={{width: largeurImage, height: hauteurImage, borderRadius: coinsArondis}}
            />
        </div>
    );
}