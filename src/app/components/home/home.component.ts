import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  starTitle:string = 'start angular'
  starColor:string = 'white'
  displayLevel:string = 'display-1'

}
