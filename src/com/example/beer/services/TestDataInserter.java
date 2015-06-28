package com.example.beer.services;

import javax.annotation.PostConstruct;
import javax.ejb.Singleton;
import javax.ejb.Startup;
import javax.inject.Inject;

import com.example.beer.dao.UserDAO;
import com.example.beer.model.User;

@Singleton
@Startup
public class TestDataInserter {

	public TestDataInserter() {
		
	}
	
	@Inject
	UserDAO userDAO;

    @PostConstruct
	public void init() {
		User user = new User("nickname", "passthelimit", "fullname", "email@example.com", true);
		userDAO.addUser(user);
	}
}
