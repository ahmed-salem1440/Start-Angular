import { Component } from '@angular/core';

interface Portfolio{
  title:string;
  imgPath:string;
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  starTitle:string = 'PORTFOLIO'
  starColor:string = 'black'
  displayLevel:string = 'display-3'
  isNotShow:boolean = true
  imgSrc:string = ''
  imgTitle:string = ''

  portfolios:Portfolio[] = [
    {title:'LOG CABIN',imgPath:`assets/images/portfolio (1).png`},
    {title:'TASTY CAKE',imgPath:`assets/images/portfolio (2).png`},
    {title:'CIRCUS TENT',imgPath:`assets/images/portfolio (3).png`},
    {title:'CONTROLLER',imgPath:`assets/images/portfolio (4).png`},
    {title:'LOCKED SAFE',imgPath:`assets/images/portfolio (5).png`},
    {title:'SUBMARINE',imgPath:`assets/images/portfolio (6).png`}
  ]

  detailsStarTitle:string = ''
  detailsStarColor:string = 'black'
  detaisDisplayLevel:string = 'display-3'



}
