<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<link href="webjars/bootstrap/5.3.1/css/bootstrap.min.css"
	rel="stylesheet">
<meta charset="UTF-8">
<title>할 일 추가하기</title>
</head>
<body>
	<div class="container">
		<h1>새로운 할 일을 작성하세요</h1>
		<form method="post">
			Description : <input type="text" name="description" />
			<input type="submit" class="btn btn-success" />
		
		</form>
	</div>
	<script src="webjars/bootstrap/5.3.1/js/bootstrap.min.js"></script>
	<script src="webjars/jquery/3.6.0/jquery.min.js"></script>

</body>
</html>