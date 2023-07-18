import {createNewData} from './create_new_data';

// {
//     "adult": false,
//     "gender": 2,
//     "id": 1806659,
//     "known_for": [
//         {
//             "adult": false,
//             "backdrop_path": "/u6vFOUjFoPOLDH1f2fG2WQqyHch.jpg",
//             "genre_ids": [
//                 35,
//                 18
//             ],
//             "id": 806067,
//             "media_type": "movie",
//             "original_language": "ta",
//             "original_title": "மண்டேலா",
//             "overview": "An underprivileged hairdresser becomes the game changer in a local body election in a village where caste politics rules the roost. Will he be able to bring some changes to people's lives?",
//             "poster_path": "/t9A7nv8ac8VrXDt6tgu4UXi2zAq.jpg",
//             "release_date": "2021-04-05",
//             "title": "Mandela",
//             "video": false,
//             "vote_average": 7.1,
//             "vote_count": 15
//         },
//         {
//             "adult": false,
//             "genre_ids": [
//                 18
//             ],
//             "id": 814397,
//             "media_type": "movie",
//             "original_language": "ta",
//             "original_title": "தர்மம்",
//             "overview": "A small boy dresses up as a beggar for a fancy dress contest. In the meanwhile, there is a man who joins as a traffic police officer and finds his immediate reporting cop to take money from the poor.",
//             "release_date": "2012-06-28",
//             "title": "Dharmam",
//             "video": false,
//             "vote_average": 0,
//             "vote_count": 0
//         },
//         {
//             "adult": false,
//             "backdrop_path": "/c8UbDSvpMNUdLGCFkSF3mjJsu8c.jpg",
//             "genre_ids": [
//                 18,
//                 28
//             ],
//             "id": 987895, 
//             "media_type": "movie",
//             "original_language": "ta",
//             "original_title": "மாவீரன்",
//             "overview": "A cartoonist for a local Tamil newspaper is reluctant to face violence. Despite his fears, he is compelled to confront a corrupt politician. But the scared cartoonist has more to him than meets the eye.",
//             "poster_path": "/8w59pbhQRvLXuKNdBaKu51iJzoP.jpg",
//             "release_date": "2023-07-14",
//             "title": "Maaveeran",
//             "video": false,
//             "vote_average": 0,
//             "vote_count": 0
//         }
//     ],
//     "known_for_department": "Directing",
//     "name": "Madonne Ashwin",
//     "popularity": 339.437,
//     "profile_path": "/6P363mtxwZFcwzwRdJDxyKX1d9J.jpg"
// }`https://image.tmdb.org/t/p/w500/6P363mtxwZFcwzwRdJDxyKX1d9J.jpg`
// https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg

// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg
// https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png
// https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png known_for



export const createNewDataStars = (data) => {
    return data.map(({id, name, profile_path, known_for, popularity}) => {
        return {
            id: id,
            name: name,
            image: profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` :  `https://image.tmdb.org/t/p/w500${known_for[0].backdrop_path}`,
            // known_for: known_for,createNewData
            known_for:createNewData(known_for),
            rating: popularity.toFixed(1),
            category:'actors',
        }
    })
}