import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { AddResourceComponent } from '../add-resource/add-resource.component';

@Component({
  selector: 'app-list1',
  templateUrl: './list1.component.html',
  styleUrls: ['./list1.component.css']
})
export class List1Component implements OnInit {
 

  userName:string="";
  response:any;
  constructor(private httpClient:HttpClient) {
   
   }

  ngOnInit(): void {
  }

  search(){
    this.httpClient.get('https://api.github.com/users/' + this.userName)
    .subscribe((response)=> {
         this.response = response;
    })
  }

}
