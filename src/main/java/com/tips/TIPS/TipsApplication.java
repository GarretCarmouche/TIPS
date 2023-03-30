package com.tips.TIPS;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class TipsApplication {

	public static void main(String[] args) {
		System.out.println("TIPS!");
		SpringApplication.run(TipsApplication.class, args);
	}

}
