import { ActivatedRoute } from '@angular/router';
import { routes } from './../app.routes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post implements OnInit {
      id!:string|null;
      constructor(private route: ActivatedRoute){}
      ngOnInit(): void {
        this.route.paramMap.subscribe(params=>{
          this.id=params.get("id")
        })
      }
}
