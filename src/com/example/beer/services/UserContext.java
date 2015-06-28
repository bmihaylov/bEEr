package com.example.beer.services;

import java.io.Serializable;

import javax.enterprise.context.SessionScoped;

import com.example.beer.model.User;

@SessionScoped
public class UserContext implements Serializable{

	private static final long serialVersionUID = -8972402163154278712L;

	private User currentUser;
	
	public User getCurrentUser() {
		return currentUser;
	}
	
	public void setCurrentUser(User currentUser) {
		this.currentUser = currentUser;
	}
	
}
