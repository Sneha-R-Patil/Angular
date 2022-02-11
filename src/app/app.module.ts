import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ResourceListComponent } from './Components/resource-list/resource-list.component';
import { MyServiceService } from './Service/my-service.service';
import { AddResourceComponent } from './Components/add-resource/add-resource.component';
import { HomeComponent } from './Components/home/home.component';
import { WildCardRouteComponent } from './Components/wild-card-route/wild-card-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourceListComponent,
    AddResourceComponent,
    HomeComponent,
    WildCardRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
