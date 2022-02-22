import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddResource1Component } from './add-resource1/add-resource1.component';




@NgModule({
  declarations: [
    AddResource1Component
  ],
  exports: [AddResource1Component],
  imports: [
    CommonModule
  ]
})
export class NewmoduleModule { }
