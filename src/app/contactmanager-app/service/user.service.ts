import { Injectable } from '@angular/core';
import {User} from "../models/user/user";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  get users(): Observable<User[]>   {
    return this._users?.asObservable();
  }

  private _users : BehaviorSubject<User[]> =new BehaviorSubject<User[]>([]);

  private dataStore: {
    users: User[]
  }= {
    users: []
  }
  constructor(private http:HttpClient) {

  }

  public loadAll(){
    const  usersUrl="https://angular-material-api.azurewebsites.net/users"
    return this.http.get<User[]>(usersUrl).subscribe(data=>{
      this.dataStore.users=data
      this._users.next(data)
    },error=>{console.log("failed")})

  }

  userById(id: number) {
    return this.dataStore.users.find(x=>x.id==id)
  }

  addUser(user: User):Promise<User>{
return new Promise<User>((resolver,reject)=>{
  user.id=this.dataStore.users.length+1
  this.dataStore.users.push(user)
  this._users.next(this.dataStore.users)
  resolver(user)
})
  }
}
