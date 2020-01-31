import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
btnProfile;
  constructor(private router : Router) { }
  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }
  ngOnInit() {
  }
  profileBtn(){
    // var btn = document.getElementById('btnProfile');
    // btn.innerText = 'sdsds'; // change button text
    // btn.classList.add('ssd'); //add some fckng class
    // if(btn.classList.contains('ssd')){//class contains
    //   alert('you got it!!11!')
    // }
  }
}
