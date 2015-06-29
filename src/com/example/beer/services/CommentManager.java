package com.example.beer.services;

import java.net.HttpURLConnection;
import java.util.Date;

import javax.ejb.Stateless;
import javax.inject.Inject;
import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.beer.dao.TaskDAO;
import com.example.beer.model.Comment;
import com.example.beer.model.Task;
import com.example.beer.model.User;

@Stateless
@Path("comment")
public class CommentManager {
	
	@Inject
	UserContext userContext;
	
	@Inject
	private TaskDAO taskDAO;

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("add/{taskId}")
	public Response addComment(@PathParam("taskId") int taskId, Comment comment) {
		User currentUser = userContext.getCurrentUser();
		
		if (currentUser == null) {
			return Response.status(HttpURLConnection.HTTP_UNAUTHORIZED).build();
		}
		
		Task task = taskDAO.getTaskById(taskId);
		if (task == null) {
			return Response.status(HttpURLConnection.HTTP_NOT_FOUND).build();
		}

		comment.setAuthor(currentUser);
		comment.setDate(new Date());
		taskDAO.addComment(task, comment);

		return Response.status(HttpURLConnection.HTTP_OK).build(); 
	}
		
}
