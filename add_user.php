<?php
	include_once('bootstrap.php');

	if(!isset($_POST['id']) OR empty($_POST['id']))
	{
		header("HTTP/1.0 404 Not Found");
		exit;
	}

	$id = $_POST('id');

	//add id to list
	try {
	    // Set options
	    $options = array('dir' => '/storage');
	     
	    // Load the databases
	    $users = Flintstone::load('users', $options);
	     
	    // Set keys
	    $users->set($id, array('id' => $id));
	 
	}
	catch (FlintstoneException $e) {
	    echo 'An error occured: ' . $e->getMessage();
	}

?>