import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
 
  data:any=[];
  constructor(private myservice:MyServiceService) { }

  ngOnInit(): void {
    this.data = this.myservice.getResourceList();

  }

 

}
