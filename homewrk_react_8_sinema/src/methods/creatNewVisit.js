// Севорює новий обект замовлення.
export  const creatNewVisit = (visitData, time, id, premiere, price) =>{
    const newObj ={
        ...visitData, 
        filmId:id, 
        time:time,
        premiere:premiere,
        price:premiere ? 170 : price,
    }
    return  newObj
}