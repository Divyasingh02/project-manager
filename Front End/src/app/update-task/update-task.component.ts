import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { TaskDataService } from '../service/data/task-data.service';
import { Task } from '../model/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  id: number
  taskObject: Task

  value: number = 10
  options: Options = {
    floor: 0,
    ceil: 30
  };
  constructor(private service: TaskDataService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.taskObject = new Task(1, 1, "dummy", "dummy", 2, new Date(), new Date(), "N", "TS1", 1)
    this.id = this.route.snapshot.params['id']
    this.service.getTask(this.id).subscribe(
      response => this.taskObject = response
    )
  }

  editTask() {
    this.service.editTask(this.id, this.taskObject).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['viewtask'])
      }
    )
  }

  cancel() {
    this.router.navigate(['viewtask'])
  }
}
