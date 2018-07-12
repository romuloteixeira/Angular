import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies(){
    return [
      {
        "Id": 1,
        "Name": "Avengers: Infinity War",
        "Distributor": "Disney",
        "RankPosition": 1,
        "Image": "file1.jpg"
      },
      {
        "Id": 2,
        "Name": "Black Panther",
        "Distributor": "Disney",
        "RankPosition": 2,
        "Image": "file2.jpg"
      },
      {
        "Id": 3,
        "Name": "Jurassic World: Fallen Kingdom",
        "Distributor": "Universal",
        "RankPosition": 3,
        "Image": "file3.jpg"
      },
      {
        "Id": 4,
        "Name": "Incredibles 2",
        "Distributor": "Disney",
        "RankPosition": 4,
        "Image": "file4.jpg"
      }
    ];
  }

  getMovie(id){

  }
}
