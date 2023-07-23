// Повертае рандомне значення true / false.
const randomBoolean = () =>{
    let num = Math.random()
    return num > .4 ? true : false;
}


// Обект зали нумерація місць.
export  const createObjSeats = () =>{
    const newArr = [];
    let cayntY = 0;
    for (let i = 0; i < 119; i++) {
        if(i === 10){cayntY = 1}
        if(i === 22){cayntY = 2}
        
        if(i === 35){cayntY = 3}
        if(i === 49){cayntY = 4}
        if(i === 63){cayntY = 5}
        if(i === 77){cayntY = 6}
        if(i === 91){cayntY = 7}
        if(i === 105){cayntY = 8}
        if(i === 119){cayntY = 9}
        // if(i === 133){cayntY = 10}

        newArr.push(
        {
            id:i+1,
            y:cayntY,
            fre:randomBoolean(),
            selected:false,
        }
        )
        
    }
    console.log(newArr)
    return newArr
}