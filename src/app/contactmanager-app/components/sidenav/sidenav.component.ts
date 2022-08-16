import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver, Breakpoints, BreakpointState} from "@angular/cdk/layout";
import {Observable} from "rxjs";
import {UserService} from "../../service/user.service";
import {User} from "../../models/user/user";
import {Router} from "@angular/router";
const SMALL_WIDTH_BREAKPOINT=720;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  isScreenSmall:boolean=false;
  users:Observable<User[]>;

  constructor(private router:Router,private breakpointObserver:BreakpointObserver,private userService:UserService) {

this.users=new Observable<User[]>()
  }


  ngOnInit(): void {

    this.breakpointObserver
      // .observe([Breakpoints.XSmall])
      //custom i ovo je media query
      .observe([`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`])
      .subscribe((state:BreakpointState)=>{
        this.isScreenSmall=state.matches

      })
    this.users=this.userService.users
    this.userService.loadAll()


  }
  //ovako bi uzeli referencu bez toga da mi prosledjujemo preko funkcije
  //ali moramo u kodu da imamo #sidenav
  //@ViewChild(MatSidenav) sidenav:MatSidenav;

  onClick(sidenav: MatSidenav) {
    if(this.isScreenSmall){
      sidenav.close()
    }
  }
}
