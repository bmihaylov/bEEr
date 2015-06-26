package com.example.beer.dao;

import java.security.MessageDigest;
import java.security.SecureRandom;
import java.util.Collection;
import java.util.Random;

import javax.ejb.Singleton;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import com.example.beer.model.User;

@Singleton
public class UserDAO {

	@PersistenceContext
	private EntityManager em;
	
    String userQueryText = "SELECT u FROM User u WHERE u.name = :userName";

    String allUsersQueryText = "SELECT u FROM User u";
	

    enum ValidationResult {
    	NO_SUCH_USER, WRONG_PASS, SUCCESS;
    }

	public ValidationResult validateCredentials(String userName, String password) {
		User user = getUserByName(userName);
            
		if (user == null) {
			return ValidationResult.NO_SUCH_USER;
		}

		String supposedHash = hashPassword(user.getSalt(), password);
		
		if (user.getSaltPassHash().equals(supposedHash)) {
			return ValidationResult.SUCCESS;
		} else {
			return ValidationResult.WRONG_PASS;
		}
	}
	
	public User getUserByName(String userName) {
		TypedQuery<User> userQuery = em.createQuery(userQueryText, User.class);
		userQuery.setParameter("userName", userName);

		User user = null;
		try {
            user = userQuery.getSingleResult();
		} catch (Exception e) {
			return null;
		}
		return user;
	}
	
	public Collection<User> getAllUsers() {
		return em.createQuery(allUsersQueryText, User.class).getResultList();
	}
	
	public void addUser(User user, String password) {
		String salt = generateSalt();
		user.setSalt(salt);
		user.setSaltPassHash(hashPassword(salt, password));
		em.persist(user);
	}
	
	public static String generateSalt() {
		Random rng = new SecureRandom();
		byte[] saltBytes = new byte[User.getSaltLength()];

		rng.nextBytes(saltBytes);

		return new String(saltBytes);
	}

    private static String hashPassword(String salt, String password) {
    	String hash = null;
        try {
            MessageDigest mda = MessageDigest.getInstance("SHA-512");
            hash = new String(mda.digest((salt + password).getBytes()));
        } catch (Exception e) {
            e.printStackTrace();
        }
        return hash;
    }
}