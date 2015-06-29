package com.example.beer.dao;

import javax.ejb.Singleton;
import javax.inject.Inject;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.example.beer.model.Project;
import com.example.beer.model.Task;
import com.example.beer.model.Task.TaskStatus;
import com.example.beer.model.User;

@Singleton
public class TaskDAO {
	@PersistenceContext
	private EntityManager em;
	
	@Inject
	private ProjectDAO projectDAO;

	@Inject
	private UserDAO userDAO;
	
	public boolean addTask(String name, String description, User user) {
		Task foundTask = findTaskByName(name);
		
		if (foundTask == null) {
			em.persist(foundTask);
			return true;
		}
		
		return false;
	}
	
	public Task findTaskByName(String name) {
		String idQueryText = "SELECT t FROM Task t WHERE t.name = :name";
		TypedQuery<Task> taskQuery = em.createQuery(idQueryText, Task.class);
		taskQuery.setParameter("name", name);
		
		Task task = null;
		try {
            task = taskQuery.getSingleResult();
		} catch (Exception e) {
			return null;
		}
		
		return task;
	}

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
	
	public boolean addToProject(Project project, Task task) {
		if (projectDAO.findProjectById(project.getId()) != null &&
			getTaskById(task.getId()) != null) {
			
			project.addTask(task);
			task.setProject(project);
			em.persist(project);
			em.persist(task);
			
			return true;
		} else {
			return false;
		}
	}

	public boolean assignUser(Task task, User user) {
		if (findTaskByName(task.getName()) == null) {
			return false;
		}
		
		if (userDAO.getUserByName(user.getName()) == null) {
			return false;
		}
		
		task.assignUser(user);
		user.getTasks().add(task);
		em.persist(task);
		em.persist(user);
		return true;
	}

	public boolean changeStatus(Task task, TaskStatus status) {
		if (findTaskByName(task.getName()) == null) {
			return false;
		}
		
		task.setTaskStatus(status);
		em.persist(task);
		return true;
	}
}
