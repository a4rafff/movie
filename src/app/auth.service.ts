import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  userData= new BehaviorSubject(null)
  constructor(private _Http :HttpClient, private _Router:Router) 
  { 
       if(localStorage.getItem("userData") !=null)
       {
          this.saveUserData()
       }
  }

  saveUserData()
  {
     let user=JSON.stringify( localStorage.getItem("userData"));
     this.userData.next(jwtDecode(user))
     console.log(this.userData)
  }
 
  logOut()
  {
    localStorage.removeItem("userData");
    this.userData.next(null);
    this._Router.navigate(["login"])

  }
  register(formData : object):Observable<any>
  {
     return this._Http.post(`https://store-5hap.onrender.com/signup`, formData)
  }

  logIn(formData: object):Observable<any>
  {
    return this._Http.post(`https://store-5hap.onrender.com/login`,formData)
  }
  
  movie(pageNum:number):Observable<any>
  {
      return this._Http.get(`https://api.themoviedb.org/3/movie/popular?api_key=b0bf0f0c8a475e873f9a20e9cdb09c55&language=en-US&page=${pageNum}`)
  } 
  moviedetalis(id:any):Observable<any>
   {
     return this._Http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=b0bf0f0c8a475e873f9a20e9cdb09c55&language=en-US&page=1`)
   }
  watchMovie(id:any):Observable<any>
  { 
      return this._Http.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=b0bf0f0c8a475e873f9a20e9cdb09c55&language=en-US&page=1`)
  }
  trendingMovie():Observable<any>
  { 
      return this._Http.get(`https://api.themoviedb.org/3/trending/all/day?api_key=b0bf0f0c8a475e873f9a20e9cdb09c55&language=en-US&page=1`)
  }
}
