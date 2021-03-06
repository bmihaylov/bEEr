package com.example.beer.services;

import java.net.HttpURLConnection;
import java.util.Collection;

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

import com.example.beer.dao.ProjectDAO;
import com.example.beer.dto.TaskContainer;
import com.example.beer.model.Project;
import com.example.beer.model.User;

@Stateless
@Path("project")
public class ProjectManager {
	@Inject
	ProjectDAO projectDAO;

	@Inject
	UserContext userContext;

	@GET
	@javax.ws.rs.Produces(MediaType.APPLICATION_JSON)
	public Collection<Project> getAllProjects() {
		return projectDAO.getAllProjects();
	}

	@GET
	@Path("{projectId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response getTasksForProject(@PathParam("projectId") int projectId) {
		Project project = projectDAO.findProjectById(projectId);

		if (project == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}

		return Response.ok(new TaskContainer(project.getTasks())).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createProject(Project project) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null || !currentUser.isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}

		if (projectDAO.addProject(project)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
		}

		return Response.status(HttpURLConnection.HTTP_CONFLICT).build();
	}

	@GET
	@Path("user")
	@Consumes(MediaType.APPLICATION_JSON)
	public Collection<Project> getProjectsForUser(String username) {
		System.out.println("username:" + username);
		return projectDAO.getProjectsForUser(username);
	}

	@POST
	@Path("add")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response addUser(Project project, User user) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null || !currentUser.isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}

		if (projectDAO.addUser(project, user)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
		}

		return Response.status(HttpURLConnection.HTTP_CONFLICT).build();
	}

	@POST
	@Path("remove")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response removeUser(Project project, User user) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null || !currentUser.isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}

		if (projectDAO.removeUser(project, user)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
		}

		return Response.status(HttpURLConnection.HTTP_CONFLICT).build();
	}
}
