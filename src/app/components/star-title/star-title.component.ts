import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-title',
  templateUrl: './star-title.component.html',
  styleUrls: ['./star-title.component.css']
})
export class StarTitleComponent {
@Input()
title:string = ''
@Input()
fontColor:string = ''
@Input()
displayLevel:string = ''
}
