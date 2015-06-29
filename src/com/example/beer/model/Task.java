package com.example.beer.model;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "task", uniqueConstraints = @UniqueConstraint(columnNames = {
		"name", "project_id" }))
public class Task {

	public enum TaskStatus {
		BEGIN, INPROGRESS, FINISHED
	}

	public Task() {
		
	}

	public Task(String name, String description, Date finalDate,
			double estimatedHours, Project project, User assignee) {
		super();
		this.name = name;
		this.description = description;
		this.finalDate = finalDate;
		this.estimatedHours = estimatedHours;
		status = TaskStatus.BEGIN;
		this.project = project;
		this.assignee = assignee;
	}

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
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

	@OneToMany
	Set<Comment> comments = new HashSet<Comment>();
	
	public User getAssignee() {
		return assignee;
	}

	void setId(int id) {
		this.id = id;
	}

	public int getId() {
		return id;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getDescription() {
		return description;
	}

	public void setFinalData(Date finalDate) {
		this.finalDate = finalDate;
	}

	public Date getFinalDate() {
		return finalDate;
	}

	public void setHoursWorked(double hours) {
		this.workedHours = hours;
	}

	public double getHoursWorked() {
		return workedHours;
	}

	public void setHoursEstimated(double hours) {
		this.estimatedHours = hours;
	}

	public double getHoursEstimated() {
		return estimatedHours;
	}

	public void setTaskStatus(TaskStatus status) {
		this.status = status;
	}

	public TaskStatus getTaskStatus() {
		return status;
	}

	public void setProject(Project project) {
		this.project = project;
	}

	public Project getProject() {
		return project;
	}

	public void assignUser(User user) {
		assignee = user;
	}
	
	public Set<Comment> getComments() {
		return comments;
	}
	
	public void addComment(Comment comment) {
		comments.add(comment);
	}
};
