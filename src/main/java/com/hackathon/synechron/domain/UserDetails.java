package com.hackathon.synechron.domain;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
public class UserDetails {
	
	private String name;
	
	private String email;
	
	@JsonIgnore
	private String password;
	
	private List<String> batches = new ArrayList<>();
}
