package com.example.beer.dao;

import java.util.Collection;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.example.beer.model.Project;
import com.example.beer.model.User;

@Singleton
public class ProjectDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	public boolean addProject(Project project) {
		Project foundProject = findProjectByName(project.getName());
		
		if (foundProject == null) {
			em.persist(project);
			return true;
		} else {
			// TODO: Maybe update project title or users, or tasks?
			return false;
		}
	}

	public Project findProjectByName(String name) {
		String idQueryText = "SELECT p FROM Project p WHERE p.name= :projectName";
		TypedQuery<Project> idQuery = em.createQuery(idQueryText, Project.class);
		idQuery.setParameter("projectName", name);
		
		try {
			return idQuery.getSingleResult();
		} catch (NoResultException e) {
			return null;
		}
	}
	
	public Project findProjectById(int projectId) {
		String idQueryText = "SELECT p FROM Project p WHERE p.id= :projectId";
		TypedQuery<Project> idQuery = em.createQuery(idQueryText, Project.class);
		idQuery.setParameter("projectId", projectId);
		
		try {
			return idQuery.getSingleResult();
		} catch (NoResultException e) {
			return null;
		}
	}
	
	public Collection<Project> getAllProjects() {
		String queryText = "SELECT p FROM Project p";
		return em.createQuery(queryText, Project.class).getResultList();
	}
	
	public Collection<Project> getProjectsForUser(String user) {
		String queryText = "SELECT p FROM Project p WHERE :user in p.users";
		TypedQuery<Project> usersProjectsQuery = em.createQuery(queryText, Project.class);
		usersProjectsQuery.setParameter("user", user);
		
		return usersProjectsQuery.getResultList();
	}

	public boolean addUser(Project project, User user) {
		Project foundProject = findProjectByName(project.getName());
		
		if (foundProject == null) {
			return false;
		}
		
		project.addUser(user);
		em.persist(project);
		return true;
	}

	public boolean removeUser(Project project, User user) {
Project foundProject = findProjectByName(project.getName());
		
		if (foundProject == null) {
			return false;
		}
		
		project.removeUser(user);
		em.persist(project);
		return true;
	}
}
