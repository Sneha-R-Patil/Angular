import { Component, OnInit } from '@angular/core';
// import { MyServiceService } from 'src/app/Service/my-service.service';

@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.css']
})
export class AddResourceComponent implements OnInit {
  // data:any=[];
  // constructor(private myservice:MyServiceService) { }

  ngOnInit(): void {
    // this.data = this.myservice.getResourceList();
  }

}
