package com.soojinChoi.rest.webservices.restful_web_services.security;

import static org.springframework.security.config.Customizer.withDefaults;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SpringSecurityConfiguration {
	
	@Bean
	public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
		
		//1. 모든 요청이 인증되도록 함
		http.authorizeHttpRequests(
				auth ->auth.anyRequest().authenticated()
				);
		
		//2. 인증되지 않은 요청시에는 기본 웹페이지가 보이게 함
		http.httpBasic(withDefaults());
		
		//3. CSRF 해제
		http.csrf().disable();
		return http.build();
	}

}
