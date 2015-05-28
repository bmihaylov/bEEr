package com.example.beer;

import com.example.beer.model.Project;

import java.sql.Date;

@Entity
@Table(name="task")
public class Task {
	
	public enum TaskStatus {BEGIN, INPROGRESS, FINISHED}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	String name;
	String description;
	
	@Temporal(TemporalType.DATE)
	Date finalDate;	
	
	double estimatedHours;
	double workedHours;

	@Enumerated(STRING)
	TaskStatus status;
	
	@OneToOne
	Project project;
	
	void setId(int id) {
		this.id = id;
	}
	
	int getId() {
		return id;
	}
	
	void setName(String name) {
		this.name = name;
	}
	
	String getName() {
		return name;
	}
	
	void setDescription(String description) {
		this.description = description;
	}
	
	String getDescription() {
		return description;
	}
	
	void setFinalData(Date finalDate) {
		this.finalDate = finalDate;
	}
	
	Date getFinalDate() {
		return finalDate;
	}
	
	void setHoursWorked(double hours) {
		this.workedHours = hours;
	}
	
	double getHoursWorked() {
		return workedHours;
	}
	
	void setHoursEstimated(double hours) {
		this.estimatedHours = hours;
	}
	
	double getHoursEstimated() {
		return estimatedHours;
	}
	
	void setTaskStatus(TaskStatus status) {
		this.status = status;
	}
	
	TaskStatus getTaskStatus() {
		return status;
	}
	
	void setProject(Project project) {
		this.project = project;
	}
	
	Project getProject() {
		return project;
	}
};
