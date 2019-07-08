import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../service/data/task-data.service';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number
  userOb: User
  users: User[]

  updateUserForm: FormGroup

  searchFilter: any = { firstName: '' }

  constructor(private service: TaskDataService, private route: ActivatedRoute,
    private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getAllUsers()
    this.userOb = new User(4, "Tom", "Hank", "TH1")
    console.log(`Users list: ${this.users}`)
    this.id = this.route.snapshot.params['id']
    console.log(`Id to edit: ${this.id}`)
    this.service.getUser(this.id).subscribe(
      response => {
        this.userOb = response
      }
    )
    console.log(`User with id ${this.id}`)
    console.log(this.userOb)
    this.updateUserForm = this.formBuilder.group({
      userId: this.userOb.userId,
      firstName: [this.userOb.firstName, Validators.required],
      lastName: [this.userOb.lastName, Validators.required],
      employeeId: [this.userOb.employeeId, Validators.required]
    });
  }

  getAllUsers() {
    console.log('In getAllUsers()')
    this.service.getAllUsers().subscribe(
      response => {
        console.log(response)
        this.users = response

      }
    )
  }

  updateUser() {
    console.log(this.userOb)
    this.service.editUser(this.userOb.userId, this.updateUserForm.value).subscribe(
      response => {
        this.router.navigate(['adduser'])
      }
    )
  }
  editUser() {

  }

}
