package com.example.beer.dto;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

import com.example.beer.model.User;

@XmlRootElement
public class UserDTO implements Serializable {

	private static final long serialVersionUID = 2011610809553530791L;

	private int id;
	
	public UserDTO() {
		
	}

	public UserDTO(User user) {
		this.id = user.getId();
		this.name = user.getName();
		this.fullName = user.getFullName();
		this.email = user.getEmail();
		this.isAdmin = user.isAdmin();
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

	public boolean isAdmin() {
		return isAdmin;
	}

	public void setAdmin(boolean isAdmin) {
		this.isAdmin = isAdmin;
	}

	private String name;
	
	private String fullName;
	
	private String email;
	
	private boolean isAdmin;
}
