import classes from './tiket-page.module.css';
import screen from '../../image/svg/ticket-swg/line.svg'

import seat_white from '../../image/svg/ticket-swg/seat.svg';
import seat_red from '../../image/svg/ticket-swg/seat-red.svg';
import seat_green from '../../image/svg/ticket-swg/seat-green.svg';

import { useContext } from 'react';
import { createKey } from '../../methods/create_key';
import { searchObject } from '../../methods/searchObject';
import { createObjSeats } from '../../methods/createObjSeats';

import { Context } from '../../components/сontext';
import { useState } from 'react';

export default function TiketPage() {
   // Отримуємо контекст.
   const { visitsInfo, films, callbackSetVisitsInfo } = useContext(Context);

  

    // Стан вільних місць.
    const [seats, setSeats] = useState(createObjSeats());

    // Клік обрати місце.
    const clickSeat = (id) =>{
       const newArr = seats.map((e)=>{
            if(e.id === id){
                return{
                    ...e,
                    selected: e.selected ? false: true,
                }
            }
            else {return {...e}}
        })
        setSeats(newArr)
    }

    // Функція виводить глядацьку залу з місцями.
    const createCinemaHall = (data) =>{
        const newArr = [[],[],[],[],[],[],[],[],[]];
        data.forEach((el,i) => {
            newArr[el.y].push(
                <li  className={el.id === 5 
                    ? 
                classes.seat_centr_1
                    :
                el.id === 16
                    ? 
                classes.seat_centr_2 
                    :
                classes.seat} key={createKey(i)}
                 onClick={()=>{
                    el.fre && clickSeat(el.id)
                 }}
                 >
                    <img  className={classes.seat_img} src={el.fre && !el.selected ? seat_white: el.selected ? seat_green : seat_red} alt='icon seat'/>
                </li>
            )
        });
        console.log(newArr)
        const arr = newArr.map((e,i)=>{
            return (
                <li key={createKey(i)} className={classes.hall_line_wrapper}>
                    <ul  className={classes.hall_line_seats}>
                        {e}
                    </ul>
                </li>
            )
        })
        return arr
    }


    // Функція виводить інформацію про обрані місця.
    const createListSeats = (data) =>{
        const newArr = [];
        data.forEach((e)=>{
            if(e.selected){
                newArr.push(
                    <li>Row: {e.y+1} Place: {e.id}</li>
                )
            }
        })
        if(newArr.length > 0){
            return (
                <>
                    <h3>Your places</h3>
                    <ul>
                        {newArr}
                    </ul>
                </>
            )
        }
        else return null
    }

    // Функція виводить інформацію про фільм місця ціни.
    const showInfoForm = (info, data, numSeats) =>{
        const {filmId, time, premiere, price } = info
        const {name} = searchObject( filmId, data);

        return(
            <>
                <h2>Film name: {name}</h2>
                {premiere && <p>Premiere</p>}
                <p>Session time {time} : 00</p>
                <p>Price {price} ₴</p>

                {createListSeats(numSeats)}
            </>
        )
       
    }


    return (
        <main className={classes.tiket_page}>

                <h2 className={classes.tiket_page_title}>Choose a place</h2>

            <div className={classes.tiket_page_wrapper}>

                <div className={classes.cinema_hall_section}>
                    <img  className={classes.cinema_hall_screen} src={screen} alt='screen'/>

                    <ul  className={classes.cinema_hall_lines}>
                        {createCinemaHall(seats)}
                    </ul>
                    <ul className={classes.tiket_page_list}>
                        <li className={classes.tiket_page_list_item}>
                            <img src={seat_red} alt='seat red'/>
                            <p>Occupied seat</p>
                        </li>
                        <li className={classes.tiket_page_list_item}>
                            <img src={seat_white} alt='seat white'/>
                            <p>Free space</p>
                        </li>
                        <li className={classes.tiket_page_list_item}>
                            <img src={seat_green} alt='seat green'/>
                            <p>Selected place</p>
                        </li>
                    </ul>
                </div>

                <div className={classes.tiket_page_info}>
                    {showInfoForm(visitsInfo, films, seats )}
                </div>
            </div>
        </main>
    )
}