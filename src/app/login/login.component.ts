import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginUserData={};
  constructor(private _auth:AuthService,private _route:Router) { }

  ngOnInit() {
  }
  loginUser(){
    this._auth.loginUser(this.loginUserData).subscribe(
      res=>{
        console.log(res)
        localStorage.setItem('token',res.token)
        this._route.navigate(['/events'])
      },
      error=>console.log(error)
    )
  }

  registered(){
    this._route.navigate(['/registration'])
  }

}
