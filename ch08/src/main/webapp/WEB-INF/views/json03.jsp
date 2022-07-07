<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src='${pageContext.request.contextPath}/jquery/jquery-3.6.0.js'></script>
<script type="text/javascript">
$(function () {
	$('button').click(function() {
		var vo = {
				name: '둘리',
				password: '1234',
				message: '호이~'
		}
		
		$.ajax({
			url:'${pageContext.request.contextPath}/api/post01',
			type: 'post',																				// method
			dateType: 'json',																		// 응답 포맷
			contentType: 'application/x-www-form-urlencoded',		// 요청 바디 데이터 포맷, default
			data: $.param(vo),
			success: function(response) {
				if(response.result === 'fail') {
					console.error(response.message);
					return;
				}
				
				var vo = response.data;
				var htmls = "";
				htmls += ('<h3>' + vo.no + '</h3>');
				htmls += ('<h4>' + vo.name + '</h4>');
				htmls += ('<h5>' + vo.message + '</h5>');
				
				$('#data').html(htmls);
			},
			error: function(request, status, error) {
				console.error(status, error);
			}
		});
	});
});
</script>
</head>
<body>
			<h1>AJAX test: JSON format Data: $.ajax() 함수 사용하기</h1>
			
			<button>데이터 가져오기</button>
			<div id='data'></div>
</body>
</html>