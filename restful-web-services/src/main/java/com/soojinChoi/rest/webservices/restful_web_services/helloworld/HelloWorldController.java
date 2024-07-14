package com.soojinChoi.rest.webservices.restful_web_services.helloworld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

//1. 컨트롤러 : REST API 노출 - @RestController
@RestController
public class HelloWorldController {
	// 2. Rest API URL을 부여(hello-world) - @RequestMapping 또는 GetMApping
	// @RequestMapping(method=RequestMethod.GET, path = "/hello-world")
	@GetMapping(path = "/hello-world")
	public String helloWorld() {

		// 3. "Hello World"를 반환
		return "Hello World";
	}

	@GetMapping(path = "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {

		return new HelloWorldBean("Hello World");
	}

	// Path Parameters
	// /users/{id}/todos/{id} => /users/1/todos/101
	// /hello-world/path-variable/{name}
	@GetMapping(path = "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariable(@PathVariable String name) {

		return new HelloWorldBean(String.format("Hello World, %s", name));
	}

}
