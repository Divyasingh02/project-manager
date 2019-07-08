import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TaskDataService } from '../service/data/task-data.service';
import { Task } from '../model/task';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent implements OnInit {

  tasks: Task[]
  searchFilter: any = { parentTask: '' }

  constructor(public dialog: MatDialog, private service: TaskDataService,
    public dialogRef: MatDialogRef<TaskDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.service.getAllTasks().subscribe(
      response => {
        this.tasks = response
      }
    )
  }

  save() {
    this.dialogRef.close()
  }

  cancel() {
    this.dialogRef.close()
  }

}
