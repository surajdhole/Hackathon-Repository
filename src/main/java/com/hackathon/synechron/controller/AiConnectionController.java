package com.hackathon.synechron.controller;

import org.springframework.web.bind.annotation.RestController;

import com.hackathon.synechron.service.impl.AIConnectionServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/connectAI")
public class AiConnectionController {
	
	@Autowired
	private AIConnectionServiceImpl aiConnectorService;
	
	@GetMapping("/getWhatToDo")
	public String getMethodName(@RequestParam("userName") String userName, @RequestParam("climate") String climate) {
		String question = "I am " + userName + " planning to go to the office, as its " + climate + " today what should I choose ?";
		return aiConnectorService.askQuestion(question);
	}
	

}
