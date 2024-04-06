package com.hackathon.synechron.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.synechron.service.WeatherService;


@RestController
@RequestMapping("/climate")
public class WeatherController {
	
	@Autowired
	private WeatherService weatherService;
	
	@GetMapping("/getForecast")
	public String getMethodName(@RequestParam("location") String location) {
		return weatherService.getForecastForLocation(location);
	}
	
	
	@GetMapping("/getPollutionDetails")
	public String getPollutionDetails(@RequestParam("location") String location) {
		return weatherService.getPollutionDetailsUsingLocation(location);
	}
}
