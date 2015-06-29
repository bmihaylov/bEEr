package com.example.beer.dto;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

import com.example.beer.model.User;

@XmlRootElement
public class UserDTOContainer {

	public List<UserDTO> userDTOs;

	public UserDTOContainer() {
		
	}

	public UserDTOContainer(Collection<User> users) {
		userDTOs = new ArrayList<UserDTO>();
		
		for (User user: users) {
			userDTOs.add(new UserDTO(user));
		}
	}

}