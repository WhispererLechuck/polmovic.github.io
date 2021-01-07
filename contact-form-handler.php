<?php
$name = $_Post['name'];
$visitor_email= $_Post['email'];
$message = $_post['message'];

$email_from= 'pablo.rodriguez.pc@gmail.com';
$email_subject='New form submission';
$email_body= "Username: $name.\n".
            "User message: $message.\n";

$to = "pablo.rodriguez.pc@gmail.com";
$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);
header("Location: index.html");
 ?>
