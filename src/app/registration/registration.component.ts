import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerUserData={}
  constructor(private _auth:AuthService,private _route:Router) { }

  ngOnInit() {
  }

  registerUser(){
    this._auth.registerUser(this.registerUserData).subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this._route.navigate(['/login'])
      },
      err=>console.log(err)
    )
  }

}
