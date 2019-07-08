import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../../model/task';
import { User } from '../../model/user';
import { Project } from 'src/app/model/project';
import { ProjectDetails } from 'src/app/model/project-details';

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(`http://localhost:8080/getAllUsers`)
  }

  getUser(id) {
    return this.http.get<User>(`http://localhost:8080/getUserById/${id}`)
  }

  editUser(id, user) {
    return this.http.put(`http://localhost:8080/editUser/${id}`, user)
  }

  deleteUser(id) {
    return this.http.delete(`http://localhost:8080/deleteUser/${id}`)
  }

  saveUser(user: User) {
    return this.http.post(`http://localhost:8080/saveUser/`, user)
  }

  getAllTasks() {
    return this.http.get<Task[]>(`http://localhost:8080/getAllTasks`)
  }

  deleteTask(id) {
    return this.http.delete(`http://localhost:8080/deleteTask/${id}`)
  }

  getTask(id) {
    return this.http.get<Task>(`http://localhost:8080/getTaskById/${id}`)
  }

  editTask(id, task) {
    return this.http.put(`http://localhost:8080/editTask/${id}`, task)
  }

  saveTask(task: Task) {
    return this.http.post(`http://localhost:8080/saveTask/`, task)
  }

  finishTask(id) {
    return this.http.delete(`http://localhost:8080/finishTask/${id}`)
  }

  getAllProjects() {
    return this.http.get<Project[]>(`http://localhost:8080/getAllProjects`)
  }

  getProject(id) {
    return this.http.get<Project>(`http://localhost:8080/getProjectById/${id}`)
  }

  editProject(id, project) {
    return this.http.put(`http://localhost:8080/editProject/${id}`, project)
  }

  deleteProject(id) {
    return this.http.delete(`http://localhost:8080/deleteProject/${id}`)
  }

  saveProject(project: Project) {
    return this.http.post(`http://localhost:8080/saveProject/`, project)
  }

  getAllProjectDetails() {
    return this.http.get<ProjectDetails[]>(`http://localhost:8080/getAllProjectDetails`)
  }

}
