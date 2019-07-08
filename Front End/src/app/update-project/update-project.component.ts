import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TaskDataService } from '../service/data/task-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../model/project';
import { ProjectDetails } from '../model/project-details';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent implements OnInit {

  updateProjectForm: FormGroup

  id: number
  projectob: Project
  projects: Project[]
  projectDetailList: ProjectDetails[]

  value: number = 0
  options: Options = {
    floor: 0,
    ceil: 30
  };
  isDisabled = true

  constructor(private formBuilder: FormBuilder, private service: TaskDataService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    console.log(`Id: ${this.id}`)
    this.service.getProject(this.id).subscribe(
      response => {
        console.log('response')
        console.log(response)
        this.projectob = response
      }
    )
    this.getAllProjectDetails()
    this.getAllProjects()
    console.log('this.projectob')
    console.log(this.projectob)
    this.projectob = new Project(3, "Project3", new Date(), new Date(), 15, "TS1")
    this.updateProjectForm = this.formBuilder.group(
      {
        projectId: this.projectob.projectId,
        projectName: [this.projectob.projectName, Validators.required],
        startDate: [this.projectob.startDate, Validators.required],
        endDate: [this.projectob.endDate, Validators.required],
        priority: [this.projectob.priority, Validators.required],
        manager: [this.projectob.manager, Validators.required]
      }
    )
    this.value = this.projectob.priority
  }

  triggerEvent() {
    this.isDisabled = !this.isDisabled
    return
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

  updateProject() {
    this.service.editProject(this.id, this.updateProjectForm.value).subscribe(
      response => {
        this.router.navigate(['addproject'])
      }
    )
  }
  resetProject() {
    this.updateProjectForm.reset()

  }

}
