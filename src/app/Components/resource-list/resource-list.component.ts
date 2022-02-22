import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resource } from 'src/app/resource';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css']
})
export class ResourceListComponent implements OnInit {
 
 
  constructor(private myservice:MyServiceService, private router:Router) { }

//Child Route
  list1(){
    this.router.navigate(['showresourcelist/list1']);
  }

  selectedResource:Resource = new Resource();
  resourceData : Resource[]=[];
  ngOnInit(): void {
    this.resourceData = this.myservice.getResourceList();
}

submit(resource:Resource) {
  console.log(resource)
  var cust=this.resourceData.find(e => e.empID==resource.empID)
  if(cust==undefined){
    alert("New Saved:"+resource.empID)
    this.resourceData.push(resource);
  }else{
    Object.assign(cust,resource)
    alert("Updated:"+resource.empID);
  }

  
}
 
 

}
