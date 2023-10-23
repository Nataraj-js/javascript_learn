export function movieListSlice (movies) {
    let data = {
        movieList: []
    }

    const methods = {
        addmovie: (list) => {
            console.log(list);
            data.movieList.push(list);
            console.log(data.movieList);   
        },
        getmovie: () => {
            console.log(data.movieList);
        }
    };
return {data,methods};
}