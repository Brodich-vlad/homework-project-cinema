import classes from './details-page.module.css';
import { useParams } from 'react-router';
import {dataDiscover} from '../../datas/data-discover';
import { dataPopularStars } from '../../datas/data-popular-stars';
import {createNewDataStars} from '../../methods/create_new_data_stars';
import { createNewData } from '../../methods/create_new_data';
import { currentTime } from '../../methods/current_time';
import { createKey } from '../../methods/create_key';
import star from '../../image/svg/star-filled.svg';

export default function DetailsPage(){

    // Отримання id сторінки.discover
    const {id} = useParams();
    const param = id.split('_');
    // console.log(param[0])

    const  searchObject = (param, data) =>{
        if(param[0] === 'discover'){
            return  [...data].find(e => e.id === param[1]*1)
        }
        else if(param[0] === 'actors'){
            return  [...data].find(e => e.id === param[1]*1)
        }
    }

    // {
    //     "id": 556356,
    //     "name": "Vanessa Kirby",
    //     "image": "https://image.tmdb.org/t/p/w500/5fbvIkZ02RdcXfZHUUk4cQ9kILK.jpg",
    //     "known_for": [
    //         {
    //             "id": 384018,
    //             "name": "Fast & Furious Presents: Hobbs & Shaw",
    //             "info": "Ever since US Diplomatic Security Service Agent Hobbs and lawless outcast Shaw first faced off, they just have traded smack talk and body blows. But when cyber-genetically enhanced anarchist Brixton's ruthless actions threaten the future of humanity, they join forces to defeat him.",
    //             "price": [
    //                 {
    //                     "time": 11,
    //                     "price": 70,
    //                     "premiere": false
    //                 },
    //                 {
    //                     "time": 15,
    //                     "price": 90,
    //                     "premiere": false
    //                 }
    //             ],
    //             "image": "https://image.tmdb.org/t/p/w500/qRyy2UmjC5ur9bDi3kpNNRCc5nc.jpg",
    //             "backdrop": "https://image.tmdb.org/t/p/w500/hpgda6P9GutvdkDX5MUJ92QG9aj.jpg",
    //             "rating": "6.9",
    //             "date": "2019-08-01",
    //             "category": "discover"
    //         },
    //         {
    //             "id": 296096,
    //             "name": "Me Before You",
    //             "info": "A small town girl is caught between dead-end jobs. A high-profile, successful man becomes wheelchair bound following an accident. The man decides his life is not worth living until the girl is hired for six months to be his new caretaker. Worlds apart and trapped together by circumstance, the two get off to a rocky start. But the girl becomes determined to prove to the man that life is worth living and as they embark on a series of adventures together, each finds their world changing in ways neither of them could begin to imagine.",
    //             "price": [
    //                 {
    //                     "time": 9,
    //                     "price": 70,
    //                     "premiere": false
    //                 },
    //                 {
    //                     "time": 11,
    //                     "price": 70,
    //                     "premiere": false
    //                 },
    //                 {
    //                     "time": 17,
    //                     "price": 120,
    //                     "premiere": false
    //                 },
    //                 {
    //                     "time": 21,
    //                     "price": 60,
    //                     "premiere": false
    //                 }
    //             ],
    //             "image": "https://image.tmdb.org/t/p/w500/Ia3dzj5LnCj1ZBdlVeJrbKJQxG.jpg",
    //             "backdrop": "https://image.tmdb.org/t/p/w500/7jjwdoIVPJp7gcDo9uE1sVZi2Rs.jpg",
    //             "rating": "7.9",
    //             "date": "2016-06-01",
    //             "category": "discover"
    //         },
    //         {
    //             "id": 641662,
    //             "name": "Pieces of a Woman",
    //             "info": "When a young mother's home birth ends in unfathomable tragedy, she begins a year-long odyssey of mourning that fractures relationships with loved ones in this deeply personal story of a woman learning to live alongside her loss.",
    //             "price": [
    //                 {
    //                     "time": 9,
    //                     "price": 70,
    //                     "premiere": false
    //                 },
    //                 {
    //                     "time": 11,
    //                     "price": 70,
    //                     "premiere": false
    //                 },
    //                 {
    //                     "time": 17,
    //                     "price": 120,
    //                     "premiere": false
    //                 },
    //                 {
    //                     "time": 19,
    //                     "price": 120,
    //                     "premiere": false
    //                 }
    //             ],
    //             "image": "https://image.tmdb.org/t/p/w500/OgUfLlhfBFx5BPK6LzBWFvBW1w.jpg",
    //             "backdrop": "https://image.tmdb.org/t/p/w500/izNpxVcjKbF9BiYF4GVqxCOfewL.jpg",
    //             "rating": "7.0",
    //             "date": "2020-12-30",
    //             "category": "discover"
    //         }
    //     ],
    //     "rating": "245.1",
    //     "category": "actors"
    // }
    const createCardFilm =(data)=>{
        // console.log(data.image)
        const newArr = data.map(({info,name,image,backdrop,rating,date},i)=>{
            return (
                <li key={createKey(i)}>
                      { image ? <img src={image} alt={name}/> : <p>Test</p>}
                    <h3>{name}</h3>
                    <p>{info}</p>
                    <div className={classes.info_rating}>
                            <img src={star} alt='star' />
                            <span>{rating}</span>
                    </div>
                    <p>{date}</p>
                </li>
            )
        })
        return newArr
    }
 
    const showPageStar =(param, data) =>{
        const {name,image,known_for} = searchObject(param, createNewDataStars(data))
      
        return (
            <div className={classes.details}>
                <div  className={classes.details_wrapper}>
                    <div className={classes.details_img_wrapper} >
                        <img src={image} alt={name}/>
                    </div>
                </div>
                <h1 className={classes.info_main_title}>{name}</h1>

                <ul>
                    {createCardFilm(known_for)}
                </ul>
            </div>
        )
    }


    const showPageFilm = (param, data) =>{
        // {id, name, info, price, image, backdrop, rating, date}
        const {name, info, price, image,  rating, date} = searchObject(param, createNewData(data))

        return (
            <div className={classes.details}>
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

                      <ul>
                            <li>
                                <h3>Schedule of sessions and ticket prices</h3>
                            </li>

                            {price.map(({time, price, premiere},i) => {
                                return (
                               <li key={i}>
                                    <button style={currentTime() > time -.7 ? {color:'red'}: null} className={classes.info_price_btn} type='button'>{`${time} : 00 ${premiere ? '170': price} ₴` }</button>
                                </li>
                                )
                            })}

                           
                        </ul>
                        

                      <button className={classes.info_submit_btn} type='button'>Choose a place</button>
                        <p>{date}</p>
                    </div>     
                </div>
                <div>
                    <h2 className={classes.info_title}>Overview</h2>
                    <p className={classes.info_text}>{info}</p>
                </div>    
            </div>    
        )
    }

    return(
        <main className={classes.details_page}>
            {param[0] === 'discover'? showPageFilm (param, dataDiscover) :param[0] === 'actors'? showPageStar(param, dataPopularStars):null}
        </main>
    )
}