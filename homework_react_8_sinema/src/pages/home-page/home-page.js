import classes from './home-page.module.css';
import MainSection from '../../components/main-section/main-section';
import MoviesSection from '../../components/movies-section/movies-section';


import PopularStarsSection from '../../components/popular-stars-section/popular-stars-section';

export default function HomePage({dataFilms, dataStars}) {

    return (
        <main  className={classes.home_page}>
            <MainSection/>
            <MoviesSection/>
            <PopularStarsSection/>
        </main>
    )
}