import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//pipe example
name:string="rahulpatil";
date: Date = new Date();  

  constructor() { }

  ngOnInit(): void {
  }

}
