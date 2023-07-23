import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import classes from './layout-page.module.css';

import { useState , useEffect} from "react";
import { createNewData } from '../../methods/create_new_data';
import { createNewDataStars } from '../../methods/create_new_data_stars';

// !! Тимчасові данні до отримання данни з сервера.!!
import { dataDiscover } from '../../datas/data-discover';
import { dataPopularStars } from '../../datas/data-popular-stars';

import { Context, visits } from '../../components/сontext';


export default function LayoutPage() {
    
    const [search, setSearch] = useState('');

    const [filmsData, setFilmsData] = useState(null);
    
    const [starsData, setStarsData] = useState(null);

    const[visitsInfo, setVisitsInfo] = useState(visits)

    // Тут треба зробити запит на сервер.
    useEffect(() => {
        setFilmsData(createNewData(dataDiscover))
        setStarsData(createNewDataStars(dataPopularStars))
    }, [])

    // Функція зміни стану пошуку.
    const callbackSetSearchInput = (str) => {
        setSearch(str)
    }

    // Функція зміни стану замовлень.
    const callbackSetVisitsInfo = (newVisit) =>{
        // setVisitsInfo(...visitsInfo, newVisit)
        setVisitsInfo(newVisit)
    }


    return(
        <>
            <div className={classes.layout_page}>

                <Context.Provider value={{ films:filmsData, stars:starsData,search:search,visitsInfo:visitsInfo, callbackSetSearchInput, callbackSetVisitsInfo}}>
                    <Header/>
                    <>
                        <Outlet/>
                    </>
                    <Footer/>
                </Context.Provider>

            </div>
        </>  
    )
    
}