import './home-page.css';
import MainSection from '../../components/main-section/main-section';
import MoviesSection from '../../components/movies-section/movies-section';

// !!! Тимчасові масиви !!!
import { dataDiscover } from '../../datas/data-discover';
import { createNewData } from '../../methods/create_new_data';

import { createNewDataStars } from '../../methods/create_new_data_stars';
import { sortSating } from '../../methods/sort_rating';
import { dataPopularStars } from '../../datas/data-popular-stars';
import PopularStarsSection from '../../components/popular-stars-section/popular-stars-section';

export default function HomePage() {
    // Трансформація масиву за власним шаблоном.
    const mainData = createNewData(dataDiscover);
    const mainDataStars = createNewDataStars(dataPopularStars);
    // Сортування масиву за рейтингом.
    const sortMainData = sortSating(mainData);

    return (
        <div className='home-page'>
            <main>
              <MainSection data={sortMainData}/>
              <MoviesSection maiData={mainData}/>
              <PopularStarsSection dataMain={mainDataStars}/>
            </main>
        </div>
    )
}