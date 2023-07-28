import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-moviedetalis',
  templateUrl: './moviedetalis.component.html',
  styleUrls: ['./moviedetalis.component.scss']
})
export class MoviedetalisComponent implements OnInit {
  

  id:string=''
  movieDetalis:any={}
  path:string='https://image.tmdb.org/t/p/w500';
  constructor(private _activatedRoute:ActivatedRoute ,private _authService:AuthService )
  {
       
  }
  ngOnInit(): void {
       
    this._activatedRoute.params.subscribe((params)=>
    {
      this.id=params["id"]
    })
    this._authService.moviedetalis(this.id).subscribe((respone)=>
    {
       this.movieDetalis=respone;
    })
  
    
  }

}
