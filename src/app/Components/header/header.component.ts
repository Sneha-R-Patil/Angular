import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  headerTitle="Resource Management ";

  home(){
    this.router.navigate(['/home']);
  }

  showResourceList(){
    this.router.navigate(['/showresourcelist']);
  }
  addResourceList(){
    this.router.navigate(['/addresourcelist']);
  }
 
  // list1(){
  //   this.router.navigate(['/list1']);
  // }

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
