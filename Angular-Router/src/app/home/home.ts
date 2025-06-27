import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  //! Programmatic navigation
  // constructor(private router:Router){
  // }
  //   navigateTo(){
  //       this.router.navigate(['/about'])
  //   }
  //! Route Parameters 
  //* A Router Parameter (also called a route parameter or URL parameter) is a dynamic value embedded in the route URL. It allows Angular to load different data based on the value in the URL.
  id!:string|null;
  constructor(private route: ActivatedRoute){
  }
  ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get("id")
    }  
}
