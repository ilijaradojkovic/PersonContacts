import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user/user";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {

  user?:User|null;
  constructor(private route:ActivatedRoute,private service:UserService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
this.user=null
      const id=params['id']
      this.service.users.subscribe(user=>{

        setTimeout(()=>{
          if(user.length>0)
            this.user=this.service.userById(id)
        },1500)

      })

    })
  }

}
