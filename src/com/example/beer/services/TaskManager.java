package com.example.beer.services;

import java.net.HttpURLConnection;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.beer.dao.ProjectDAO;
import com.example.beer.dao.TaskDAO;
import com.example.beer.dao.UserDAO;
import com.example.beer.model.Project;
import com.example.beer.model.Task;
import com.example.beer.model.Task.TaskStatus;
import com.example.beer.model.User;

@Stateless
@Path("task")
public class TaskManager {
	
	@Inject
	ProjectDAO projectDAO;
	
	@Inject
	TaskDAO taskDAO;
	
	@Inject
	UserDAO userDAO;
	
	@Inject
	UserContext userContext;
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response createTask(Project project, int assigneeId, String name, String description) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null || !currentUser.isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		} 
	
		User assignee = userDAO.getUserById(assigneeId);
		
		if (assignee == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}

		if (!taskDAO.addTask(name, description, assignee)) {
			return Response.status(HttpURLConnection.HTTP_NOT_ACCEPTABLE).build();
		}
		
		Task task = taskDAO.findTaskByName(name);
		
		if (taskDAO.addToProject(project, task)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
        } else {
        	return Response.status(HttpURLConnection.HTTP_NOT_ACCEPTABLE).build();
        }
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response assignUser(User user, Task task) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		} 
		
		if (taskDAO.assignUser(task, user)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
		}
		
		return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public Response changeStatus(Task task, TaskStatus status) {
		User currentUser = userContext.getCurrentUser();
		
		if (currentUser == null) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build(); 
		}
		
		if (!task.getAssignee().equals(currentUser) && !currentUser.isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_BAD_REQUEST).build(); 
		}

		if (taskDAO.changeStatus(task, status)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
		}
		
		return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response findTaskById(int taskId) {
		User currentUser = userContext.getCurrentUser();
		
		if (currentUser == null) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build(); 
		}
		
		Task foundTask = taskDAO.getTaskById(taskId);
		
		if (foundTask == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build(); 
		}

		return Response.ok(foundTask).build();
	}
	
	
}
