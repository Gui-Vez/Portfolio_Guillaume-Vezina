import '../style/Appli.scss';
import Entete from './Entete';
import Main from './Main';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { db } from '../data/firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

function Appli()
{
    const [projets, setProjets] = useState([]);
    const projetsRef = collection(db, "projets")
    const projetsClasses = query(projetsRef, orderBy("id", "asc"))

    useEffect(() =>
    {
        const getProjets = async () =>
        {
            const data = await getDocs(projetsClasses);
            setProjets(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        }
        
        getProjets();
    }, [projetsClasses]);

    return (
        <div className="Appli">
            
            {/* Firebase test */}
            {projets.map((projet =>
            {
                return <div> <h1>Titre: {projet.titre} </h1> </div>
            }))}

            <Entete/>
            <Main/>
            <Footer/>
        </div>
    );
}

export default Appli;