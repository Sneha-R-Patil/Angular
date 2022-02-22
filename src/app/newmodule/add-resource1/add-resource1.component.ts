import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-add-resource1',
  templateUrl: './add-resource1.component.html',
  styleUrls: ['./add-resource1.component.css']
})
export class AddResource1Component implements OnInit {

  constructor(private myservice:MyServiceService) { }
  
  msg:any="";

  ngOnInit(): void {
    this.msg= this.myservice.newmodulecall();
  }

}
