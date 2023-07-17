import classes from './MoviesSection.module.css';
import { Poster } from '../poster/poster';


export default function MoviesSection({maiData}){

    return(
        <section className={classes.movies_section}>
            <h2 className={classes.movies_section__title}>Movies</h2>
            <ul className={classes.movies_section__list}>
                {<Poster dataArr={maiData}/>}
            </ul>
        </section>
    )
}