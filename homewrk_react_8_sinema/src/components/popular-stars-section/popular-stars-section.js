import classes from './popularStarsSection.module.css';
import { createKey } from '../../methods/create_key';

export default function PopularStarsSection({dataMain}){

    const createStarsItem = (data) =>{
        const Items = data.map(({name, image, known_for},i)=>{
            return(
                <li className={classes.list_item}  key={createKey(i)}>
                    <img className={classes.list_item_img}  src={image}
                    alt={name}/>
                    <div className={classes.list_item_info}>
                        <h3 className={classes.list_item_title} >{name}</h3>
                        {/* <p className={classes.list_item_date} >{date}</p> */}
                    </div>
                    {/* <div className={classes.list_item_btns}>
                        <ul className={classes.list_item_btns__list}>
                            {createPriseBtn(price)}
                        </ul>
                        <button className={classes.btns_btn} type='button'>choose a place</button>
                    </div> */}
                </li>
            )
        })
        return Items
    }
    return (
        <section className={classes.stars_section}>
            <h2 className={classes.stars_section__title}>Popular Stars</h2>
            <ul className={classes.stars_section__list}>
                {createStarsItem (dataMain)}
            </ul>
        </section>
    )
}