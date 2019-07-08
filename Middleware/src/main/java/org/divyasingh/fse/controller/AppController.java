package org.divyasingh.fse.controller;

import java.util.List;

import org.divyasingh.fse.dto.TaskDTO;
import org.divyasingh.fse.model.Project;
import org.divyasingh.fse.model.ProjectDetails;
import org.divyasingh.fse.model.Task;
import org.divyasingh.fse.model.User;
import org.divyasingh.fse.service.ProjectManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="http://localhost:4200")
@RestController
public class AppController {
	
	@Autowired
	ProjectManagerService projectManagerService;

	@GetMapping(value="/getAllUsers")
	public List<User> getAllUsers(){
		List<User> users = projectManagerService.getAllUsers();
		return users;
	}
	
	@GetMapping(value="/getUserById/{userId}")
	public User getUserById(@PathVariable Integer userId){
		User user = projectManagerService.getUserById(userId);
		return user;
	}
	
	@PutMapping(path="/editUser/{userId}")
	public ResponseEntity<User> editUser(@PathVariable Integer userId, @RequestBody User user) {
		User updatedUser = projectManagerService.updateUser(userId, user);
		return new ResponseEntity<User>(updatedUser, HttpStatus.OK);
	}
	
	@DeleteMapping(path="/deleteUser/{userId}")
	public ResponseEntity<Void> deleteUser(@PathVariable Integer userId){
		System.out.println("User Id in delete User: " + userId);
		User user = projectManagerService.deleteUser(userId);
		if(user != null)
			return ResponseEntity.noContent().build();
		return ResponseEntity.notFound().build();
	}
	
	@PostMapping(path="/saveUser")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		User saveUser = projectManagerService.saveUser(user);
		return new ResponseEntity<User>(saveUser, HttpStatus.OK);
	}
	
	@GetMapping(path="/getAllProjects")
	public List<Project> getAllProjects(){
		List<Project> projects = projectManagerService.getAllProjects();
		return projects;
	}
	
	@GetMapping(path="/getProjectById/{id}")
	public Project getProjectById(@PathVariable Integer id) {
		Project project = projectManagerService.getProjectById(id);
		return project;
	}
	
	@PostMapping(path="/saveProject")
	public ResponseEntity<Project> saveProject(@RequestBody Project project){
		Project saveProject = projectManagerService.saveProject(project);
		return new ResponseEntity<Project>(saveProject, HttpStatus.OK);
		
	}
	
	@PutMapping(path="/editProject/{id}")
	public ResponseEntity<Project> editProject(@PathVariable Integer id, @RequestBody Project project) {
		Project updatedProject = projectManagerService.updateProject(id, project);
		return new ResponseEntity<Project>(updatedProject, HttpStatus.OK);
	}
	
	@GetMapping(path="/getAllTasks")
	public List<Task> getAllTasks() {
		List<Task> tasks = projectManagerService.getAllTasks();
		return tasks;
	}
	
	@GetMapping(path="/getTaskById/{id}")
	public Task getTaskById(@PathVariable Integer id) {
		Task task = projectManagerService.getTaskById(id);
		/*TaskDTO taskDto = new TaskDTO();
		taskDto.setTaskId(task.getTaskId());
		taskDto.setTaskName(task.getTaskName());
		taskDto.setStartDate(task.getStartDate());
		taskDto.setEndDate(task.getEndDate());
		taskDto.setPriority(task.getPriority());
		taskDto.setParentId(task.getParentId());
		taskDto.setParentTask(task.getParentTask());
		taskDto.setStatus(task.getStatus());
		taskDto.setProjectId(task.getProjectId());
		taskDto.setUser(task.getUser());
		return taskDto;*/
		return task;
	}
	
	@PostMapping(path="/saveTask")
	public ResponseEntity<Task> saveTask(@RequestBody Task task) {
		Task saveTask = projectManagerService.saveTask(task);
		return new ResponseEntity<Task>(saveTask, HttpStatus.OK);
	}
	
	@PutMapping(path="/editTask/{id}")
	public ResponseEntity<Task> editTask(@PathVariable Integer id, @RequestBody Task task) {
		Task updatedTask = projectManagerService.updateTask(id, task);
		return new ResponseEntity<Task>(updatedTask, HttpStatus.OK);
	}
	
	@GetMapping(path="/getAllProjectDetails")
	public List<ProjectDetails> getAllProjectDetails(){
		List<ProjectDetails> projectDetails = projectManagerService.getAllProjectDeatils();
		return projectDetails;
	}
	
	@DeleteMapping(path="/deleteTask/{id}")
	public ResponseEntity<Void> deleteTask(@PathVariable Integer id){
		Task task = projectManagerService.deleteTask(id);
		if(task != null)
			return ResponseEntity.noContent().build();
		return ResponseEntity.notFound().build();
	}
	
}
