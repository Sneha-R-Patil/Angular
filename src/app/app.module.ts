import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { ResourceListComponent } from './Components/resource-list/resource-list.component';
import { MyServiceService } from './Service/my-service.service';
import { AddResourceComponent } from './Components/add-resource/add-resource.component';
import { HomeComponent } from './Components/home/home.component';
import { WildCardRouteComponent } from './Components/wild-card-route/wild-card-route.component';
import { MyPipePipe } from './Pipe/my-pipe.pipe';
import { NewmoduleModule } from './newmodule/newmodule.module';
import { List1Component } from './Components/list1/list1.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ResourceListComponent,
    AddResourceComponent,
    HomeComponent,
    WildCardRouteComponent,
    MyPipePipe,
    List1Component,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NewmoduleModule,
    FormsModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
