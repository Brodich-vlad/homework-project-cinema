import classes from './MoviesSection.module.css';
import {createKey} from '../../methods/create_key';


export default function MoviesSection({maiData}){

    const createPriseBtn = (data) =>{
        return data.map(({date, price},i)=>{
            return(
                <li key={createKey(i)} className={classes.list_item_btns__list_item}>
                    <button className={classes.btns__list_btn} type='button'><>
                    {date}  {price} ₴
                    </></button> 
                </li>
            )
        })
    }

    const createMovieItem = (data) =>{
        const Items = data.map(({name, image, date, price},i)=>{
            return(
                <li className={classes.list_item}  key={createKey(i)}>
                    <img className={classes.list_item_img}  src={image}
                    alt={name}/>
                    <div className={classes.list_item_info}>
                        <h3 className={classes.list_item_title} >{name}</h3>
                        <p className={classes.list_item_date} >{date}</p>
                    </div>
                    <div className={classes.list_item_btns}>
                        <ul className={classes.list_item_btns__list}>
                            {createPriseBtn(price)}
                        </ul>
                        <button className={classes.btns_btn} type='button'>choose a place</button>
                    </div>
                </li>
            )
        })
        return Items
    }


    return(
        <section className={classes.movies_section}>
            <h2 className={classes.movies_section__title}>Movies</h2>
            <ul className={classes.movies_section__list}>
                {createMovieItem(maiData)}
            </ul>
        </section>
    )
}