package com.hackathon.synechron.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hackathon.synechron.domain.UserDetails;


@RestController
@RequestMapping("/user")
public class UserController {
	
	public static Map<String, UserDetails> userMap = new HashMap<>();

	@PostMapping("/registerUser")
	public String postMethodName(@RequestBody UserDetails user) {
		if(!userMap.containsKey(user.getName())) {
			userMap.put(user.getName(), user);
			return "user registered successfully!";
		} else {
			return "user already exist, try other username";
		}
	}
	
	@GetMapping("/getAllUsers")
	public List<UserDetails> getAllUsers() {
		return userMap.entrySet().stream().map(a -> a.getValue()).collect(Collectors.toList());
	}
	
	
}
