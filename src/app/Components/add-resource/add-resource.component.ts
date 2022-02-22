import { Component, Input, OnInit, Output } from '@angular/core';
import { MyServiceService } from 'src/app/Service/my-service.service';
import { EventEmitter } from '@angular/core';
import { Resource } from 'src/app/resource';
// import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {

  //@Input @uotput and eventemitter example
  @Input() resource:Resource = new Resource();
  @Output() resourceChange:EventEmitter<Resource> =new EventEmitter<Resource>(); 


  // data:any=[];
  // constructor(private myservice:MyServiceService) { }
  //Two way data binding
  // Text1:string="";
  // Text2:string="";
  // Text3:string="";
  // Text4:string="";
  // Text5:string="";

  ngOnInit(): void {
    // this.data = this.myservice.getResourceList();
  }

 //@Input @uotput and eventemitter example
 submit() {
  this.resourceChange.emit(this.resource);
}

}
