package org.divyasingh.fse.service;

import java.util.List;

import org.divyasingh.fse.dto.TaskDTO;
import org.divyasingh.fse.model.Project;
import org.divyasingh.fse.model.ProjectDetails;
import org.divyasingh.fse.model.Task;
import org.divyasingh.fse.model.User;

public interface ProjectManagerService {

	List<User> getAllUsers();
	
	User getUserById(Integer id);

	User updateUser(Integer userId, User user);

	User deleteUser(Integer userId);

	User saveUser(User user);
	
	List<Project> getAllProjects();
	
	List<Task> getAllTasks();
	
	Task getTaskById(Integer id);

	Project getProjectById(Integer id);

	Project saveProject(Project project);

	Project updateProject(Integer id, Project project);

	Task saveTask(Task task);

	Task updateTask(Integer id, Task task);

	List<ProjectDetails> getAllProjectDeatils();

	Task deleteTask(Integer id);
}
