import classes from './popularStarsSection.module.css';
import { Poster } from '../poster/poster';
import { useNavigate } from "react-router-dom";

export default function PopularStarsSection({dataMain}){
    let navigate = useNavigate();
    const location = (category,id) =>{
        navigate(`details/${category}_${id}`);
        // console.log(`${category}/${id}`)
    }
    return (
        <section className={classes.stars_section}>
            <h2 className={classes.stars_section__title}>Popular Stars</h2>
            <ul className={classes.stars_section__list}>
                {<Poster dataArr={dataMain} callbackLocation={location}/>}
            </ul>
        </section>
    )
}