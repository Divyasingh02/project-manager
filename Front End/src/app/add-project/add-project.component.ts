import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskDataService } from '../service/data/task-data.service';
import { Router } from '@angular/router';
import { Project } from '../model/project';
import { ProjectDetails } from '../model/project-details';
import { MatDialog } from '@angular/material';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';


@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  value: number = 0
  options: Options = {
    floor: 0,
    ceil: 30
  };
  isDisabled = true

  order: string

  stDate: Date = new Date()
  edDate: Date = new Date()

  projects: Project[]
  projectDetailList: ProjectDetails[]
  searchFilter: any = { projectName: '' }

  addProjectForm: FormGroup

  constructor(private formBuilder: FormBuilder, private service: TaskDataService,
    private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.getAllProjects()
    this.getAllProjectDetails()
    this.addProjectForm = this.formBuilder.group(
      {
        projectId: [],
        projectName: ['', Validators.required],
        startDate: [this.stDate, Validators.required],
        endDate: [this.edDate, Validators.required],
        priority: [0, Validators.required],
        manager: ['', Validators.required]
      }
    )
  }

  triggerEvent() {
    this.isDisabled = !this.isDisabled
    return
  }

  addProject() {
    console.log("In addProject")
    this.service.saveProject(this.addProjectForm.value).subscribe(
      response => {
        console.log('response')
        console.log(response)
        this.router.navigate(['addproject'])
      }
    )
  }

  resetProject() {
    this.addProjectForm.reset();
  }

  getAllProjects() {
    this.service.getAllProjects().subscribe(
      response => {
        this.projects = response
      }
    )
  }

  getAllProjectDetails() {
    this.service.getAllProjectDetails().subscribe(
      response => {
        this.projectDetailList = response
      }
    )
  }

  updateProject(id) {
    console.log(id)
    this.router.navigate(['updateproject', id])
  }

  sortByPriority() {
    this.order = 'priority'
  }

  sortByStartDate() {
    this.order = 'startDate'
  }

  sortByEndDate() {
    this.order = 'endDate'
  }

  sortByCompleted() {
    this.order = 'noOfTasksCompleted'
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(UserDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

}
