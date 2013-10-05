<?php
	include_once('bootstrap.php');

	// Set options
	$options = array('dir' => 'storage');
	     
	// Load the databases
	$users = Flintstone::load('users', $options);

	// Retrieve all key names
    $keys = $users->getKeys(); // returns array('bob', 'joe', ...)
    if($keys)
    {
    	$key = array_rand($keys);
    	echo $keys[$key];
    	exit;
    }
    else
    {
    	header("HTTP/1.0 404 Not Found");
		exit;
    }
?>