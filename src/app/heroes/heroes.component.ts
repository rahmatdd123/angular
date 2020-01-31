import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatPaginator, MatTableDataSource, MatSort, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {}
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  constructor(private http: HttpClient, public dialog: MatDialog) { }
  heroes = HEROES;
  isavailable = true;
  httpdata;

  dataSource = new MatTableDataSource(ELEMENT_DATA);
  test123 = ELEMENT_DATA;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  myClickFunction(event) {

  }
  changeHeroes(event) {
    console.log("Changed month from the Dropdown");
    console.log(event);
  }
  displayedColumns: string[] = ['TaskName', 'TaskDetails', 'TaskDate', 'Status','Action'];
  async ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Basic ' + btoa('kairosFinance:finance@2019')
      })
    };
    this.displaydata()
    // this.http.get("http://localhost:51704/api/ApiDataStore/GET_Xamarin?pageFrom=0&pageTo=10", httpOptions).
    //   subscribe((data) => this.displaydata(data));
    //   console.log(ELEMENT_DATA);
      
  }
  async displaydata() {
    debugger;
    ELEMENT_DATA = [];
    this.httpdata = await this.http.get('http://localhost:3000/api/gettodo').toPromise();
    this.httpdata[0].forEach(element => {
      ELEMENT_DATA.push(element);
    });
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  openDialog(usrData): void {
    const dialogRef = this.dialog.open(Modal, {
      width: '550px',
      data: {TaskName: usrData.TaskName, TaskDate : usrData.TaskDate, TaskDetails : usrData.TaskDetails}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  async removeArray(Id){
    debugger;
    var isYes = confirm('Are you sure?');
    if(isYes){
      const httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin': '*',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
      };
      var obj = {
        Id : Id
      }
  
      await this.http.post('http://localhost:3000/api/deleteTask', obj, httpOptions).toPromise().then(() => {})
      .catch((error) => {
       console.log(error)
      });
      
      this.displaydata()
    }
  }
}
@Component({
  selector: 'heroes.component.dialog',
  templateUrl: 'heroes.component.dialog.html',
})
export class Modal {
  constructor(
    public dialogRef: MatDialogRef<Modal>,
    @Inject(MAT_DIALOG_DATA) public data: object) {}
  onNoClick(): void {
    this.dialogRef.close();
  }  
  submit(data){
    console.log(data);
  }
}
var asd;
const coba = 'asdsd';
var ELEMENT_DATA = [];