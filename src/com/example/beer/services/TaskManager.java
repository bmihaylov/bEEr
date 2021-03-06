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

import com.example.beer.dao.ProjectDAO;
import com.example.beer.dao.TaskDAO;
import com.example.beer.dao.UserDAO;
import com.example.beer.dto.TaskDTO;
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
	public Response createTask(TaskDTO task) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null || !currentUser.isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}

		User assignee = userDAO.getUserById(task.getAssigneeId());

		if (assignee == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}

		Project project = projectDAO.findProjectById(task.getProjectId());
		if (project == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}

		String name = task.getName();
		if (!taskDAO.addTask(name, task.getDescription(), task.getFinalDate(),
				task.getEstimatedHours(), project, assignee)) {
			return Response.status(HttpURLConnection.HTTP_NOT_ACCEPTABLE)
					.build();
		}

		Task foundTask = taskDAO.findTaskByName(name);
		userDAO.addTask(foundTask, assignee);
		if (taskDAO.addToProject(project, foundTask)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
		} else {
			return Response.status(HttpURLConnection.HTTP_NOT_ACCEPTABLE)
					.build();
		}
	}

	@POST
	@Path("assign/{taskId}/{userId}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response assignUser(@PathParam("taskId") int taskId,
			@PathParam("userId") int assigneeId) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}

		if (taskDAO.assignUser(taskId, assigneeId)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
		}

		return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("status/{taskId}/{status}")
	public Response changeStatus(@PathParam("taskId") int taskId, @PathParam("status") String status) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}

		Task task = taskDAO.getTaskById(taskId);
		if (task == null) {
            return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}
		

		if (task.getAssignee().getId() != currentUser.getId() && !currentUser.isAdmin()) {
			return Response.status(HttpURLConnection.HTTP_BAD_REQUEST).build();
		}

		TaskStatus taskStatus = getStatus(status);
		if (taskStatus == null) {
			return Response.status(HttpURLConnection.HTTP_BAD_REQUEST).build();
		}

		if (taskDAO.changeStatus(task, taskStatus)) {
			return Response.status(HttpURLConnection.HTTP_OK).build();
		}

        return Response.status(HttpURLConnection.HTTP_BAD_REQUEST).build();
	}
	
	private static TaskStatus getStatus(String status) {
		for (TaskStatus ts: TaskStatus.values()) {
			if (ts.name().equals(status.toUpperCase())) {
				return ts;
			}
		}

		return null;
	}

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("{taskId}")
	public Response findTaskById(@PathParam("taskId") int taskId) {
		User currentUser = userContext.getCurrentUser();

		if (currentUser == null) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}

		Task foundTask = taskDAO.getTaskById(taskId);

		if (foundTask == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}

		return Response.ok(new TaskDTO(foundTask)).build();
	}

	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@Path("log/{taskId}/{hours}")
	public Response log(@PathParam("taskId") int taskId,
			@PathParam("hours") double hours) {
		User currentUser = userContext.getCurrentUser();
		if (currentUser == null) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}

		Task task = taskDAO.getTaskById(taskId);
		if (task == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}

		if (task.getAssignee().getId() != currentUser.getId()) {
			return Response.status(HttpURLConnection.HTTP_FORBIDDEN).build();
		}

		taskDAO.logHours(task, hours);
		return Response.status(HttpURLConnection.HTTP_OK).build();
	}
}
