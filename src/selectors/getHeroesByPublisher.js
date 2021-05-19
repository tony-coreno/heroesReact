import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {  //Se recibe el publisher
    const validPublisher = ['DC Comics', 'Marvel Comics']; // Data valida que se puede recibir
    if ( !validPublisher.includes(publisher)){  // Si no lo encuentra, no existe
        throw new Error(`Publisher  "${publisher}" no es correcto`); //Se dispara el error controlado
    }
    return heroes.filter( hero => hero.publisher === publisher ); // Si lo encuentra lo compara con el publiser recibido y lo retorna // Al filtrarlo se crea un nuevo arreglo
}