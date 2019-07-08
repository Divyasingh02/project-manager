import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { TaskDataService } from '../service/data/task-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  searchFilter: any = { firstName: '' }
  order: string = 'firstName'
  orderByfirstname: boolean = false
  orderBylastname: boolean = false
  orderByemployeeid: boolean = false

  users: User[]

  constructor(private service: TaskDataService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers()
  }

  getAllUsers() {
    this.service.getAllUsers().subscribe(
      response => {
        this.users = response
        console.log(this.users)
      }
    )
  }

  editUser(id) {
    console.log(id)
    this.router.navigate(['updateuser', id])
  }

}
