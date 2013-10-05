<?php
	include_once('bootstrap.php');

	// Set options
	$options = array('dir' => '/users');
	     
	// Load the databases
	$users = Flintstone::load('users', $options);

	if(empty($users))
	{
		header("Status: 404 Not Found");
		exit;
	}

	// Retrieve all key names
    $keys = $users->getKeys(); // returns array('bob', 'joe', ...)
     
    //pick random key and return to 
    return array_rand($keys);
	// if(isset($_POST['redirect']) && $_POST['redirect'] == 1){
	// 	header('Location:http://'.$host.$uri.'/?success=comments#comments');
	// 	exit;
	// }

	die("AOKPOTATO");

?>