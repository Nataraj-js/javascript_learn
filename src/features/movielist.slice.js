export function movieListSlice (movies) {
    let data = {
        movieList: [] //closure movielist
    }

    const methods = {
        pushMovie: (movie) => {
            //console.log(list);
            data.movieList.push(movie);
            //console.log(data.movieList);   
        },
        getMovies: () => {
            //console.log(data.movieList);
            return data
        },
        resetMovies: () => {
            //console.log("Changing the reference");
            //data.movieList = []; //changing the reference
            //without changing the reference
            console.log("Without Changing the reference");
            while(data.movieList.length > 0) {
                data.movieList.pop();
            }
        }
    };
return {data,methods};
}