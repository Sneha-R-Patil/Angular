import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddResourceComponent } from './Components/add-resource/add-resource.component';

import { HomeComponent } from './Components/home/home.component';
import { List1Component } from './Components/list1/list1.component';
import { ResourceListComponent } from './Components/resource-list/resource-list.component';
import { WildCardRouteComponent } from './Components/wild-card-route/wild-card-route.component';

const routes: Routes = [
  {path:'' , redirectTo:'/home',pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'showresourcelist' ,component:ResourceListComponent,
  children:[
    {path:'list1' ,component:List1Component}
]
},
 
  {path:'addresourcelist' , component:AddResourceComponent},
  {path:'**' , component:WildCardRouteComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

