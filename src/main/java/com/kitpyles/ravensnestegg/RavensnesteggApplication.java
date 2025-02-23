package com.kitpyles.ravensnestegg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

@SpringBootApplication
@ConfigurationPropertiesScan("com.kitpyles.ravensnestegg.config")
public class RavensnesteggApplication {

	public static void main(String[] args) {
		SpringApplication.run(RavensnesteggApplication.class, args);
	}

}
