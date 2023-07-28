import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogin:boolean=false;
constructor( private _AuthService:AuthService)
{


}

ngOnInit(): void
 {
     this._AuthService.userData.subscribe(()=>
     {
        if(this._AuthService.userData.getValue() != null)
        {
          this.islogin=true
        }
        else
        {
          this.islogin=false
        }
     })
 }
 
 logOut()
 {
  this._AuthService.logOut()
 }

}
