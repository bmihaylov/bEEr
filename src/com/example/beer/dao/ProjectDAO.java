package com.example.beer.dao;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.NoResultException;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.example.beer.model.Project;

@Singleton
public class ProjectDAO {
	
	@PersistenceContext
	private EntityManager em;
	
	public void addProject(Project project) {
		Project foundProject = findProjectByName(project.getName());
		
		if (foundProject != null) {
			em.persist(project);
		} else {
			// TODO: Maybe update project title or users, or tasks?
		}
	}

	public Project findProjectByName(String name) {
		TypedQuery<Project> query = em
				.createNamedQuery("findProjectByName", Project.class)
				.setParameter("name", name);
		
		try {
			return query.getSingleResult();
		} catch (NoResultException e) {
			return null;
		}
	}
}
