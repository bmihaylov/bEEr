package com.example.beer.dto;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

import com.example.beer.model.Task;


@XmlRootElement
public class TaskContainer {

	public List<Task> tasks;

	public TaskContainer() {
		
	}

	public TaskContainer(Collection<Task> givenTasks) {
		tasks = new ArrayList<Task>();
		
		for (Task task: givenTasks) {
			tasks.add(task);
		}
	}

}
