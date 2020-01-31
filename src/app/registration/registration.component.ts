import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hasil;
  result;
  userRegister;
  constructor(public router: Router, public http: HttpClient) { }

  ngOnInit() {
    this.userRegister = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required),
      repassword: new FormControl("", Validators.required)
    })
  }
  async onClickSubmit(data1) {
    debugger;
    try {
      if(data1.password == data1.repassword){
        const httpOptions = {
          headers: new HttpHeaders({
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          })
        };
        var obj = { username: data1.username, password: data1.password };
        var reg;
        reg = await this.http.post('http://localhost:3000/api/register', obj, httpOptions).toPromise();
        this.result = reg;
        alert(this.result.Pesan)
      }
    }
    catch (e) {

    }
  }
}
