import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';
import { UpdateTaskComponent } from './update-task/update-task.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { ErrorComponent } from './error/error.component';
import { NavigationTaskComponent } from './navigation-task/navigation-task.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng5SliderModule } from 'ng5-slider';
import { TaskFilterPipe } from './pipe/task.pipe';
import { PriorityFilterPipe } from './pipe/priority.pipe';
import { FilterPipeModule } from 'ngx-filter-pipe';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { OrderModule } from 'ngx-order-pipe';
import { UpdateUserComponent } from './update-user/update-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { ProjectThumbnailComponent } from './project-thumbnail/project-thumbnail.component';
import { UpdateProjectComponent } from './update-project/update-project.component';
import { MatDialogModule, MatButtonModule } from '@angular/material';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogButtonComponent } from './dialog-button/dialog-button.component';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    UpdateTaskComponent,
    HeaderPageComponent,
    ErrorComponent,
    NavigationTaskComponent,
    TaskFilterPipe,
    PriorityFilterPipe,
    AddUserComponent,
    AddProjectComponent,
    UpdateUserComponent,
    ViewUserComponent,
    ProjectThumbnailComponent,
    UpdateProjectComponent,
    UserDialogComponent,
    DialogButtonComponent,
    ProjectDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng5SliderModule,
    FilterPipeModule,
    CommonModule,
    OrderModule,
    MatDialogModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  entryComponents: [UserDialogComponent, ProjectDialogComponent, TaskDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
