package org.divyasingh.fse.model;

import java.util.Date;

public class ProjectDetails {
	
	private Integer projectId;
	private String projectName;
	private Integer noOfTasks;
	private Integer noOfTasksCompleted;
	private Date startDate;
	private Date endDate;
	private Integer priority;
	
	public ProjectDetails(){
		
	}
	
	public ProjectDetails(Integer projectId,String projectName, Integer noOfTasks, Integer noOfTasksCompleted, Date startDate,
			Date endDate, Integer priority) {
		super();
		this.projectId = projectId;
		this.projectName = projectName;
		this.noOfTasks = noOfTasks;
		this.noOfTasksCompleted = noOfTasksCompleted;
		this.startDate = startDate;
		this.endDate = endDate;
		this.priority = priority;
	}


	public Integer getProjectId() {
		return projectId;
	}

	public void setProjectId(Integer projectId) {
		this.projectId = projectId;
	}

	public String getProjectName() {
		return projectName;
	}
	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}
	public Integer getNoOfTasks() {
		return noOfTasks;
	}
	public void setNoOfTasks(Integer noOfTasks) {
		this.noOfTasks = noOfTasks;
	}
	public Integer getNoOfTasksCompleted() {
		return noOfTasksCompleted;
	}
	public void setNoOfTasksCompleted(Integer noOfTasksCompleted) {
		this.noOfTasksCompleted = noOfTasksCompleted;
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
	@Override
	public String toString() {
		return "ProjectDetails [projectName=" + projectName + ", noOfTasks=" + noOfTasks + ", noOfTasksCompleted="
				+ noOfTasksCompleted + ", startDate=" + startDate + ", endDate=" + endDate + ", priority=" + priority
				+ "]";
	}
	

}
