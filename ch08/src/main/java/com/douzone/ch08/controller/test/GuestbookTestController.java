package com.douzone.ch08.controller.test;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/test/gb")
public class GuestbookTestController {
	// add
	@GetMapping("/ex01")
	public String ex01() {
		return "gb/ex01";
	}
	
	// list
	@GetMapping("/ex02")
	public String ex02() {
		return "gb/ex02";
	}
	
	// delete
	@DeleteMapping("/ex03")
	public String ex03() {
		return "gb/ex03";
	}
	
}
