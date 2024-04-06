package com.hackathon.synechron.service.impl;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class AIConnectionServiceImpl {


    @Value("${huggingface.api.key}")
    private String apiKey;

    private RestTemplate restTemplate = new RestTemplate();
    private final String modelEndpoint = "https://api-inference.huggingface.co/models/EleutherAI/gpt-neo-2.7B";

    public String askQuestion(String question) {
        HttpHeaders headers = new HttpHeaders();
        headers.setBearerAuth(apiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        String requestBody = "{\"inputs\": \"" + question + "\"}";
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = restTemplate.postForEntity(modelEndpoint, entity, String.class);
        return response.getBody();
    }
}