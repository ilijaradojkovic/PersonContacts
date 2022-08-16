import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {User} from "../../../models/user/user";
import {FormControl, Validators} from "@angular/forms";
import {UserService} from "../../../service/user.service";

@Component({
  selector: 'app-contact-dialog',
  templateUrl: './contact-dialog.component.html',
  styleUrls: ['./contact-dialog.component.css']
})
export class ContactDialogComponent implements OnInit {
  avatars=[
    'svg-1','svg-2','svg-3','svg-4',
  ]
user:User
  name = new FormControl('', [Validators.required]);
  constructor(private  userService:UserService,private dialogRef:MatDialogRef<ContactDialogComponent>) {
    this.user=new User()
  }
  getErrorMessage(){

      return   this.name.hasError("required") ? "You mush enter a name" :""

  }

  ngOnInit(): void {

  }

  save() {
    this.user.name=this.name.value
    this.userService.addUser(this.user).then(user=>{
      this.dialogRef.close(this.user)
    })

  }

  dismiss() {
this.dialogRef.close(null)
  }
}
