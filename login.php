<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		content="width=device-width, 
						initial-scale=1.0">
	<title>Log in page</title>
	<link rel="stylesheet"
		href="login.css">
</head>

<body>
	<header>
		<h1 class="heading">WELCOME TO DairyKART</h1>
		<!--h3 class="title">Sliding Login & Registration Form</h3-->
	</header>

	<!-- container div -->
	<div class="container">

		<!-- upper button section to select
			the login or signup form -->
		<div class="slider"></div>
		<div class="btn">
			<button class="login">Login</button>
			<button class="signup">Signup</button>
		</div>

		<!-- Form section that contains the
			login and the signup form -->
		<div class="form-section">

			<!-- login form -->
			<form class="login-box">
				<input type="email"
					class="email ele"
					placeholder="youremail@email.com" required>
				<input type="password"
					class="password ele"
					placeholder="password" required>
				<a href="project.html"><button type="clkbtn">Login</button></a>
				
			</form>
			<div id="errorMessage" class="error-message"></div>

			<!-- signup form -->
			<form class="signup-box">
				<input type="text" name="name"
					class="name ele"
					placeholder="Enter your name" required>
				<input type="email" name="email"
					class="email ele"
					placeholder="youremail@email.com" required>
				<input type="password" name="password"
					class="password ele"
					placeholder="password" required>
				<input type="password"
					class="password ele" name="Confirmpassword"
					placeholder="Confirm password" required>
				<button type="clkbtn">Signup</button>

			</form>
		</div>
	</div>
	<script src="login.js"></script>
</body>
</html>
