package com.example.beer.dao;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.example.beer.model.Comment;
import com.example.beer.model.Task;
import com.example.beer.model.User;

@Singleton
public class CommentDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	public boolean addComment(Task task, Comment comment) {
		Comment foundComment = findComment(task, 
				comment.getAuthor(), comment.getTitle());
		
		if (foundComment == null) {
			task.addComment(comment);
			em.persist(task);
			em.persist(comment);
			return true;
		} else {
			return false;
		}
	}

	private Comment findComment(Task task, User author, String title) {
		String idQueryText = "SELECT c FROM Comment c WHERE c.title  = :title AND "
														+ "	c.author = :author AND "
														+ " c.task = :task";
		TypedQuery<Comment> idQuery = em.createQuery(idQueryText, Comment.class);
		idQuery.setParameter("title", title);
		idQuery.setParameter("author", author.getName());
		idQuery.setParameter("task", task);
		
		try {
			return idQuery.getSingleResult();
		} catch (NoResultException e) {
			return null;
		}
	}
	
}
