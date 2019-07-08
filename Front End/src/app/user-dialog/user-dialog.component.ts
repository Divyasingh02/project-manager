import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskDataService } from '../service/data/task-data.service';
import { User } from '../model/user';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  constructor(public dialog: MatDialog, private service: TaskDataService,
    public dialogRef: MatDialogRef<UserDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  users: User[]
  searchFilter: any = { employeeId: '' }

  ngOnInit() {
    this.service.getAllUsers().subscribe(
      response => {
        this.users = response
        console.log(this.users)
      }

    )
  }

  save() {
    this.dialogRef.close(this.users)
  }

  cancel() {
    this.dialogRef.close()
  }

}
