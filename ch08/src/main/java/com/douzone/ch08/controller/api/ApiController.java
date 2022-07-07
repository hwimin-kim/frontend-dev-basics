package com.douzone.ch08.controller.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.ch08.dto.JSONResult;
import com.douzone.ch08.vo.GuestbookVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@GetMapping("/text")
	public String text() {
		return "Text 데이타";
	}
	
	@GetMapping("/html")
	public String html() {
		return "<h1>AJAX연습</h1><p>HTML 데이터</p>";
	}
	
	@GetMapping("/json")
	public JSONResult json() {
		GuestbookVo vo = new GuestbookVo();
		vo.setNo(1L);
		vo.setName("둘리");
		vo.setMessage("호잇~");
		
		return JSONResult.success(vo);
		//return JSONResult.fail("error....");
	}
	
	@PostMapping("/post01")
	public JSONResult post01(GuestbookVo vo) {
		System.out.println(vo);
		
		// service -> repository: DB insert 성공 후,
		
		vo.setNo(1L);
		return JSONResult.success(vo);
	}
	
	@PostMapping("/post02")
	public JSONResult post02(@RequestBody GuestbookVo vo) {		
		vo.setNo(2L);
		return JSONResult.success(vo);
	}
}