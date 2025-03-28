<?php

$con = "";

try {
	$servername = "localhost";
	$username = "root";
	$password = "";
    $dbname = "Admin";

	$con = new PDO(
		"mysql:host=$servername; dbname=Admin",
		$username, $password
	);
	
$con->setAttribute(PDO::ATTR_ERRMODE,
					PDO::ERRMODE_EXCEPTION);
}
catch(PDOException $e) {
	echo "Connection failed: " . $e->getMessage();
}

?>
