package org.divyasingh.fse.dto;

import java.util.Date;

public class TaskDTO {

	private Integer taskId;
	private String taskName;
	private Date startDate;
	private Date endDate;
	private Integer priority;
	private Integer parentId;
	
	public TaskDTO(){}
	
	public TaskDTO(Integer taskId, String taskName, Date startDate, Date endDate, Integer priority, Integer parentId,
			String parentTask, String status, String user, Integer projectId) {
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
		this.projectId = projectId;
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
	public Integer getProjectId() {
		return projectId;
	}
	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}
	private String parentTask;
	private String status;
	private String user;
	private Integer projectId;
	
	

}
