package com.example.beer.model;

import com.example.beer.model.Project;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "task", uniqueConstraints = @UniqueConstraint(columnNames = {
		"name", "project" }))
public class Task {

	public enum TaskStatus {
		BEGIN, INPROGRESS, FINISHED
	}

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	String name;
	String description;

	@Temporal(TemporalType.DATE)
	Date finalDate;

	double estimatedHours;
	double workedHours;

	@Enumerated(EnumType.STRING)
	TaskStatus status;

	@ManyToOne
	Project project;
	
	@ManyToOne
	User assignee;

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
