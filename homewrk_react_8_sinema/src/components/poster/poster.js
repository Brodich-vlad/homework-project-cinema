import classes from './poster.module.css';
import { createKey } from '../../methods/create_key';


export function Poster({dataArr}){

    const createKnown = (data) =>{
        const str =[]
        data.forEach(({title})=>{
            title && str.push(title)
        })
        return str.join(', ')
    }
    const createItems = (data) =>{
        const Items = data.map(({id, name, image, date, known_for},i)=>{
            return(
                <li onClick={()=>{
                    console.log(id)
                }} className={classes.item}  key={createKey(i)}>
                    <img className={classes.item_img}  src={image}
                    alt={name}/>
                    <div className={classes.item_info}>
                        <h3 className={classes.item_info_title} >{name}</h3>

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
