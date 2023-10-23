import { movieListSlice} from "./src/features/movielist.slice.js";

movieListSlice().methods.addmovie({id: 100,
    name: "Leo",
    mainActor: "Vijay"});

movieListSlice().methods.getmovie();
    
console.log(movieListSlice().data.movieList);    
