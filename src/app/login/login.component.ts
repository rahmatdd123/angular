import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service'
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthServiceService as AuthService} from '../auth-service.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userlogin;
  sudahLogin;
  hasil;
  result;
  constructor(public myservice: MyserviceService, public router: Router, public http: HttpClient, public auth: AuthService) {
  }

  async ngOnInit() {
    const token = localStorage.getItem('Loggedin');
    // if (token != null) {
    //   var boolValue = token.toLowerCase() == 'true' ? true : false;
    //   if (boolValue == true) {
    //     this.router.navigate(['/home']);
    //   }
    // }
    var result = await this.auth.isAuthenticated();
    if(result){
      this.router.navigate(['/home']);
    }
    this.userlogin = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    })
  }
  async onClickSubmit(data1) {
    debugger;
    try {
      const httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
      };
      var obj = { username: data1.username, password: data1.password };
      var login;
      login = await this.http.post('http://localhost:3000/api/login', obj, httpOptions).toPromise();
      this.result = login;    
      if(this.result.status == 1){
          if(this.result.user != null || this.result.user != ''){
            this.myservice.Login(this.result.user);
          }
      }
      else if (this.result.status != 1){
        this.hasil = this.result.message;
      }
    }
    catch (e) {

    }
    //alert("Entered username : " + data.usrname);
    // if (data.username != "") {
    //   this.sudahLogin = data.username;
    //   this.hasil = this.myservice.Login(data.username, data.password);
    //   return this.http.post('/api/authenticate',   
    //   JSON.stringify(data));
    // }
  }

}
