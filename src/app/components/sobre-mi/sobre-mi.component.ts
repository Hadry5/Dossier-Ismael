import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit {
  public title: string;
  public subtitle: string;
  public web: string;
  
  constructor() {
    this.title = "Ismael Bogo Dopico";
    this.subtitle = "Director, Manager y Administrador"
    this.web = "IsmaelPortfolio.com";
  }

  ngOnInit(): void {
  }

}
