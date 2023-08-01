import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import classes from './layout-page.module.css';

import { useState , useEffect} from "react";
import { createNewData } from '../../methods/create_new_data';
import { createNewDataStars } from '../../methods/create_new_data_stars';
import { options } from '../../methods/options';


// !! Тимчасові данні до отримання данни з сервера.!!
// import { dataDiscover } from '../../datas/data-discover';
// import { dataPopularStars } from '../../datas/data-popular-stars';

import { Context, visits } from '../../components/сontext';


export default function LayoutPage() {
    
    const [search, setSearch] = useState('');

    const [filmsData, setFilmsData] = useState(null);
    
    const [starsData, setStarsData] = useState(null);

    const[visitsInfo, setVisitsInfo] = useState(visits)

    // Тут треба зробити запит на сервер.
    useEffect(() => {
        // Запит фільми.
        fetch('https://api.themoviedb.org/3/discover/movie', options)
        .then(response => response.json())
        .then(response => setFilmsData(createNewData(response.results)))
        .catch(err => console.error(err)); 

        // Запит зірки.
        fetch('https://api.themoviedb.org/3/person/popular', options)
        .then(response => response.json())
        .then(response => setStarsData(createNewDataStars(response.results)))
        .catch(err => console.error(err));




        // setFilmsData(createNewData(dataDiscover))
        // setStarsData(createNewDataStars(dataPopularStars))
    }, [])

    // Функція зміни стану пошуку.
    const callbackSetSearchInput = (str) => {
        setSearch(str)
    }

    // Функція зміни стану замовлень.
    const callbackSetVisitsInfo = (newVisit) =>{
        setVisitsInfo(newVisit)
    }


    return(
        <>
            <div className={classes.layout_page}>

                <Context.Provider value={{ films:filmsData, stars:starsData,search:search,visitsInfo:visitsInfo, callbackSetSearchInput, callbackSetVisitsInfo}}>
                    <Header/>
                    <>
                       {filmsData && <Outlet/>}
                    </>
                    <Footer/>
                </Context.Provider>

            </div>
        </>  
    )
    
}