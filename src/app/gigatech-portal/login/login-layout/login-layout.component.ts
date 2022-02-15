import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient,HttpParams} from "@angular/common/http";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-layout',
  templateUrl: './login-layout.component.html',
  styleUrls: ['./login-layout.component.css']
})
export class LoginLayoutComponent implements OnInit {
  email: any = '';
  password: any = '';

  public getLogin(route: string): Observable<any> {
    const apiUrlLogin = 'https://reqres.in/'
    const url = apiUrlLogin + route;
    return this.http.get(url);
  }
  constructor(
    private http: HttpClient,
    private router: Router,) { }

  ngOnInit(): void {
   
  }

  validateForm(){
    
    if(this.email == 'eve.holt@reqres.in' && this.password == 'gigatech'){
       this.getLogin('api/login')
    .subscribe((response) => {
      localStorage.setItem("loginStatus", 'in');
      localStorage.setItem("loginData", JSON.stringify(response.data));
      this.router.navigateByUrl('/portal/menu');
    });    
  }
  }

}
