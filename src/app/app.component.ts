import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project1';

//HTTPClient example
constructor(private httpClient:HttpClient){}

ngOnInit(){
  let obs = this.httpClient.get('https://api.github.com/users/Sneha-R-Patil');
  obs.subscribe((response)=> console.log(response));
}










  
}
