package com.hackathon.synechron.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.hackathon.synechron.service.WeatherService;

@Service
public class WeatherServiceImpl implements WeatherService {

	//
	private final RestTemplate restTemplate;
    private final String apiKey;
    private final String pollutionApiKey;
    private final String pollutionApiUrl;
    
    @Value("${weather.forecast.url}")
    private String weatherForecastUrl;

    public WeatherServiceImpl(@Value("${weatherapi.key}") String apiKey, 
    		@Value("${pollution.api.key}") String pollutionApiKey,
    		@Value("${pollution.api.url}") String pollutionApiUrl) {
        this.restTemplate = new RestTemplate();
        this.apiKey = apiKey;
        this.pollutionApiKey = pollutionApiKey; 
        this.pollutionApiUrl = pollutionApiUrl;
    }
    
	@Override
	public String getForecastForLocation(String location) {
		String url = String.format(
				weatherForecastUrl + "key=%s&q=%s&days=1&aqi=no&alerts=no",
				apiKey, location
				);
		return restTemplate.getForObject(url, String.class);
	}

	@Override
	public String getPollutionDetailsUsingLocation(String location) {
        String url = this.pollutionApiUrl + location + "/?token=" + pollutionApiKey;
        return restTemplate.getForObject(url, String.class);
    }

}
