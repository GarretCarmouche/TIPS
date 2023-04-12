package com.tips.TIPS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@SpringBootApplication
public class TipsMain {
    

    public static void main(String[] args){
        System.out.println("main");
        SpringApplication.run(TipsMain.class, args);
    }

    /*
	 * Name: corsConfigurue
	 * Purpose: Configures our API endpoints by overiding addCorsMappings
	 * Precondtion: Endpoins must exsit
	 * Postcondition: Allows user to call the endpoints via GET request
	 * Param: none
	 * Return: configurations to Spring Boot
	 * 
	 */
	
	//The Bean annotation allows Spring Boot container to manage our API endpoints
	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {};
	}
}