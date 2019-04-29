import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popular_movies:any;
  upcoming_movies:any;
  serch_result:any;
  movie:any
  constructor(public movieService:MoviesService) {
    this.movieService.getUpcomingMovies().subscribe(data=>{
      this.upcoming_movies = data['results'];
    });
    this.movieService.getPopularMovies().subscribe(data=>{
      this.popular_movies = data['results'];
    });
  }

  searchMovies(){
    this.movieService.searchMovie(this.movie).subscribe(data=>{
      this.serch_result = data['results'];
    });
  }

  ngOnInit() {
  }

}
