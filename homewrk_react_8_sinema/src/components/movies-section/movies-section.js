import classes from './MoviesSection.module.css';
import { Poster } from '../poster/poster';
import { useNavigate } from "react-router-dom";
import { useState,  useContext } from 'react';
import { Context } from '../сontext';

export default function MoviesSection(){
    // Отримуємо контекст.
    const {films} = useContext(Context);

    const [timeSession, setTimeSession] = useState(null)

    let navigate = useNavigate();

    const location = (id) =>{
        navigate(`details/${id}`);
    }
    const callbackTime = (time,id) =>{
        setTimeSession(time)
        navigate(`details/${id}/tiket`);
    }
    // const locationTiket = (id) =>{
    //     navigate(`details/${id}/tiket`);
    // }

 

    return(
        <section className={classes.movies_section}>
            <h2 className={classes.movies_section__title}>Movies</h2>
            <ul className={classes.movies_section__list}>
                {films && <Poster dataArr={ films } callbackLocation={location}  callbackTime={callbackTime}/>}
            </ul>
        </section>
    )
}