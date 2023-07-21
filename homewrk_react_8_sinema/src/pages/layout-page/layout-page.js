import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import classes from './layout-page.module.css';

import { useState } from "react";
import { createNewData } from '../../methods/create_new_data';
import { createNewDataStars } from '../../methods/create_new_data_stars';

// !! Тимчасові данні до отримання данни з сервера.!!
import { dataDiscover } from '../../datas/data-discover';
import { dataPopularStars } from '../../datas/data-popular-stars';
import { Context } from '../../components/сontext';

// export const UserContext = createContext();

export default function LayoutPage(){
    const [filmsDataSlider, setFilmsDataSlider] = useState(createNewData(dataDiscover));

    const [filmsData, setFilmsData] = useState(createNewData(dataDiscover));

    const [starsData, setStarsData] = useState(createNewDataStars(dataPopularStars));

    return(
        <>
            <div className={classes.layout_page}>

                <Context.Provider value={{ films:filmsData, stars:starsData, sliderData:filmsDataSlider}}>
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