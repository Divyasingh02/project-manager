import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../model/user';
import { TaskDataService } from '../service/data/task-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  addUserForm: FormGroup
  users: User[]

  searchFilter: any = { firstName: '' }
  order: string

  constructor(private formBuilder: FormBuilder, private service: TaskDataService, private router: Router) { }

  ngOnInit() {
    this.getAllUsers()
    this.addUserForm = this.formBuilder.group({
      userId: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      employeeId: ['', Validators.required]
    });
  }

  addUser() {
    console.log('In Add-User')
    console.log(this.addUserForm.value)
    this.service.saveUser(this.addUserForm.value).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['adduser'])
      }
    )
  }

  resetUser() {
    this.addUserForm.reset();
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
    console.log(`Edit User with id ${id}`)
    this.router.navigate(['updateuser', id])
  }

  deleteUser(id) {
    console.log(`Delete user with id ${id}`)
    this.service.deleteUser(id).subscribe(
      response => {
        this.getAllUsers()
      }
    )
  }

  sortByFirstName() {
    this.order = 'firstName'
  }

  sortByLastName() {
    this.order = 'lastName'
  }

  sortByID() {
    this.order = 'employeeId'
  }
}

