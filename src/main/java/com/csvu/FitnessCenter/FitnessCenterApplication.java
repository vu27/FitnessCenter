package com.csvu.FitnessCenter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FitnessCenterApplication {

	public static void main(String[] args) {
		SpringApplication.run(FitnessCenterApplication.class, args);
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurer() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://127.0.0.1:8080");
			}
		};
	}

	@CrossOrigin
	@RestController
	public class IndexController implements ErrorController {

		private static final String PATH = "/error";

		@RequestMapping(value = PATH)
		public ModelAndView saveLeadQuery() {
			return new ModelAndView("forward:/");
		}

		@Override
		public String getErrorPath() {
			return PATH;
		}
	}

	@Controller
	public class CustomErrorController implements ErrorController {

		@Override
		public String getErrorPath() {
			return "/error";
		}
	}
}
