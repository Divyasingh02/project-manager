import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTaskComponent } from "./add-task/add-task.component";
import { ViewTaskComponent } from "./view-task/view-task.component";
import { ErrorComponent } from './error/error.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { DialogButtonComponent } from './dialog-button/dialog-button.component';

const routes: Routes = [
  { path: "addtask", component: AddTaskComponent },
  { path: "viewtask", component: ViewTaskComponent },
  { path: "edittask/:id", component: UpdateTaskComponent },
  { path: "addproject", component: AddProjectComponent },
  { path: "adduser", component: AddUserComponent },
  { path: "updateuser/:id", component: UpdateUserComponent },
  { path: "updateproject/:id", component: UpdateProjectComponent },
  { path: "buttoncheck", component: DialogButtonComponent },
  { path: "", component: AddTaskComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
