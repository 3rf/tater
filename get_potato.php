<?php
	include_once('bootstrap.php');

	// Set options
	$options = array('dir' => 'storage');
	     
	// Load the databases
	$progress = Flintstone::load('status', $options);
	$status = $progress->get('status');

	//check if potato in progress
	if($status['status'] == 1)
	{
		echo 'potato is engaged';
		//header("HTTP/1.0 404 Not Found");
		exit;
	}
	else
	{
		// Set options
		$options = array('dir' => 'storage');
		     
		// Load the databases
		$users = Flintstone::load('users', $options);
		$play = Flintstone::load('play', $options);

		// Retrieve all key names
	    $keys = $users->getKeys(); // returns array('bob', 'joe', ...)
	    if($keys)
	    {
	    	$user = $play->get('lastPlay');
	    	if(isset($user['id']))
	    	{
	    		$newkeys = array_diff($keys, array($user['id']));
	    		$keys = $newkeys;
	    	}

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