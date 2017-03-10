import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})

export class AppComponent {
myName='aniket';
myDate=new Date (2017,2,10);
myValue="Hello How Are You";
values=['Aniket','Bread','yahoo','google','Zerox'];
asynvalue= new Promise((resolve,reject)=>{
setTimeout(()=> resolve('Angular Pipes '),5000);
});
}
