import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class TrendingComponent implements OnInit {

  movie:any[]=[];
  moviee:string='https://image.tmdb.org/t/p/w500';
  constructor(private _AuthService:AuthService)
  {
    
  }
  ngOnInit(): void {
          
    this.displayUser()
  }
  displayUser()
  {
    this._AuthService.trendingMovie().subscribe((response)=>
    {
        this.movie=response.results;

    })
  }

}
