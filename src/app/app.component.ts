import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userDetail: any = {};
  title = 'app';
  
  getUserDetails(data){
    if(!data) return;
    
    this.userDetail = data;
  }
}
