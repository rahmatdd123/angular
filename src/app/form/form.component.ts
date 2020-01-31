import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
formdata;
  constructor() { }

  ngOnInit() {
  }
  onClickSubmit(data) {
    debugger;
    //alert("Entered username : " + data.usrname);
    if(data.usrname != ""){
        alert("username: " + data.usrname);
        console.log(data);
    }
    else{
      alert("masukan username");
    }
 }

}
