package com.example.beer.dto;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

import com.example.beer.model.Task;

@XmlRootElement
public class TaskDTO {

    private String name;
    
    private String description;
    
	@Temporal(TemporalType.DATE)
    private Date finalDate;
	
	private int estimatedHours;
	
    private int projectId;
    
    public TaskDTO() {
    	
    }
    
    public TaskDTO(Task task) {
    	name = task.getName();
    	description = task.getDescription();
    	finalDate = task.getFinalDate();
    	estimatedHours = task.getHoursEstimated();
    	projectId = task.getProject().getId();
	}

	public Date getFinalDate() {
		return finalDate;
	}

	public void setFinalDate(Date finalDate) {
		this.finalDate = finalDate;
	}

	public int getEstimatedHours() {
		return estimatedHours;
	}

	public void setEstimatedHours(int estimatedHours) {
		this.estimatedHours = estimatedHours;
	}
	private int assigneeId;

	public int getProjectId() {
		return projectId;
	}
	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}
	public int getAssigneeId() {
		return assigneeId;
	}
	public void setAssigneeId(int assigneeId) {
		this.assigneeId = assigneeId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
    
    
}
