<?php
$to = "";
$subject = "Message";
$message = "Name: " . $_POST['name'] . "\n";
$message .= "Email: " . $_POST['email'] . "\n";
$headers = "From: sender@example.com";

mail($to, $subject, $message, $headers);
?>
