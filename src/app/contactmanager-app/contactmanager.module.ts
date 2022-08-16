import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactmanagerAppComponent} from "./contactmanager-app.component";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {MainContentComponent} from "./components/main-content/main-content.component";
import {SidenavComponent} from "./components/sidenav/sidenav.component";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {UserService} from "./service/user.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTabsModule} from "@angular/material/tabs";
import { NoteComponent } from './components/note/note.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";
import {MatMenuModule} from "@angular/material/menu";
import { ContactDialogComponent } from './components/dialog/contact-dialog/contact-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from "@angular/material/snack-bar";

const routes:Routes=[
  {path:"",component:ContactmanagerAppComponent,children:[
      {path:"",component:MainContentComponent},
      {path:":id",component:MainContentComponent}
    ]},
  {path:"**",redirectTo:""},

]

@NgModule({
  declarations: [
    ContactmanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NoteComponent,
    ContactDialogComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule,

    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatMenuModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,MatSnackBarModule
  ],
  providers:[
    UserService
  ]
})
export class ContactmanagerModule { }
