import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import {FormControl , FormGroup ,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private _AuthService :AuthService , private _Router:Router)
  {

  }
  error:string="";
  form: FormGroup = new FormGroup(
    {
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    }
  )

  
  submit(form:FormGroup)
  {   
     if(form.valid)
     { 
         this._AuthService.register(form.value).subscribe((response)=>
         {
               if(response.message == "register successfully")
               {
                   this._Router.navigate(["login"])
               }
               else if(response.message == "already registered")
               {
                Swal.fire({
                  icon: "error",
                  title: "Email Already Used",
                });
               }
         }) 
     }
  }


}
