import { createContext } from "react"

// export const contecst =  { films:filmsData, stars:starsData,search:search}
export const visits = 
    {
        filmId:'',
        time:'',
        price:0,
        numPlaces:[],
        premiere:false,
        date:''
    }



export const Context = createContext({
    films: [],
    stars: [],
    search: '',
    visits:visits,
    setFunction: ()=>{},
})