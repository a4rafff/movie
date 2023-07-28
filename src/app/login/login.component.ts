import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
      constructor(private _AuthService:AuthService , private _Router:Router)
      {

      }
      error:string="";
 form:FormGroup=new FormGroup({
    
       email:new FormControl(null,[Validators.required,Validators.email]),
       password:new FormControl(null,[Validators.required,Validators.minLength(6)]),
 })
 
 
  logIn(form:FormGroup)
  {
         if(form.valid)
         {
            this._AuthService.logIn(form.value).subscribe((response)=>
            {
                if(response.message == "success")
                {    
                    localStorage.setItem("userData",response.data)
                    this._AuthService.saveUserData()
                    this._Router.navigate(["home"])              
                }
                else if(response.message == "please signup")
               {
                   Swal.fire({
                    icon: "error",
                    title: "please signup",
                  });
               }
               else if(response.message == "wrong password")
               {
                   Swal.fire({
                       icon:"error",
                       title:"wrong password",
                   })
               }
            })
         }
  }
}
