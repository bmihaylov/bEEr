package com.example.beer.services;

import java.net.HttpURLConnection;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.beer.dao.UserDAO;
import com.example.beer.dto.TaskContainer;
import com.example.beer.dto.UserDTO;
import com.example.beer.dto.UserDTOContainer;
import com.example.beer.model.User;
import com.example.beer.model.WebUser;

@Stateless
@Path("user")
public class UserManager {

	@Inject
	private UserDAO userDAO;

	@Inject
	private UserContext userContext;

	@GET
	@Path("{userId}")
	public Response getUserById(@PathParam("userId") int userId) {
		User user = userDAO.getUserById(userId);
		
		if (user == null) {
            return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}
		
		return Response.ok(new UserDTO(user)).build();
	}

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

		if (currentUser != null && currentUser.isAdmin()) {
			if (foundUser == null) {
				userDAO.addUser(user);
				return Response.status(HttpURLConnection.HTTP_OK).build();
			} else {
				return Response.status(HttpURLConnection.HTTP_CONFLICT).build();
			}
		}

		return Response.status(HttpURLConnection.HTTP_FORBIDDEN).build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response getAllUsers() {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null || !currentUser.isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_FORBIDDEN).build();
		}

		UserDTOContainer users = new UserDTOContainer(userDAO.getAllUsers());
		return Response.ok(users).build();
	}
	
	@GET
	@Path("name/{username}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getUserByName(@PathParam("username") String username) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null || !currentUser.isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_FORBIDDEN).build();
		}

		User user = userDAO.getUserByName(username);
		
		if (user == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}
		
		
		return Response.ok(new UserDTO(user)).build();
	}
	
	@GET
	@Path("tasks/{userId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getTasksForUser(@PathParam("userId") int userId) {
		User user = userDAO.getUserById(userId);
		if (user == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}

		User currentUser = userContext.getCurrentUser();
		if (currentUser == null || !currentUser.isAdmin() && !currentUser.equals(user)) {
			return Response.status(HttpURLConnection.HTTP_FORBIDDEN).build();
		}
		
		TaskContainer tasks = new TaskContainer(user.getTasks());
		System.out.println(user.getTasks().size());
		return Response.ok(tasks).build();
	}
	
	@GET
	@Path("isLogged")
	public Response isLogged() {
		if (userContext.getCurrentUser() != null) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
		}
		
        return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
	}
	
}
