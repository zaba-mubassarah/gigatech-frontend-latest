import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient,HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Component({
  selector: 'app-top-repositories',
  templateUrl: './top-repositories.component.html',
  styleUrls: ['./top-repositories.component.css']
})
export class TopRepositoriesComponent implements OnInit {

   name:any='stars';
  dataFromApi:any[]=[];

  public getData(route: string): Observable<any> {
    const apiUrlLogin = 'https://api.github.com/'
    const url = apiUrlLogin + route;
    return this.http.get(url);
  }
  constructor(private router: Router,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.getData(`search/repositories?q=${this.name}`)
    .subscribe((response) => {
      this.dataFromApi = response.items;
    }); 
  }
  logoutAction(){
    console.log('logout called');
    this.router.navigateByUrl('/portal/login');
    localStorage.setItem("loginStatus", 'out');
  }
  searchData(){
    this.getData(`search/repositories?q=${this.name}`)
    .subscribe((response) => {
      this.dataFromApi = response.items;
    });
  }

  

}


