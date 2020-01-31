import { Injectable } from '@angular/core';
//import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  IsAuth;
  products;
  constructor(public http: HttpClient) { }
  // public isAuthenticated(): boolean {
  //   const token = localStorage.getItem('Loggedin');
  //   var boolValue;
  //   if (token != null) {
  //     debugger;
  //     this.test(token);
  //     boolValue = this.IsAuth;
  //   }
  //   else {
  //     boolValue = false;
  //   }
  //   return boolValue;
  // }
  public async isAuthenticated(){
    debugger;
    const token = localStorage.getItem('Loggedin');
    var boolValue;
    if (token != null) {
      await this.test(token);
      boolValue = this.IsAuth;
    }
    else {
      boolValue = false;
    }
    return boolValue;
  }
  
  public isVertify(token) : boolean{
    var result;
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    };
    if (token != null) {
      var sendToken = {token : token}
      this.http.post('http://localhost:3000/api/vertify', sendToken, httpOptions)
      .subscribe(data =>  {
        result = data;
      })
    }
    return result;
  }
  retVal(data) {
    console.log(data);
    if(data == true){
      localStorage.setItem('result', data);
    }
  }
  async test(token)  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    };
    var sendToken = {token : token}
    //var hasil;
    //const result = await this.http.post('http://localhost:3000/api/vertify', sendToken, httpOptions).toPromise();
    // await this.http.post('http://localhost:3000/api/vertify', sendToken, httpOptions).toPromise(value => {
    //   //hasil = value;
    // });
    var asep;
    this.IsAuth = await this.http.post('http://localhost:3000/api/vertify', sendToken, httpOptions).toPromise();
    return asep;
  }
}