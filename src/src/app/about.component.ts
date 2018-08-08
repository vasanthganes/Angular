import { Component, OnInit } from '@angular/core';


import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from './models/user.model';
import * as UserActions from './actions/user.action';


interface AboutState {
  user: User;
}
interface ResponseInterface {
  items: Array<any>;
  item:Object;
}

@Component({
  selector: 'about',
  template: `
    <h1>About</h1>
     <p>Users List from About component</p>
    {{ items | json }}

    <p>User Data from About component</p>
    {{ item | json }}
  `,
})
export class AboutComponent implements OnInit{

  user: Observable<User>;
  items:Array<any>;
  item:Object;
  constructor(private store: Store<AboutState>) {
    this.user = this.store.select(state => state.user);
   }
  ngOnInit(){
    this.user.subscribe(<ResponseInterface>(data)=> {
      this.items = data.items; 
      this.item = data.item; 
      });
  }

}
