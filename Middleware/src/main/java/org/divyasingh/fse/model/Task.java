package org.divyasingh.fse.model;

import java.io.Serializable;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="task")
public class Task implements Serializable {

	@Id
	@Column(name="task_id")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer taskId;
	
	@Column(name="taskname")
	private String taskName;
	
	@Column(name="startdate")
	private Date startDate;
	
	@Column(name="enddate")
	private Date endDate;
	
	@Column(name="priority")
	private Integer priority;
	
	@Column(name="parent_id")
	private Integer parentId;
	
	@Column(name="parent_task")
	private String parentTask;
	
	@Column(name="status")
	private String status;
	
	@Column(name="user")
	private String user;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="project_id")
	@JsonBackReference
	private Project project;

	public Task(){
		
	}
	
	public Task(Integer taskId, String taskName, Date startDate, Date endDate, Integer priority, Integer parentId,
			String parentTask, String status, String user, Project project) {
		super();
		this.taskId = taskId;
		this.taskName = taskName;
		this.startDate = startDate;
		this.endDate = endDate;
		this.priority = priority;
		this.parentId = parentId;
		this.parentTask = parentTask;
		this.status = status;
		this.user = user;
		this.project = project;
	}

	public Integer getTaskId() {
		return taskId;
	}

	public void setTaskId(Integer taskId) {
		this.taskId = taskId;
	}

	public String getTaskName() {
		return taskName;
	}

	public void setTaskName(String taskName) {
		this.taskName = taskName;
	}

	public Date getStartDate() {
		return startDate;
	}

	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	public Date getEndDate() {
		return endDate;
	}

	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	public Integer getPriority() {
		return priority;
	}

	public void setPriority(Integer priority) {
		this.priority = priority;
	}

	public Integer getParentId() {
		return parentId;
	}

	public void setParentId(Integer parentId) {
		this.parentId = parentId;
	}

	public String getParentTask() {
		return parentTask;
	}

	public void setParentTask(String parentTask) {
		this.parentTask = parentTask;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}
	
	/*public Integer getProjectId(){
		return project.getProjectId();
	}*/

	public Project getProject() {
		return project;
	}

	public void setProject(Project project) {
		this.project = project;
	}	
	
}
