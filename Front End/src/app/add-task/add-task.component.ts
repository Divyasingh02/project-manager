import { Component, OnInit } from '@angular/core';
import { TaskDataService } from '../service/data/task-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from '../model/task';
import { Options } from 'ng5-slider';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectDialogComponent } from '../project-dialog/project-dialog.component';
import { MatDialog } from '@angular/material';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  taskObject: Task
  value: number = 10
  options: Options = {
    floor: 0,
    ceil: 30
  };

  addForm: FormGroup

  constructor(private service: TaskDataService, private router: Router,
    private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    //this.taskObject = new Task(1, 1, "dummy", "dummy", 2, new Date(), new Date(), "N")
    this.addForm = this.formBuilder.group({
      taskId: [],
      projectId: ['', Validators.required],
      taskName: ['', Validators.required],
      parentTask: ['', Validators.required],
      priority: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      user: ['', Validators.required]
    });
  }

  resetTask() {
    this.addForm.reset();
  }

  addTask() {
    console.log('In Add-task')
    console.log(this.taskObject)
    this.service.saveTask(this.addForm.value).subscribe(
      response => {
        console.log("response")
        console.log(response)
        this.router.navigate(['viewtask'])
      }
    )
  }

  openDialogProject(): void {
    let dialogRef = this.dialog.open(ProjectDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

  openDialogTask(): void {
    let dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

  openDialogUser(): void {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

}
