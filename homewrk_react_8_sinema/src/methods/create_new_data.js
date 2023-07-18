

const randomIndexs = (num) =>{
    const schedule = [9,11,13,15,17,19,21,22];
    let length = schedule.length
    let b = num.toFixed()/2
    let arr = []
    for (let i = 0; i < b; i++) {
        let a = Math.floor(Math.random()* length)
        if(!arr.includes(schedule[a])){
            arr.push(schedule[a])
        }
    }
    arr.sort(function(a, b) {
        return a - b;
    });
    return arr
}
// console.log(randomIndexs(6.5) )
// session time

const randomSchedule = (rating) =>{
    let arr = randomIndexs(rating)
    const newArr = arr.map((e)=>{
        return{
            time:e,
            price:e === 9 || e === 11 ? 70: e === 13 || e === 15 ? 90: e === 17 || e === 19 ? 120 : 60,
            premiere: rating > 8  ? true : false,
        }
    })
    return newArr

}


// console.log(8.4 % 2 )&& rating % 2 > .3

export function createNewData(data){
    const newData = data.map(({id, title, name, poster_path, backdrop_path, overview, vote_average, release_date, first_air_date})=>{
        return{
            id:id,
            name: title || name, 
            info: overview,
            price:randomSchedule(vote_average),
            // price: [
                // {
                //     date: "night",
                //     price: 60,
                // },
                // {
                //     date: "day",
                //     price: 90,
                // },
                // {
                //     date: "morning",
                //     price: 70,
                // },
                // {
                //     date: "evening",
                //     price: 1200,
                // },
                // {
                //     date: "premiere",
                //     price: 170,
                // },
            //     {
            //         date: "23:00",
            //         price: 60,
            //     },
            //     {
            //         date: "12:30",
            //         price: 90,
            //     },
            //     {
            //         date: "9:45",
            //         price: 70,
            //     },
            //     {
            //         date: "20:15",
            //         price: 120,
            //     },
            //     {
            //         date: "10:00",
            //         price: 170,
            //         premiere: "Premiere",
            //     },
            // ], 
            image: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`: null ,
            backdrop: backdrop_path ? `https://image.tmdb.org/t/p/w500${backdrop_path}`: null,
            rating: vote_average.toFixed(1), 
            date: release_date || first_air_date,
            category:'discover',
        }
    })
    return newData
}