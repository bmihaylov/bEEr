package com.example.beer.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;


@Entity
public class Project implements Serializable {

	private static final long serialVersionUID = 3217480333410956170L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	private String name;
	
	@OneToMany
	private Set<Task> tasks = new HashSet<Task>();
	@ManyToMany
	private Set<User> users = new HashSet<User>();
	

	public Project(String name, User[] users) {
		this.name = name;

		for (User user : users) {
			this.users.add(user);
		}
	}

	boolean addTask(Task task) {
		if (!tasks.contains(task)) {
			task.setProject(this);
			tasks.add(task);
			return true;
		}
		
		return false;
	}
	
	void removeTask(Task task) {
		task.setProject(null);
		tasks.remove(task);
	}

	Set<Task> getTasks() {
		return tasks;
	}
	
	boolean addUser(User user) {
		if (!users.contains(user)) {
			users.add(user);
			return true;
		}
		return false;
	}
	
	void removeUser(User user) {
		users.remove(user);
	}

	Set<User> getUsers() {
		return users;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
