<?php
	include_once('bootstrap.php');

	//check if potato in progress
	if(isset($_SESSION['status']) && $_SESSION['status'] == 1)
	{
		header("HTTP/1.0 404 Not Found");
		exit;
	}
	else
	{
		// Set options
		$options = array('dir' => 'storage');
		     
		// Load the databases
		$users = Flintstone::load('users', $options);

		// Retrieve all key names
	    $keys = $users->getKeys(); // returns array('bob', 'joe', ...)
	    if($keys)
	    {
	    	$_SESSION['status'] = 1;
	    	$key = array_rand($keys);
	    	echo $keys[$key];
	    	exit;
	    }
	    else
	    {
	    	header("HTTP/1.0 404 Not Found");
			exit;
	    }
	}
	
?>