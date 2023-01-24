import '../style/Footer.scss';
import textes from '../data/textes.json';
import LienSocial from './composants/LienSocial.jsx';
import liensSociauxStatiques from '../data/liens-sociaux.json';
import { useState, useEffect } from 'react';
import { db } from '../data/firebase/config.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function Footer(props)
{
    const [liensSociauxDynamiques, setLiensSociaux] = useState(liensSociauxStatiques);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
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
                setError(error);
            }
            
            finally
            {
                setLoading(false);
            }
        }
        
        getLiensSociaux();
    }, []);


    return (
        <footer id='Footer'>
            <div className='contenu'>
                <h2 className='titre-section'>{textes.titre_footer}</h2>
                
                <div className='contenant-texte-console'>
                    {loading && <div>Chargement...</div>}
                    {error && <div>Erreur: {error.message}</div>}
                </div>

                <ul className='contenant-liens-sociaux'>
                {
                    liensSociauxDynamiques.map(unLienSocial => <LienSocial {...unLienSocial} key={unLienSocial.id} />)
                }
                </ul>
                <div className='copyright'>
                    <h5 className='copyright-attribution'>{textes.copyright_1}</h5>
                    <h6 className='copyright-juridiction'>{textes.copyright_2}</h6>
                </div>
            </div>
        </footer>
    )
}