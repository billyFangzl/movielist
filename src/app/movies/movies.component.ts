import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movie: any;
  constructor(private movieService: MoviesService, private router:ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe((params)=>{
      const id = params['movieID'];
      this.movieService.getMovie(id).subscribe(data=>{
        this.movie = data;
      });
    });
  }

}
