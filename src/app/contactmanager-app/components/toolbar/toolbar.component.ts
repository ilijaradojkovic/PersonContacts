import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ContactDialogComponent} from "../dialog/contact-dialog/contact-dialog.component";
import {MatSnackBar, MatSnackBarRef, TextOnlySnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Output()  toggleSideNav =new EventEmitter<void>()
  @Input() isSmallScreen:boolean=false
  constructor(private router:Router,
    private snackBar:MatSnackBar,private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
  openSnackBar(message: string, action: string):MatSnackBarRef<TextOnlySnackBar> {
   return this.snackBar.open(message, action);
  }

  openAddContactDialog() {
let dialogRef=this.matDialog.open(ContactDialogComponent,{
  width:'450px'
})
    dialogRef.afterClosed().subscribe(result=>{
    if(result){
      this.openSnackBar("Contact added","Navigate").onAction().subscribe(()=>{})
      //navigate to contact added
      this.router.navigate(['/contactmanager',result.id])
    }
    })
  }
}
