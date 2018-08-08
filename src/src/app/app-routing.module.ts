import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';

@NgModule({
  
  imports: [
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: '**', redirectTo: 'home' }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],

})
export class AppRoutingModule {}


