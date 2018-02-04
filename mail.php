<?php 

header('Access-Control-Allow-Origin: *');

$from_email = 'From: Quasi Design <info@qausidesign.com>';
$to_email = 'Reply-To: Quasi Design <info@quasidesign.com>';


$email_subject = "Your Enquiry - Reg";
$email_body = "<html><body>";
$email_body .= "Dear ".$name.",<br> We received your message, Thank you for contacting us. We will reach you soon regarding your query.<br><br><strong>Thanks and Regards</strong><br>ABC Private Limited";
$email_body .='</body></html>';
$headers = $config["from_email"]. "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

$email_admin_body .= "Dear Sir,<br> We received a message from <strong>Mr.".$name."</strong>, The customer query is <strong>".$message."</strong>";

mail($email,$email_subject,$email_body,$headers);
mail($to_email, $email_subject, $email_admin_body, $headers);

?>