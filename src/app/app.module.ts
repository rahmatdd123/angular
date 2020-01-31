import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent, Modal } from './heroes/heroes.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { Page2Component, DialogOverviewExampleDialog } from './page2/page2.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MyserviceService } from './myservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatIconModule ,MatTableModule,MAT_DIALOG_DEFAULT_OPTIONS , MatSortModule , MatInputModule, MatCardModule, MatDialogModule,MatNativeDateModule, MatDatepickerModule, MatMenuModule,MatSelectModule, MatToolbarModule, MatPaginatorModule} from '@angular/material';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    Page2Component,
    PageNotFoundComponent,
    FormComponent,
    LoginComponent,
    MenuComponent,
    DialogOverviewExampleDialog,
    Modal,
    FooterComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    MatCardModule,
    MatSortModule,
    MatIconModule
  ],
  //entry for dialog
  entryComponents: [Page2Component, DialogOverviewExampleDialog, Modal],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
