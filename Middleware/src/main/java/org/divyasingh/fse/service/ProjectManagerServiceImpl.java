package org.divyasingh.fse.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.divyasingh.fse.model.Project;
import org.divyasingh.fse.model.ProjectDetails;
import org.divyasingh.fse.model.Task;
import org.divyasingh.fse.model.User;
import org.divyasingh.fse.repository.ProjectRepository;
import org.divyasingh.fse.repository.TaskRepository;
import org.divyasingh.fse.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectManagerServiceImpl implements ProjectManagerService{

	@Autowired
	UserRepository userRepository;
	
	@Autowired
	ProjectRepository projectRepository;
	
	@Autowired
	TaskRepository taskRepository;
	
	
	@Override
	public List<User> getAllUsers() {
		List<User> userList = userRepository.findAll();
		return userList;
	}


	@Override
	public User getUserById(Integer id) {
		Optional<User> optionalUser = userRepository.findById(id);
		User user = optionalUser.get();
		if(user == null)
			return null;
		return user;
	}


	@Override
	public User updateUser(Integer userId, User user) {
		Optional<User> optionalUser = userRepository.findById(userId);
		User currentUser = new User();
		if(optionalUser != null){
			currentUser = optionalUser.get();
			currentUser.setUserId(userId);
			currentUser.setFirstName(user.getFirstName());
			currentUser.setLastName(user.getLastName());
			currentUser.setEmployeeId(user.getEmployeeId());
			return userRepository.save(currentUser);
		}
		return null;
	}


	@Override
	public User deleteUser(Integer userId) {
		Optional<User> optionalUser = userRepository.findById(userId);
		User user = optionalUser.get();
		if(user == null)
			return null;
		userRepository.delete(user);
		return user;
	}


	@Override
	public User saveUser(User user) {
		userRepository.save(user);
		return user;
	}


	@Override
	public List<Project> getAllProjects() {
		List<Project> projects = projectRepository.findAll();
		return projects;
	}


	@Override
	public List<Task> getAllTasks() {
		List<Task> tasks = taskRepository.findAll();
		System.out.print("In getAllTasks");
		for(Task task: tasks) {
			System.out.print(task.getTaskId() + " " + task.getProject());
		}
		return tasks;
	}


	@Override
	public Task getTaskById(Integer id) {
		Optional<Task> opTask = taskRepository.findById(id);
		Task task = new Task();
		if(opTask != null){
			task = opTask.get();
			System.out.println("Task Data:");
			System.out.print(task.getTaskId() + " " + task.getProject());
			return task;
		}
		return null;
	}


	@Override
	public Project getProjectById(Integer id) {
		Optional<Project> opProject = projectRepository.findById(id);
		Project project = new Project();
		if(opProject != null) {
			project = opProject.get();
			return project;
		}
		return null;
	}


	@Override
	public Project saveProject(Project project) {
		projectRepository.save(project);
		return project;
	}


	@Override
	public Project updateProject(Integer id, Project project) {
		Optional<Project> opProject = projectRepository.findById(id);
		if(opProject != null) {
			Project currentProject = opProject.get();
			currentProject.setProjectId(project.getProjectId());
			currentProject.setProjectName(project.getProjectName());
			currentProject.setPriority(project.getPriority());
			currentProject.setStartDate(project.getStartDate());
			currentProject.setEndDate(project.getEndDate());
			currentProject.setManager(project.getManager());
			projectRepository.save(currentProject);
			return currentProject;
		}
		return null;
	}


	@Override
	public Task saveTask(Task task) {
		task.setStatus("N");
		taskRepository.save(task);
		return task;
	}


	@Override
	public Task updateTask(Integer id, Task task) {
		Optional<Task> opTask = taskRepository.findById(id);
		if(opTask != null) {
			Task currentTask = new Task();
			currentTask.setTaskId(task.getTaskId());
			currentTask.setTaskName(task.getTaskName());
			currentTask.setStartDate(task.getStartDate());
			currentTask.setEndDate(task.getEndDate());
			currentTask.setPriority(task.getPriority());
			currentTask.setParentId(task.getParentId());
			currentTask.setParentTask(task.getParentTask());
			currentTask.setStatus(task.getStatus());
			currentTask.setUser(task.getUser());
			currentTask.setProject(task.getProject());
			taskRepository.save(currentTask);
			return currentTask;
		}
		return null;
	}


	@Override
	public List<ProjectDetails> getAllProjectDeatils() {
		List<ProjectDetails> projectDetails = new ArrayList<>();
		List<Project> projects = projectRepository.findAll();
		Map<Integer, Project> mapProject = projects.stream().collect(Collectors.toMap(Project :: getProjectId, p -> p));
		for(Integer id : mapProject.keySet()) {
			System.out.println("Project Id: " + id);
			ProjectDetails projectDetail = new ProjectDetails();
			Project project = mapProject.get(id);
			String projectName = project.getProjectName();
			projectDetail.setProjectId(id);
			projectDetail.setProjectName(projectName);
			projectDetail.setStartDate(project.getStartDate());
			projectDetail.setEndDate(project.getEndDate());
			projectDetail.setPriority(project.getPriority());
			List<Task> tasks = project.getTasks();
			System.out.println(tasks);
			Integer taskNum = tasks.size();
			Integer completeTaskNum = 0;
			for(Task task : tasks){
				System.out.println(task.getTaskName());
				if(!task.getStatus().equalsIgnoreCase("N")) {
					completeTaskNum++;
				}
			}
			projectDetail.setNoOfTasks(taskNum);
			projectDetail.setNoOfTasksCompleted(completeTaskNum);
			
			projectDetails.add(projectDetail);
		}
		System.out.println(mapProject);
		return projectDetails;
	}


	@Override
	public Task deleteTask(Integer id) {
		Optional<Task> opTask= taskRepository.findById(id);
		if(opTask != null){
			Task task = opTask.get();
			taskRepository.delete(task);
			return task;
		}
			return null;
		
	}

}
