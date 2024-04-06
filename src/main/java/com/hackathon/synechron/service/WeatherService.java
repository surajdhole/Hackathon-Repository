package com.hackathon.synechron.service;

public interface WeatherService {
	
	public String getForecastForLocation(String location);
	
	public String getPollutionDetailsUsingLocation(String location);

}
