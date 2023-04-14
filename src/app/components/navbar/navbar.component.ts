import { Component, ViewChild, ElementRef, AfterContentInit, AfterViewInit } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit{
  
  @ViewChild('navRef')
  navRef!: ElementRef
  ngAfterViewInit(): void {
    console.log((<HTMLElement>this.navRef.nativeElement).clientHeight);
    
  }
  
  
  scrollAnimation(navbar:HTMLElement){
    window.scrollY > 30 ?
    navbar.classList.remove("p-4")
    :navbar.classList.add("p-4")
  }

}
