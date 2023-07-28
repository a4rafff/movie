import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
      
  movie:any[]=[];
  pageNum:number=1
  moviee:string='https://image.tmdb.org/t/p/w500';
  firstName:string='';
  constructor(private _AuthService:AuthService)
  {
    
  }

 

  ngOnInit(): void {
          
    this.displayUser(1)
  }

  displayUser(pageNum:number)
  {
    this._AuthService.movie(pageNum).subscribe((response)=>
    {
        this.movie=response.results;

    })
  }
  search()
  {
    if(this.firstName != "")
    {
      this.movie=this.movie.filter((res)=>
      {
          return res.title.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
     else if(this.firstName == "")
    {
      this.ngOnInit();
    }  
  }
  nextPage()
  {
      this.pageNum++;
      this.displayUser(this.pageNum)
      if(this.pageNum>=6)
       {
        this.pageNum=6
        console.log(this.pageNum)
        this.displayUser(this.pageNum)
       } 
  }
  prevPage()
  {
    this.pageNum--;
    this.displayUser(this.pageNum)
      if(this.pageNum<=1)
       {
        this.pageNum=1
        console.log(this.pageNum)
        this.displayUser(this.pageNum)
       }
  }
   
}
