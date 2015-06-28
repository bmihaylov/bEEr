package com.example.beer.services;

import java.net.HttpURLConnection;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.beer.dao.ProjectDAO;
import com.example.beer.model.Project;

@Stateless
@Path("project")
public class ProjectManager {
	@Inject
	ProjectDAO projectDAO;
	
	@Inject
	UserContext userContext;
	
	@GET
	@Path("projectId")
	public Response getTasksForProject(@PathParam("projectId") int projectId) {
		Project project = projectDAO.findProjectById(projectId);
		
		if (project == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}
		
		return Response.ok(project.getTasks(), MediaType.APPLICATION_JSON).build();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createProject(Project project) {
		if (!userContext.getCurrentUser().isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}
		
        if (projectDAO.addProject(project)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
        }
        
        return Response.status(HttpURLConnection.HTTP_CONFLICT).build();
	}
}
