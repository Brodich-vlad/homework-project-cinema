import classes from './MoviesSection.module.css';
import { Poster } from '../poster/poster';
import { useNavigate } from "react-router-dom";

export default function MoviesSection({maiData}){

    let navigate = useNavigate();
    const location = (id) =>{
        navigate(`details/${id}`);
    }
    return(
        <section className={classes.movies_section}>
            <h2 className={classes.movies_section__title}>Movies</h2>
            <ul className={classes.movies_section__list}>
                {<Poster dataArr={maiData} callbackLocation={location}/>}
            </ul>
        </section>
    )
}