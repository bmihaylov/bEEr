package com.example.beer.services;

import java.net.HttpURLConnection;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.beer.dao.UserDAO;
import com.example.beer.model.User;
import com.example.beer.model.WebUser;

@Stateless
@Path("user")
public class UserManager {

	@Inject
	private UserDAO userDAO;

	@Inject
	private UserContext userContext;

	@POST
	@Path("login")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response login(WebUser user) {
		User foundUser = userDAO.validateCredentials(user.getUsername(),
				user.getPassword());

		if (foundUser != null) {
			userContext.setCurrentUser(foundUser);
			return Response.status(HttpURLConnection.HTTP_OK).build();
		}

		return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
	}

	@POST
	@Path("logout")
	public Response logout() {
		userContext.setCurrentUser(null);
		return Response.status(HttpURLConnection.HTTP_OK).build();
	}

	@POST
	@Path("register")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registerNewUser(User user) {
		User currentUser = userContext.getCurrentUser();
		User foundUser = userDAO.getUserByName(user.getName());

		if (currentUser.isAdmin()) {
			if (foundUser == null) {
				userDAO.addUser(user);
				return Response.status(HttpURLConnection.HTTP_OK).build();
			} else {
				return Response.status(HttpURLConnection.HTTP_CONFLICT).build();
			}
		}

		return Response.status(HttpURLConnection.HTTP_FORBIDDEN).build();
	}

}
