package com.hackathon.synechron.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/rewards")
public class RewardsController {
	
	@GetMapping("/getRewards/{userName}")
	public List<String> getUserRewardsByName(@PathVariable("userName") String name) {
		List<String> userBatches = new ArrayList<String>();
		
		return null;
	}
	

}
