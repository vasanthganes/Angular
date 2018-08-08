import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from './models/user.model';
import * as UserActions from './actions/user.action';


interface HomeState {
  user: User;
}
interface ResponseInterface {
  items: Array<any>;
  item:Object;
}


@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  user: Observable<User>
  userList:Observable<any>;
  items:Array<any>;
  item:Object;

 constructor(private store: Store<HomeState>,private http: HttpClient) {
    this.user = this.store.select(state => state.user);
   }
  ngOnInit(){
    this.user.subscribe(<ResponseInterface>(data)=> {
      this.items = data.items; 
      this.item = data.item; 
      });
  }

  getUsers() {
    const url = 'https://reqres.in/api/users/';
    this.userList = this.http.get(url, {observe: 'body'});
    this.userList.pipe(map(data => data.data)) .subscribe((data)=>{
        this.store.dispatch(new UserActions.UserList(data))
    });
  }

  getUser(id:number) {
    const url = `https://reqres.in/api/users/${id}`;
    this.userList = this.http.get(url, {observe: 'body'});
    this.userList.pipe(map(data => data.data)) .subscribe((data)=>{
        this.store.dispatch(new UserActions.User(data))
    });
  }
}
