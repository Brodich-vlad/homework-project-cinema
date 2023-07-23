import classes from './details-page.module.css';
import { useParams } from 'react-router';

import { currentTime } from '../../methods/current_time';
import { createKey } from '../../methods/create_key';
import { creatNewVisit } from '../../methods/creatNewVisit';
import { searchObject } from '../../methods/searchObject';

import star from '../../image/svg/star-filled.svg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router'; 
import { useContext, useState} from 'react';
import { Context } from '../../components/сontext';

export default function DetailsPage(){

      // Отримуємо контекст.
      const {films, visitsInfo, callbackSetVisitsInfo} = useContext(Context);

    // const date = new Date()
    // console.log(date)
    // Отримання id сторінки.
    const { id } = useParams();

    // Знаходимо обект з відповідним id.
    // const searchObject = (id, data) => {
    //     return  [...data].find(e => e.id === id*1)
    // }

    const [timeSession, setTimeSession] = useState(null);

    // tiket
    let navigate = useNavigate();

    // console.log(navigate)
    const location = () => {
        callbackSetVisitsInfo(timeSession)
        navigate('tiket');

    }
 
   



    const clicTime = (time, id, premiere, price) =>{
        const newObj = creatNewVisit(visitsInfo,time, id, premiere, price)
        // const newObj ={
        //     ...visitsInfo, 
        //     film:data, 
        //     time:time,
        //     premiere:premiere,
        //     price:premiere ? 170 : price,
        // }

        setTimeSession(newObj);
        // console.log(data)
        // navigate(`details/${id}/tiket`);
        // setSearchInput('');
    }



    // Виводимо інформацію на сторінку.
    const showPageFilm = (id, data) =>{

        const film = searchObject(id,data)
        // {id, name, info, price, image, backdrop, rating, date}
        const {name, info, price, image, backdrop,  rating, date} = film;


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
                                    <button style={currentTime() > time -.7 ? {color:'red'}: null} className={classes.info_price_btn} type='button'
                                    onClick={()=>{
                                        clicTime(time, id, premiere, price)
                                    }}

                                    >{premiere 
                                        ?
                                    <><span>Time {time} : 00</span><span> Premiere</span> Price 170 ₴</>
                                        : 
                                    <> <span>Time {time} : 00</span> Price {price} ₴</>}</button>
                                </li>
                                )
                            })}

                           
                        </ul>

                        <button disabled={timeSession ? false : true} className={classes.schedule_btn} type='button'
                            onClick={(ev) => {
                                ev.stopPropagation()
                                location()
                            }}
                            >Choose a place</button>
                       

                            {/* <button className={classes.info_submit_btn} type='button' onClick={()=>{location()}}>Choose a place</button> */}

                     
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
            {films && showPageFilm (id, films)}
        </main>
    )
}