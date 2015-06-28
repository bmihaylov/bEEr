package com.example.beer.dao;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.example.beer.model.Task;

@Singleton
public class TaskDAO {
	@PersistenceContext
	private EntityManager em;
	
	public Task getTaskById(int id) {
		String idQueryText = "SELECT t FROM Task t WHERE t.id = :id";
		TypedQuery<Task> taskQuery = em.createQuery(idQueryText, Task.class);
		taskQuery.setParameter("id", id);

		Task task = null;
		try {
            task = taskQuery.getSingleResult();
		} catch (Exception e) {
			return null;
		}
		return task;
	}
}
