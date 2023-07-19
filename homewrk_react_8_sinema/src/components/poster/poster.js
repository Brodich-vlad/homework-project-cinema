import classes from './poster.module.css';
import { createKey } from '../../methods/create_key';
import { currentTime } from '../../methods/current_time';



export function Poster({dataArr, callbackLocation}){

    // Створює строку досягнень.
    const createKnown = (data) =>{
        const str =[]
        data.forEach(({name})=>{
            name && str.push(name)
        })
        return str.join(', ')
    }

    // час сьгоднішніх сеансів.
    const sessionTime = (data) =>{
        const arr = []
        data.forEach(({time, price, premiere},i)=>{
            if(currentTime() < time-.7){
                arr.push( <li key={createKey(i)}>{premiere ?<><span>{time} : 00</span><span>Premiere</span></> : <span>{time} : 00</span>}</li>)
            }
            else return
            // return(
            //     currentTime() < time-.7 ? <li>{`${time} : 00`}</li>:null
            // )
        })
        const elem = arr.length !== 0 ? <><h3 className={classes.schedule_title}>Schedule for today</h3> <ul className={classes.schedule_list}>{arr}</ul><h3 className={classes.schedule_title}>More about the schedule</h3></>: <h3 className={classes.schedule_title}>View the schedule for another day</h3>

        return elem
    }


    const createItems = (data) =>{
        const Items = data.map(({id, name, image, date, known_for, category, price},i)=>{
            return(
                <li className={classes.item}  key={createKey(i)} onClick={()=>{
                    callbackLocation(id)
                }} >
                    <img className={classes.item_img}  src={image}
                    alt={name}/>
                    <div className={classes.item_info}>
                        <h3 className={classes.item_info_title} >{name}</h3>

                        {price && <div className={classes.schedule}>
                            {sessionTime(price)}
                            {/* {price.map(({time, price, premiere})=>{
                                return(
                                    <li>{`${time} : 00`}</li>
                                )
                            })} */}
                        </div>}

                        {date && <p className={classes.item_info_date} >{date}</p>}
                        {known_for && <p className={classes.item_info_known} >{createKnown(known_for)}</p>}
                    </div>
                </li>
            )
        })
        return Items
    }

    return(
        <>
            {createItems(dataArr)}
        </>
    )
}
