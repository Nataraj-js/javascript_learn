import { movieListSlice as movieDataManager} from "./src/features/movielist.slice.js";

const {data:{movieList }, methods: {pushMovie,getMovies,resetMovies}} = movieDataManager();

pushMovie({id: 100,
    name: "Leo",
    mainActor: "Vijay"});

    getMovies().movieList;
console.log("Local Movie List");    
console.log(movieList);    
console.log("Resetting Closure Movie List");
resetMovies();

console.log("Local Movie List");
console.log(movieList);    
console.log("Closure Movie List");
console.log(getMovies().movieList);

