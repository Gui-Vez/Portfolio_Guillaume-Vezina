import '../style/Footer.scss';
import textes from '../data/textes.json';
import LienSocial from './composants/LienSocial.jsx';
import liensSociauxStatiques from '../data/liens-sociaux.json';
import { useState, useEffect } from 'react';
import { db } from '../data/firebase/config.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function Footer(props)
{
    const [anneeActuelle, setAnneeActuelle] = useState(new Date().getFullYear());
    const [liensSociauxDynamiques, setLiensSociaux] = useState(liensSociauxStatiques);
    const [textesDynamiques, setTextes] = useState({});
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    useEffect(() =>
    {
        setAnneeActuelle(new Date().getFullYear());

        const liensSociauxRef = collection(db, "liens-sociaux")
        const liensSociauxClasses = query(liensSociauxRef, orderBy("id", "asc"))
        const getLiensSociaux = async () =>
        {
            try
            {
                const data = await getDocs(liensSociauxClasses);
                setLiensSociaux(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
            }
            
            catch (error)
            {
                // setError(error);
            }
            
            finally
            {
                setLoading(false);
            }
        }

        const chercherTextesDynamiques = async () =>
        {
            try
            {
                const textesRef = collection(db, 'textes');
                const data = await getDocs(textesRef);
                setTextes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            }
            
            catch (error)
            {
                console.log(error);
            }
            
            finally
            {
                setLoading(false);
            }
        };

        chercherTextesDynamiques();
        getLiensSociaux();

    }, []);


    return (
        <footer id='Footer'>
            <div className='contenu'>
                <h2 className='titre-section'>{loading ? textes[3].titre_footer : textesDynamiques[3].titre_footer || textes[3].titre_footer}</h2>
                
                {/* <div className='contenant-texte-console'>
                    {loading && <div>Chargement...</div>}
                    {error && <div>Erreur: {error.message}</div>}
                </div> */}

                <ul className='contenant-liens-sociaux'>
                {
                    liensSociauxDynamiques.map(unLienSocial => <LienSocial {...unLienSocial} key={unLienSocial.id} loading={loading} textesDynamiques={textesDynamiques} />)
                }
                </ul>
                <div className='copyright'>
                    <h5 className='copyright-attribution'>{loading ? textes[3].copyright_1 : textesDynamiques[3].copyright_1 || textes[3].copyright_1}
                                                          {!loading && textesDynamiques[3].anneeActuelle === true ? ' - ' + anneeActuelle : ''}</h5>
                    <h6 className='copyright-juridiction'>{loading ? textes[3].copyright_2 : textesDynamiques[3].copyright_2 || textes[3].copyright_2}</h6>
                </div>
            </div>
        </footer>
    )
}