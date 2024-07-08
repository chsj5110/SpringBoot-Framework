package com.soojinChoi.springboot.myfirstwebapp.login;


import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.soojinChoi.springboot.myfirstwebapp.loginAuthenticationService.AuthenticationService;

@Controller
@SessionAttributes("name")
public class LoginController {
	
//	private AuthenticationService authenticationService;
//	
//	public LoginController(AuthenticationService authenticationService) {
//		super();
//		this.authenticationService = authenticationService;
//	}
	
	@RequestMapping(value="/",method=RequestMethod.GET)
	public String gotoWelcomePage(ModelMap model) {
		model.put("name", getLoggedinUsername());
		return "welcome";
	}

//	@RequestMapping(value="login",method=RequestMethod.GET)
//	public String loginPage() {
//		return "login";
//	}
//	
//	@RequestMapping(value="login",method=RequestMethod.POST)
//	public String welcomePage(@RequestParam String name, @RequestParam String password, ModelMap model) {
//		
//		if(authenticationService.authenticate(name, password)) {
//			model.put("name", name);
//
//			// Authentication
//			// name - Soojin
//			// password - 1234
//			return "welcome";
//		}
//		
//		model.put("errorMessage", "저장되지 않은 로그인 정보입니다. 다시 시도해주세요");
//		return "login";
//		
//	}
	
	private String getLoggedinUsername() {
		Authentication authentication = 
				SecurityContextHolder.getContext().getAuthentication();
		return authentication.getName();
	}
}
