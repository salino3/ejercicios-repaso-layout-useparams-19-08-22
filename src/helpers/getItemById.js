import { motosYcoches } from "../data/Info";

export const getItemById = (id) =>{
// find() de default si es 'false' devuelve 'undefined'
  return motosYcoches.find((hero) => hero.id === id);
}

