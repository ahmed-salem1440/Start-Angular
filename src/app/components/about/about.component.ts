import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  starTitle:string = 'About'
  starColor:string = 'white'
  displayLevel:string = 'display-3'

}
