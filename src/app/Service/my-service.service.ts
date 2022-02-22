import { Injectable } from '@angular/core';
import { Resource } from '../resource';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

 private resourceList:Resource[]=[

   {empID:'001',name:'sneha',gender:'female',department:'electronics',email:'snehapatil@123'},
   {empID:'002',name:'rahul',gender:'male',department:'civil',email:'rahulpatil@123'},
   {empID:'003',name:'rushi',gender:'male',department:'computer',email:'rushipatil@123'},
   {empID:'004',name:'maddy',gender:'male',department:'mechanical',email:'sushpatil@123'}

];

  constructor() {}

  getResourceList(){
    return this.resourceList;
  }
  
  newmodulecall(){
    console.log("msg from service using new module");
  }

 
}
