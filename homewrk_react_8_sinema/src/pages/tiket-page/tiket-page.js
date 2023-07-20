import classes from './tiket-page.module.css';
import screen from '../../image/svg/ticket-swg/line.svg'

import seat_white from '../../image/svg/ticket-swg/seat.svg';
import seat_red from '../../image/svg/ticket-swg/seat-red.svg';
import seat_green from '../../image/svg/ticket-swg/seat-green.svg';

export default function TiketPage() {
    
    const createObjSeats = () =>{
        const newArr = [];
        let cayntY = 0;
        for (let i = 0; i < 49; i++) {
            if(i === 6){cayntY = 1}
            if(i === 14){cayntY = 2}
         
            if(i === 22){cayntY = 3}
            if(i === 31){cayntY = 4}
            if(i === 40){cayntY = 5}

           newArr.push(
            {
                id:i+1,
                y:cayntY,
                fre:true,
                selected:false,
            }
            )
            
        }
        return newArr
    }

    const createCinemaHall = (data) =>{
        const newArr = [[],[],[],[],[],[]];
        data.forEach((el,i) => {
            newArr[el.y].push(
                <li  className={el.id === 3 
                    ? 
                classes.seat_centr_1
                    :
                el.id === 10
                    ? 
                 classes.seat_centr_2 
                    :
                 classes.seat} key={i*10}
                 onClick={()=>{
                    console.log(el)
                 }}
                 >
                    <img  className={classes.seat_img} src={el.fre && !el.selected ? seat_white: el.selected ? seat_green : seat_red} alt='icon seat'/>
                </li>
            )
        });

        const arr = newArr.map((e,i)=>{
            return (
                <li key={i*20} className={classes.hall_line_wrapper}>
                    <ul  className={classes.hall_line_seats}>
                        {e}
                    </ul>
                </li>
            )
        })
        return arr
    }

    return (
        <main className={classes.tiket_page}>
            <h2 className={classes.tiket_page_title}>Choose a place</h2>
            <div className={classes.cinema_hall_section}>
                <img  className={classes.cinema_hall_screen} src={screen} alt='screen'/>

                <ul  className={classes.cinema_hall_lines}>
                    {createCinemaHall(createObjSeats())}
                </ul>
            </div>
       
        </main>
    )
}