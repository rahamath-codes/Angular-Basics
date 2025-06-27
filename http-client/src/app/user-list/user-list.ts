import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Component({
  selector: 'app-user-list',
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList implements OnInit {
  userForm = new FormGroup({
    name : new FormControl(""),
    email : new FormControl("")
  })

  user:User[]=[]
  constructor(private http:HttpClient){

  }
  ngOnInit(){
      this.getUsers().subscribe((response)=>{
        console.log('response',response)//Subcribe method will return a object but we can change it in the request itself
        this.user=response;
      })
  }
  getUsers(){
          return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");

  }
  onSubmit(){
    console.log(this.userForm.value)
    this.addUser().subscribe((response)=>{
      this.user.push(response)
    })
  }
  addUser(){
   return this.http.post<User>("https://jsonplaceholder.typicode.com/users",{
      name:this.userForm.controls.name.value,
      email:this.userForm.controls.email.value
    })
  }
}
// PUT	Replace full object	http.put<User>(url, fullData)
// PATCH	Update specific fields	http.patch<User>(url, fields)
// DELETE Remove user	http.delete(url)


class User{
  name!:string;
  id!:number;
  username!:string;
  phone!:number;
  email!:string;
  website!:string;
  address!: {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  }
}

}