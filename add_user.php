<?php
	include_once('bootstrap.php');
	
	if (isset ($_POST["action"]) &&  $_POST["action"] == "addPerson"){
		$id = $_POST('id');
		if(empty($id))
		{
			header("Status: 404 Not Found");
			exit;
		}

		//add id to list
		try {
		    // Set options
		    $options = array('dir' => '/users');
		     
		    // Load the databases
		    $users = Flintstone::load('users', $options);
		     
		    // Set keys
		    $users->set($id, array('id' => $id));
		 
		}
		catch (FlintstoneException $e) {
		    echo 'An error occured: ' . $e->getMessage();
		}

		die("AOKPOTATO");
	}

?>