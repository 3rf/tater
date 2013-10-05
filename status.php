<?php
	include_once('bootstrap.php');

	// 0 is available
	//1 is engaged
	if(isset($_POST['status']))
	{
		// Set options
		$options = array('dir' => 'storage');
		     
		// Load the databases
		$status = Flintstone::load('status', $options);
		$status->set('status', array('status' => $_POST['status']));

		if(isset($_POST['id']))
		{
			$play = Flintstone::load('play', $options);
			$play->set('lastPlay', array('id' => $_POST['id']));
		}		
	}
?>