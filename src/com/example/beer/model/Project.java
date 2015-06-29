package com.example.beer.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.xml.bind.annotation.XmlRootElement;


@Entity
@XmlRootElement
public class Project implements Serializable {

	private static final long serialVersionUID = 3217480333410956170L;

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(unique=true)
	private String name;
	
	@OneToMany(mappedBy="project")
	private Set<Task> tasks = new HashSet<Task>();
	@ManyToMany
	private Set<User> users = new HashSet<User>();
	

	public Project() {
		
	}

	public Project(String name, User[] users) {
		this.name = name;

		for (User user : users) {
			this.users.add(user);
		}
	}

	public boolean addTask(Task task) {
		if (!tasks.contains(task)) {
			task.setProject(this);
			tasks.add(task);
			return true;
		}
		
		return false;
	}
	
	public void removeTask(Task task) {
		task.setProject(null);
		tasks.remove(task);
	}

	public Set<Task> getTasks() {
		return tasks;
	}
	
	public boolean addUser(User user) {
		if (!users.contains(user)) {
			users.add(user);
			return true;
		}
		return false;
	}
	
	public void removeUser(User user) {
		users.remove(user);
	}

	public Set<User> getUsers() {
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
