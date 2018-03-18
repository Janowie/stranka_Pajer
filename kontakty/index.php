<?php 
if(isset($_POST['submit'])){
    $to = "mail@bytyjurajovdvor.sk";
    $from = $_POST['email'];
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $number = $_POST['phone'];
    $subject = "Form submission";
    $message = "Meno odosielatela: " . $first_name . " " . $last_name . "\nCislo: " . $number . "\nMail: " . $from . "\nSprava:\n" . "\n" . $_POST['message'];
    $headers = "From:" . $from;

    mail($to,$subject,$message,$headers);
    }
?>

<!-- CONTACTS -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title> RJD </title>
	<link rel="icon" type="image/png" sizes="16x16" href="../images/logo_icon.png">
    
	<!-- Bootstrap -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
	
	<!-- own -->
	<link rel="stylesheet" type="text/css" href="../style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	
	
	<!--  Fonts  -->
	<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Pacifico" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Maven+Pro" rel="stylesheet">
	
	<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDkcPwb6rpDAINfbgSmTWBdzCQVkwJCwCA&callback=initMap">
    </script>
  </head>
  <body>
   
   <nav>
		<div class="container">
			
			
			<ul>
				<li><a class="navBrand" href="../index.html"> Byty Jurajov dvor </a></li>
				<li><img class="navLogo" src="../images/logo.png" alt="logo" /></li>
				<li style="float: right;" class="navButton">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navCollapse" aria-expanded="false">
						<div class="menuToggler"></div>
						<div class="menuToggler"></div>
					</button>
				</li>
				<div class="collapse navbar-collapse" id="navCollapse">
					<li><a href="#"> O projekte </a></li>
					<li><a href="../byty/index.html"> Byty a parkovanie</a></li>
					<li><a href="../financovanie/index.html"> Financovanie </a></li>
					<li><a href="index.html"> Kontakty </a></li>
				</div>
				
			</ul>
        </div>
    </nav>
	
	<p class="space"> Kontakty</p>
	<div style="background-color: #eee;">
		<div class="container" style="max-width: 750px;">
			<div class="row contacts">
				<div class="col-lg-6">
					<img src="../images/phone.png" alt="logoTelefon"/>
					<p><a href="tel:+421906022358">0906 022 358</a></p>
				</div>
				<div class="col-lg-6">
					<img src="../images/email.png" alt="logoEmail"/>
					<p> mail@bytyjurajovdvor.sk </p>
				</div>
			</div>
		</div>
	</div>

	<div class="container-fluid">
		<p class="text-center">
			<br><br>
			<span class="textHighlightBlack"> Navštívte naše predajné miesto</span> <br>
			na adrese Vajnorská 28, 805 12, Bratislava, <br>
			ktoré leží len 5 minút od Vášho budúceho domova!
			<br><br>
			
			<img src="../images/marker.png" alt="marker" style="width: 60px;" class="center"/>
			
			<br><br><br>	
			
		</p>
		
	
		<div id="map"></div>
	</div>
	
	
	<div class="container-fluid" style="background-color: black;">
			<div class="container writeUs">
                <p class="text-center textHighlightWhite"> Kontaktujte nás: </p>
                <form action="" method="post">
                    <input type="text" class="form-control" id="usr" placeholder="meno" name="first_name">
                    <input type="text" class="form-control" id="usr" placeholder="priezvisko" name="last_name">
                    <input type="text" class="form-control" id="usr" placeholder="telefón" name="phone">
                    <input type="text" class="form-control" id="usr" placeholder="email" name="email">
                    <div class="form-group">
                        <textarea class="form-control" cols="1" rows="10" id="comment" placeholder="správa" data-aid="messageField" type="text" name="message">
                        </textarea>
                    </div>
                    <input type="submit" class="enter form-control" id="usr" name="submit" value="Odoslať">
                </form>
			</div>
	</div>
	<!-- 
	 NIECO O ICH FIRME? 
	<div class="container">
	
		<p>
			Developerská firma XYZ sa 
		
		
		
		</p>
-->
	
	
	
		
	
	</div>


	
	

	
	<footer>
	
	
	</footer>	

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../js/bootstrap.min.js"></script>
    <script src="../script.js"></script>
  </body>
</html>
