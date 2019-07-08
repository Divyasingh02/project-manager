import { Component, OnInit, Inject } from '@angular/core';
import { Project } from '../model/project';
import { TaskDataService } from '../service/data/task-data.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-project-dialog',
  templateUrl: './project-dialog.component.html',
  styleUrls: ['./project-dialog.component.css']
})
export class ProjectDialogComponent implements OnInit {

  projects: Project[]
  searchFilter: any = { projectName: '' }
  constructor(public dialog: MatDialog, private service: TaskDataService,
    public dialogRef: MatDialogRef<ProjectDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.service.getAllProjects().subscribe(
      response => {
        this.projects = response
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
