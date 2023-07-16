
export function createNewData(data){
    const newData = data.map(({id, title, name, poster_path, overview,vote_average, release_date, first_air_date})=>{
        return{
            id:id,
            name: title || name, 
            info: overview,
            price: [
                {
                    date: "night",
                    price: 60,
                },
                {
                    date: "day",
                    price: 90,
                },
                {
                    date: "morning",
                    price: 70,
                },
                {
                    date: "evening",
                    price: 1200,
                },
                {
                    date: "premiere",
                    price: 170,
                },
               
            ], 
            image:`https://image.tmdb.org/t/p/w500${poster_path}`, 
            rating: vote_average.toFixed(1), 
            date: release_date || first_air_date,
        }
    })
    return newData
}