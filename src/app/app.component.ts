import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pertama';
  nama = 'tes';
  todayDate;
  httpdata;
  constructor(private myservice: MyserviceService, private http: HttpClient) { }
  ngOnInit() {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Access-Control-Allow-Origin' : '*',
    //     'Authorization': 'Basic ' + btoa('kairosFinance:finance@2019')
    //   })
    // };
    this.todayDate = this.myservice.showTodayDate();
    // this.http.get("http://localhost:51704/api/ApiDataStore/GET_Xamarin?pageFrom=0&pageTo=5", httpOptions)
    // .subscribe((data) => this.displaydata(data));
    //console.log(httpOptions);
    // this.http.get("http://localhost:51704/api/ApiDataStore/GET_Xamarin?pageFrom=0&pageTo=5", httpOptions).
    // subscribe((data) => this.displaydata(data)); 
  }
  
  displaydata(data) { this.httpdata = data; }
  
}
