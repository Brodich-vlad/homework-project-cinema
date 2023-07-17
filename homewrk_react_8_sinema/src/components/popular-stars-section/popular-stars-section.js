import classes from './popularStarsSection.module.css';
import { Poster } from '../poster/poster';

export default function PopularStarsSection({dataMain}){

    return (
        <section className={classes.stars_section}>
            <h2 className={classes.stars_section__title}>Popular Stars</h2>
            <ul className={classes.stars_section__list}>
                {<Poster dataArr={dataMain}/>}
            </ul>
        </section>
    )
}