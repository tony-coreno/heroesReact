import React,{useMemo} from 'react'
import {Redirect, useParams, useHistory} from 'react-router-dom';
import { getHeroById } from '../../selectors/getHeroById';

const HeroScreen = () => {
    const {heroeId} = useParams();
    
   const hero= useMemo(() => getHeroById(heroeId), [heroeId]);


    let history = useHistory();

    if(!hero){
        return <Redirect to="/" />
    }

    const handleReturn = () => {
        if(history.length <= 2){
            history.push('/')
        }else{
            history.goBack();    
        }
        

    }

    const { //Se desestructura las propiedades del objeto de hero que se recibe desde la función
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters,
    }= hero

    return ( 
        <div className="row mt-5">
           <div className="col-4">
                <img src={`../assets/img/heroes/${heroeId}.jpg`} className="img-thumbnail animate__animated animate__bounceIn" alt={superhero} />
           </div>
           <div className="col-8">
               <h3>{superhero}</h3>
               <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego: </b>{alter_ego}</li>
                    <li className="list-group-item"><b>Publisher: </b>{publisher}</li>
                    <li className="list-group-item"><b>First Appearance: </b>{first_appearance}</li>
               </ul>
               <h5>Characters</h5>
               <p>{characters}</p>
               <button className="btn btn-outline-info" onClick={handleReturn} >Return</button>
           </div>
        </div>
     );
}

export default HeroScreen;