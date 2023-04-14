import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  starTitle:string = 'CONTACT ME'
  starColor:string = 'black'
  displayLevel:string = 'display-3'
  userNameValue:string = ''
  userEmailValue:string = ''
  userPhoneValue:string = ''
  userMsgValue:string = ''
}
