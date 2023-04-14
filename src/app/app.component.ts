import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'Assignment1';
  @ViewChild(NavbarComponent)
  navComp!:NavbarComponent;
  navStyle:object={}
  ngAfterViewInit(): void {
    this.navStyle = {
      marginTop: `${(<HTMLElement>this.navComp.navRef.nativeElement).clientHeight}px`,
      minHeight:`calc(100vh - ${(<HTMLElement>this.navComp.navRef.nativeElement).clientHeight}px`
    }
    
  }


  
  
  
}
