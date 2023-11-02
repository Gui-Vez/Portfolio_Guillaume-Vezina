import React, { useState, useEffect } from 'react';
import { db } from '../data/firebase/config.js';
import { collection, getDocs } from 'firebase/firestore';
import Logo from './composants/Logo.jsx';
import Vagues from './composants/Vagues.jsx';
import VagueColoree from '../../images/VagueColoree.svg';
import BoutonScroll from './composants/BoutonScroll.jsx';

import '../style/Entete.scss';
import textes from '../data/textes.json';

export default function Entete(props)
{
  let imageFondColoree = { backgroundImage: "url(" + VagueColoree + ")" };

  const [loading, setLoading] = useState(true);
  const [textesDynamiques, setTextes] = useState({});

  useEffect(() =>
  {
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
  }, []);

  return (
    <header id="Entete">
      <div className='contenu'>
        <Logo />
        <h1 className='titre-principal'>
          <p>{loading ? textes[0].prénom : (textesDynamiques[0].prénom || textes[0].prénom)}</p>
          <p>{loading ? textes[0].nom : (textesDynamiques[0].nom || textes[0].nom)}</p>
        </h1>
        <h2 className='sous-titre'>
          <p>{loading ? textes[0].sousTitre_1 : (textesDynamiques[0].sousTitre_1 || textes[0].sousTitre_1)}</p>
          <p>{loading ? textes[0].sousTitre_2 : (textesDynamiques[0].sousTitre_2 || textes[0].sousTitre_2)}</p>
        </h2>
      </div>

      <div className='transition'>
        <BoutonScroll />
        <Vagues imageFond={imageFondColoree} />
      </div>
    </header>
  );
}
