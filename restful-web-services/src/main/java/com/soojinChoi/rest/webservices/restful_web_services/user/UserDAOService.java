package com.soojinChoi.rest.webservices.restful_web_services.user;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class UserDAOService {
	// DAO의 역할 : 데이터베이스에 데이터를 저장하고 JPA 및 Hibernate 를 이용하여 데이터베이스와 통신
	
	private static List<User> users = new ArrayList<>();
	
	static {
		users.add(new User(1, "Soojin", LocalDate.now().minusYears(30)));
		users.add(new User(1, "Hongrim", LocalDate.now().minusYears(28)));
		users.add(new User(1, "Jason", LocalDate.now().minusYears(20)));
	}
	
	public List<User> findAll(){
		return users;
	}

}
