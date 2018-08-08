import { Component ,OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User as UserModel  }        from './models/user.model'

interface AppState {
  user: UserModel[];
}

interface ResponseInterface {
  items: Array<any>;
  item:Object;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 users: Observable<UserModel[]>;
 items:Array<any>;
 item:Object;
 constructor(private store: Store<AppState>) {
    this.users = this.store.select(state => state.user);
   }
  ngOnInit(){
    this.users.subscribe(<ResponseInterface>(data)=> {this.items = data.items; this.item = data.item })
    
  }
}
