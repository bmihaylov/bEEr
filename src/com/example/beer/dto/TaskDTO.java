package com.example.beer.dto;

import java.util.Date;

import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.xml.bind.annotation.XmlRootElement;

import com.example.beer.model.Task;

@XmlRootElement
public class TaskDTO {

	private int id;
	
	private String name;
    
    private String description;
    
	@Temporal(TemporalType.DATE)
    private Date finalDate;
	
	private double workedHours;

	private double estimatedHours;
	
    private int projectId;
    
	private int assigneeId;

    public TaskDTO() {
    	
    }
    
    public TaskDTO(Task task) {
    	id = task.getId();
    	name = task.getName();
    	description = task.getDescription();
    	finalDate = task.getFinalDate();
    	workedHours = task.getHoursWorked();
    	estimatedHours = task.getHoursEstimated();
    	projectId = task.getProject().getId();
	}

    public double getWorkedHours() {
		return workedHours;
	}

	public void setWorkedHours(double workedHours) {
		this.workedHours = workedHours;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}
	public Date getFinalDate() {
		return finalDate;
	}

	public void setFinalDate(Date finalDate) {
		this.finalDate = finalDate;
	}

	public double getEstimatedHours() {
		return estimatedHours;
	}

	public void setEstimatedHours(double estimatedHours) {
		this.estimatedHours = estimatedHours;
	}

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
