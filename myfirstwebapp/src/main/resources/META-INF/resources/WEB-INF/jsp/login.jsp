<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>
</head>
<body>
	<div class="container">
		<h1>로그인페이지 입니다. 반갑습니다!</h1>
		<pre>${errorMessage}</pre>
		<form method="post">
			Name : <input type="text" name="name"> Password : <input
				type="password" name="password"> <input type="submit">
		</form>
	</div>
</body>
</html>