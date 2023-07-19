import classes from './details-page.module.css';
import { useParams } from 'react-router';

import { currentTime } from '../../methods/current_time';
import { createKey } from '../../methods/create_key';
import star from '../../image/svg/star-filled.svg';
import { Link } from 'react-router-dom';

export default function DetailsPage({dataFilms}){
    const date = new Date()
    console.log(date)
    // Отримання id сторінки.
    const { id } = useParams();
    // Знаходимо обект з відповідним id.
    const searchObject = (id, data) => {
        return  [...data].find(e => e.id === id*1)
    }

 
    // Виводимо інформацію на сторінку.
    const showPageFilm = (id, data) =>{
        // {id, name, info, price, image, backdrop, rating, date}
        const {name, info, price, image, backdrop,  rating, date} = searchObject(id,data)
        return (
            <div className={classes.details} style={{background: `linear-gradient(180deg, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, .8)), top center / cover no-repeat url("${backdrop}")`}}>
                <Link className={classes.details_btn_back} to={'..'}><>&#10094;</> Go back</Link>
                <div  className={classes.details_wrapper}>
                    <div className={classes.details_img_wrapper} >
                   { image ? <img src={image} alt={name}/> : <p>Test</p>}
                    </div>
                    <div className={classes.details_info}>
                        <h1 className={classes.info_main_title}>{name}</h1>

                        <div className={classes.info_rating}>
                            <img src={star} alt='star' />
                            <span>{rating}</span>
                        </div>

                       {/* Розклад */}
                        <ul  className={classes.details_schedule}>
                            <li className={classes.details_schedule_title}>
                                Schedule of sessions and ticket prices
                            </li>

                            {price.map(({time, price, premiere},i) => {
                                return (
                               <li key={createKey(i)}  className={classes.details_schedule_btn_wrapp} >
                                    <button style={currentTime() > time -.7 ? {color:'red'}: null} className={classes.info_price_btn} type='button'>{`${time} : 00 ${premiere ? '170': price} ₴` }</button>
                                </li>
                                )
                            })}

                           
                        </ul>
                        

                      <button className={classes.info_submit_btn} type='button'>Choose a place</button>
                       
                    </div>     
                </div>
                <div>
                    <h2 className={classes.info_title}>Overview</h2>
                    <p className={classes.info_text}>{info}</p>
                    <p>{date}</p>
                </div>    
            </div>    
        )
    }

    return(
        <main className={classes.details_page} >
            { showPageFilm (id, dataFilms)}
        </main>
    )
}