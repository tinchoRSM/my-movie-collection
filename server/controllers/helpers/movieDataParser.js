//@desc     Parsing data from the TMDB to simpler object lik this
// {
//     "id": 157336,
//     "title": "Interstellar",
//     "summary": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
//     "post": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
// },

import {allGenres} from "./allGenres.js";

export default function movieDataParser(data){

    const parsedData = [];


    //parsing data from movies top 5 results
    
    for(let i = 0; i< data.results.length && i<=5 ; i++){

        const newEntry = {
            id : data.results[i].id,
            title: data.results[i].original_title,
            summary: data.results[i].overview,
            poster: `https://image.tmdb.org/t/p/w500${data.results[i].poster_path}`,
            year: data.results[i].release_date,
            genres: data.results[i].genre_ids,
            officialSite: `https://www.google.com/search?q=${data.results[i].original_title}`
        }
        
        //@desc Setting genre with text from id of genre
        newEntry.genres = newEntry.genres.map((id) => {
            const currentGenre = allGenres.find((el) => el.id === id);
            return currentGenre.name;
        })

        parsedData.push(newEntry);

    }

    return parsedData;
}