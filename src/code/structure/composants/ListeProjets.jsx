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
    const [loadingProjets, setLoadingProjets] = useState(true);
    const [loadingTextes, setLoadingTextes] = useState(true);
    const [error, setError] = useState(null);
    const [textesDynamiques, setTextes] = useState({});

    useEffect(() =>
    {
        const getProjets = async () =>
        {
            try
            {
                const projetsRef = collection(db, "projets")
                const projetsClasses = query(projetsRef, orderBy("id", "asc"))
                const data = await getDocs(projetsClasses);
                setProjets(data.docs.map((doc) => ({...doc.data(), id: doc.id })));
            }
            
            catch (error)
            {
                setError(error);
            }
            
            finally
            {
                setLoadingProjets(false);
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
                setLoadingTextes(false);
            }
        };
        
        getProjets();
        chercherTextesDynamiques();
    }, []);


    return (
        <section id='ListeProjets'>
            <h2 className='titre-section'>{loadingTextes ? textes[2].titre_section_2 : textesDynamiques[2].titre_section_2 || textes[2].titre_section_2}</h2>

            {/* <div className='contenant-texte-console'>
                {loadingProjets && <div>Chargement...</div>}
                {error && <div>Erreur: {error.message}</div>}
            </div> */}

            <div className='Projets'>
                {
                    projetsDynamiques.map(unProjet => <Projet {...unProjet} key={unProjet.id} loadingTextes={loadingTextes} textesDynamiques={textesDynamiques} />)
                }
            </div>
        </section>
    )
}