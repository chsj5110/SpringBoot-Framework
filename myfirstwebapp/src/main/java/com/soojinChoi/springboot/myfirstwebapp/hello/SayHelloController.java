package com.soojinChoi.springboot.myfirstwebapp.hello;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class SayHelloController {
	//"say-hello" => "Hello! What are you learning today?"
	
	@RequestMapping("say-hello")
	@ResponseBody
	public String sayHello() {
		return "Hello! What are you learning today?";
	}
	
	@RequestMapping("say-hello-html")
	@ResponseBody
	public String sayHelloHtml() {
		StringBuffer sb = new StringBuffer();
		sb.append("<html>");
		sb.append("<head>");
		sb.append("<title> 예제로 하드코딩하는 html </title>");
		sb.append("</head>");
		sb.append("<body>");
		sb.append("<p>여러분은 이런 짓을 하는 일이 없기를...</p>");
		sb.append("</body>");
		sb.append("</html>");
		
		return sb.toString();
	}
	
	//"say-hello-jsp" => sayHello.jsp
	@RequestMapping("say-hello-jsp")
	// ResponseBody 어노테이션 없애야함
	public String sayHelloJsp() {
		// 리턴 스트링 + .jsp 파일을 연다
		return "sayHello";
	}
	
}
