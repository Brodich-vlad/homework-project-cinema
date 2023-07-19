import { BrowserRouter } from "react-router-dom";
import { Routes,Route } from "react-router";
import LayoutPage from "../../pages/layout-page/layout-page";
import HomePage from "../../pages/home-page/home-page";
import DetailsPage from "../../pages/details-page/details-page";
import { useState } from "react";
import { createNewData } from '../../methods/create_new_data';
import { createNewDataStars } from '../../methods/create_new_data_stars';

// !! Тимчасові данні до отримання данни з сервера.!!
import { dataDiscover } from '../../datas/data-discover';
import { dataPopularStars } from '../../datas/data-popular-stars';


export default function App() {

    const [films, setFilms] = useState(createNewData(dataDiscover));
    const [stars, setStars] = useState(createNewDataStars(dataPopularStars));



    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LayoutPage/>}>
                       { films && stars && <Route index element={<HomePage dataFilms={films} dataStars={stars}/>}></Route>}
                       {films && <Route path={`details/:id` }element={<DetailsPage dataFilms={films}/>}></Route>}
                    </Route>
                    <Route path="*" ></Route>
                </Routes>
            </BrowserRouter>
            {/* <HomePage/> */}
        </>
    )
}