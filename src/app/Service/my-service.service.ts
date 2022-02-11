import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

 private resourceList:any=[

   {empID:'001',Name:'sneha',depatment:'electronics',email:'snehapatil@123'},
   {empID:'002',Name:'rahul',depatment:'civil',email:'rahulpatil@123'},
   {empID:'003',Name:'rushi',depatment:'computer',email:'rushipatil@123'},
   {empID:'004',Name:'maddy',depatment:'mechanical',email:'sushpatil@123'}

];

  constructor() {}

  getResourceList(){
    return this.resourceList;
  }
}
