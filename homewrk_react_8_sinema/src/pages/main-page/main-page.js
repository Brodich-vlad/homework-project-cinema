import Header from '../../components/header/header';
import './main-page.css';
import MainSection from '../../components/main-section/main-section';
import MoviesSection from '../../components/movies-section/movies-section';
import { data_main } from '../../datas/data_main';
import { createNewData } from '../../methods/create_new_data';
import PopularStarsSection from '../../components/popular-stars-section/popular-stars-section';
import Footer from '../../components/footer/footer';

export default function MainPage() {

    const mainData = createNewData(data_main);

    return (
        <div className='main-page'>
            <Header />
            <main>
              <MainSection data={mainData}/>
              <MoviesSection maiData={mainData}/>
              <PopularStarsSection dataMain={mainData}/>
            </main>
            <Footer/>
        </div>
    )
}