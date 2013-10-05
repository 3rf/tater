<?php
	include_once('bootstrap.php');

	// 0 is available
	//1 is engaged
	if(isset($_POST['status']) && isset($_POST['id']))
	{
		// Set options
		$options = array('dir' => 'storage');
		     
		// Load the databases
		$status = Flintstone::load('status', $options);
		$play = Flintstone::load('play', $options);
		
		$status->set('status', array('status' => $_POST['status']));
		$play->set('lastPlay', array('id' => $_POST['id']));
	}
?>