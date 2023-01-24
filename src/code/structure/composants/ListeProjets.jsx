import '../../style/composants/ListeProjets.scss';
import textes from '../../data/textes.json';
import Projet from './Projet';
import projetsStatiques from '../../data/projets.json';
import { useState, useEffect } from 'react';
import { db } from '../../data/firebase/config.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export default function ListeProjets(props)
{
    const [projetsDynamiques, setProjets] = useState(projetsStatiques);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() =>
    {
        const projetsRef = collection(db, "projets")
        const projetsClasses = query(projetsRef, orderBy("id", "asc"))
        const getProjets = async () =>
        {
            try
            {
                const data = await getDocs(projetsClasses);
                setProjets(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
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
        
        getProjets();
    }, []);


    return (
        <section id='ListeProjets'>
            <h2 className='titre-section'>{textes.titre_section_2}</h2>

            <div className='contenant-texte-console'>
                {loading && <div>Chargement...</div>}
                {error && <div>Erreur: {error.message}</div>}
            </div>

            <div className='Projets'>
                {
                    projetsDynamiques.map(unProjet => <Projet {...unProjet} key={unProjet.id} />)
                }
            </div>
        </section>
    )
}