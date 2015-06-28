package com.example.beer.model;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.*;

/**
 * Entity implementation class for Entity: User
 *
 */
@Entity
public class User implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1460111118024195065L;

	public User() {
		
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(unique=true)
	private String name;
	
	private String salt;
	private String saltPassHash;
	
	private String fullName;
	
	private String email;
	
	private boolean isAdmin;
	
	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	@OneToMany
	private Set<Task> tasks = new HashSet<Task>();
	
	private static int saltLength = 32;

	public User(String name, String username, String email) {
		this.fullName = name;
		this.name = username;
		this.email = email;
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

	public String getSalt() {
		return salt;
	}

	public void setSalt(String salt) {
		this.salt = salt;
	}

	public String getSaltPassHash() {
		return saltPassHash;
	}

	public void setSaltPassHash(String saltPassHash) {
		this.saltPassHash = saltPassHash;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Set<Task> getTasks() {
		return tasks;
	}

	public void setTasks(Set<Task> tasks) {
		this.tasks = tasks;
	}

	public static int getSaltLength() {
		return saltLength;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
   
}
