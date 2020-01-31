import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  configUrl = "http://jsonplaceholder.typicode.com/users";
  constructor(private http: HttpClient, private router: Router) { }
  Api(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    // this.http.get("http://localhost:51704/api/ApiDataStore/GET_Xamarin?pageFrom=0&pageTo=5",httpOptions)
  }
  showTodayDate(){
    let ndate = new Date();
    return ndate;
  }
  Login(token){
    debugger;
    let hasil;
    if(token){
      this.router.navigate(['/home']);
      hasil = true;
      localStorage.setItem('Loggedin', token);
    }
    else{
      hasil = false;
      localStorage.setItem('Loggedin', '');
    }
    return hasil;
  }
}
